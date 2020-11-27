<?php

namespace Tests\Feature\Admin;

use App\Order;
use App\Product;
use App\Store;
use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Str;
use Jenssegers\Date\Date;
use Tests\TestCase;

class OrderTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    function it_show_orders()
    {
        $product = factory(Product::class)->create();
        $user = factory(User::class)->create();
        $this->actingAs($user);
        // before test clear cartç
        $store = factory(Store::class)->create();
//        $date = Carbon::now();
        $date = new Date();  // Para tener la fecha en español
        $order = Order::create([
            'store_id' => $store->id,
            'date' => $date,
            'hour' => '11:00',
            'name' => 'Nombre',
            'lastname' => 'Apellido',
            'phone' => '1222312',
            'email' => 'email@test.com',
            'employeeName' => 'nombreEmpleado',
            'total' => 2000,
            // @todo: hacer status
            'status' => 'created',
        ]);

        $order->products()->attach($product->id, [
            'price' => $product->price * 100,
            'quantity' => 2,
            'comment' => $product->options->comment ?? '',
        ]);

        $response = $this->get('/admin')->assertSee('Nombre');
        $this->assertDatabaseHas('orders', $order->toArray());
        // dd($response->getOriginalContent()->getData());
        // dd($response->getOriginalContent()->getData()['page']['props']);
        $this->get('/admin')
            ->assertStatus(200)
            ->assertPropCount('orders', 1)
            ->assertPropValue('orders', function($orders) use($date){
                // dd($order[0]);
                $order = Order::first();
                $products = $order->products->map(function($product){
                    return [
                        'name' => $product->name,
                        'qty' => $product->pivot->quantity,
                        'price' => $product->pivot->price / 100,
                        'options' => [
                            'comment' => $product->pivot->comment,
                            'allow_instructions' => $product->pivot->allowInstructions,
                            'customizable' => $product->customizable,
                            'custom_message' => $product->pivot->customizable,
                        ],
                    ];
                });
//                dd($products->toArray());
//                dd($order->products);
                $this->assertEquals([
                    'id' => $order->id,
                    'uuid' => $order->uuid,
                    'date' =>  [
                        'formatted' => $date->format('D d M, H:ia'),
                        // This is a hack, because this date in a way is returning correct time zone but idk why is transformed in other timezone.
                        // This must be after formatted because it change timezone and it chang values.
                        'original' => $date->timezone('UTC')->format('Y-m-d\TH:i:s.\0\0\0\0\0\0\Z'),
                        'forToday' => $date->isToday(),
                        'forTomorrow' => $date->isTomorrow(),
                    ],
                    'customer' => [
                        'name' => 'Nombre Apellido',
                        'email' => 'email@test.com',
                        'phone' => '1222312',
                    ],
                    'store' => [
                        'friendlyAddress' => "Bernal Díaz del Castillo entre Isabel La Católica y Martí, Fracc. Reforma",
                        'name' => 'Bernal',
                        'isMatrix' => false,
                    ],
                    'products' => $products->toArray(),
                    'status' => [
                        'original' => $order->status,
                        'step' => $order->statusStep,
                    ],
                    'canceled' => 0, // idk pero debe ser 0 en lugar de false.
                    'payed' => [
                        'original' => false,
                        'label' => 'Pendiente',
                    ],
                    'employee' => [
                        'name' => 'nombreEmpleado',
                    ],
                    'total' => toFormat($order->total),
                ], $orders[0]);
            });
        // dd($response);
    }

    /** @test */
    function it_show_only_next_order_and_not_show_old_orders()
    {
        $orderToDeliverTomorrow = factory(Order::class)->create([
            'date' => now()->addDay(),
        ]);
        $orderToDeliverYesterday = factory(Order::class)->create([
            'date' => now()->subDay(),
        ]);
        $user = factory(User::class)->create();

        $response = $this->actingAs($user)->get("/admin");
        $response->assertStatus(200)
            ->assertPropCount('orders', 1)
            ->assertPropValue('orders', function($orders) use ($orderToDeliverTomorrow){
                $filteredOrder = collect($orders)->first();
                $this->assertEquals($orderToDeliverTomorrow->uuid, collect($filteredOrder)->get('uuid'));
            });
    }

    /** @test */
    function it_show_only_next_order_not_delivered_status_by_default()
    {
        $orderNotDeliveredYet = factory(Order::class)->create([
            'status' => 'created',
        ]);
        $orderDelivered = factory(Order::class)->create([
            'status' => 'delivered',
        ]);
        $user = factory(User::class)->create();

        $response = $this->actingAs($user)->get("/admin");
        $response->assertStatus(200)
            ->assertPropCount('orders', 1)
            ->assertPropValue('orders', function($orders) use ($orderNotDeliveredYet){
                $filteredOrder = collect($orders)->first();
                $this->assertEquals($orderNotDeliveredYet->uuid, collect($filteredOrder)->get('uuid'));
            });
        }

    /** @test */
    function it_search_by_id()
    {
        $expectedById = factory(Order::class)->create();
        $notExpectedById = factory(Order::class)->create();
        $user = factory(User::class)->create();

        $response = $this->actingAs($user)->get("/admin?id={$expectedById->uuid}");
        $response->assertStatus(200)
            ->assertPropCount('orders', 1)
            ->assertPropValue('orders', function($orders) use ($expectedById){
                $filteredOrder = collect($orders)->first();
                $this->assertEquals($expectedById->uuid, collect($filteredOrder)->get('uuid'));
            });
        }

    /** @test */
    function it_search_by_exact_date()
    {
        $today = now();
        $expectedByDate = factory(Order::class)->create([
            'date' => $today,
        ]);
        $notExpectedByDate = factory(Order::class)->create([
            'date' => now()->addDay()
        ]);
        $user = factory(User::class)->create();

        //Sun Nov 01 2020 12:00:00 GMT-0600
        $response = $this->actingAs($user)->get("/admin?date=$today");
        $response->assertStatus(200)
            ->assertPropCount('orders', 1)
            ->assertPropValue('orders', function($orders) use ($expectedByDate){
                $filteredOrder = collect($orders)->first();
                $this->assertEquals($expectedByDate->uuid, collect($filteredOrder)->get('uuid'));
            });
        }

    /** @test */
    function it_search_by_store()
    {
        $store = factory(Store::class)->create();
        $expectedByStore = factory(Order::class)->create([
            'store_id' => $store->id,
        ]);
        $notExpectedByStore = factory(Order::class)->create();
        $user = factory(User::class)->create();

        //Sun Nov 01 2020 12:00:00 GMT-0600
        $response = $this->actingAs($user)->get("/admin?store=$store->id");
        $response->assertStatus(200)
            ->assertPropCount('orders', 1)
            ->assertPropValue('orders', function($orders) use ($expectedByStore){
                $filteredOrder = collect($orders)->first();
                $this->assertEquals($expectedByStore->uuid, collect($filteredOrder)->get('uuid'));
            });
        }

    /** @test */
    function it_search_by_delivered_status()
    {
        $expectedByStatus = factory(Order::class)->create([
            'status' => 'delivered',
        ]);
        $notExpectedByStatus = factory(Order::class)->create([
            'status' => 'created',
        ]);
        $user = factory(User::class)->create();

        //Sun Nov 01 2020 12:00:00 GMT-0600
        $response = $this->actingAs($user)->get("/admin?status=delivered");
        $response->assertStatus(200)
            ->assertPropCount('orders', 1)
            ->assertPropValue('orders', function($orders) use ($expectedByStatus){
                $filteredOrder = collect($orders)->first();
                $this->assertEquals($expectedByStatus->uuid, collect($filteredOrder)->get('uuid'));
            });
        }

    /** @test */
    function it_search_by_not_delivered_status()
    {
        $expectedByCreatedStatus = factory(Order::class)->create([
            'status' => 'created',
        ]);
        $expectedByOpenedStatus = factory(Order::class)->create([
            'status' => 'opened',
        ]);
        $expectedByJourneyStatus = factory(Order::class)->create([
            'status' => 'journey',
        ]);
        $expectedByPlacedStatus = factory(Order::class)->create([
            'status' => 'placed',
        ]);
        $notExpectedByStatus = factory(Order::class)->create([
            'status' => 'delivered',
        ]);
//        dd($notExpectedByStatus->uuid);
        $user = factory(User::class)->create();

        //Sun Nov 01 2020 12:00:00 GMT-0600
//        $response = $this->actingAs($user)->get("/admin?status=no-delivered");
        $response = $this->actingAs($user)->get("/admin?status=not-delivered");
        $response->assertStatus(200)
            ->assertPropCount('orders', 4)
            ->assertPropValue('orders', function($orders) use ($notExpectedByStatus){
                $collectOrders = collect($orders);
                $this->assertFalse($collectOrders->search(function($order) use ($notExpectedByStatus) {
                    return collect($order)->get('uuid') === $notExpectedByStatus->uuid;
                }));
//                $this->assertEquals($expectedByStatus->uuid, collect($filteredOrder)->get('uuid'));
            });
        }

    /** @test */
    function it_search_by_all_status()
    {
        $expectedByCreatedStatus = factory(Order::class)->create([
            'status' => 'created',
        ]);
        $expectedByOpenedStatus = factory(Order::class)->create([
            'status' => 'opened',
        ]);
        $expectedByJourneyStatus = factory(Order::class)->create([
            'status' => 'journey',
        ]);
        $expectedByPlacedStatus = factory(Order::class)->create([
            'status' => 'placed',
        ]);
        $notExpectedByStatus = factory(Order::class)->create([
            'status' => 'delivered',
        ]);
//        dd($notExpectedByStatus->uuid);
        $user = factory(User::class)->create();

        //Sun Nov 01 2020 12:00:00 GMT-0600
//        $response = $this->actingAs($user)->get("/admin?status=no-delivered");
        $response = $this->actingAs($user)->get("/admin?status=all");
        $response->assertStatus(200)
            ->assertPropCount('orders', 5);
    }

    /** @test */
    function it_search_by_mixed_filters_without_uuid()
    {
        $user = factory(User::class)->create();
        $store = factory(Store::class)->create();
        $today = now();

        $expectedOrder = factory(Order::class)->create([
            'date' => now(),
            'store_id' => $store->id,
            'status' => 'delivered',
        ]);

//        $uuid = Order::first()->uuid;

        $notDate = factory(Order::class)->create([
            'date' => now()->addDay(),
            'store_id' => $store->id,
            'status' => 'delivered',
        ]);
        $notStore = factory(Order::class)->create([
            'date' => now(),
            'store_id' => factory(Store::class)->create()->id,
            'status' => 'delivered',
        ]);
        $notStatus = factory(Order::class)->create([
            'date' => now(),
            'store_id' => $store->id,
            'status' => 'created',
        ]);

//        $response = $this->actingAs($user)->get("/admin?store=1&date=$today&status=delivered");
        $response = $this->actingAs($user)->get("/admin?store={$store->id}&date=$today&status=delivered");
        $response->assertStatus(200)
            ->assertPropCount('orders', 1)
            ->assertPropValue('orders', function($orders) use ($expectedOrder){
//                dd(collect($orders)->toArray());
                $filteredOrder = collect($orders)->first();
//                $this->assertFalse($collectOrders->search(function($order) use ($notExpectedByStatus) {
//                    return collect($order)->get('uuid') === $notExpectedByStatus->uuid;
//                }));
                $this->assertEquals($expectedOrder->uuid, collect($filteredOrder)->get('uuid'));
            });
    }

    /** @test */
    function it_search_by_like_uuid()
    {
        $user = factory(User::class)->create();

        $expectedOrder = factory(Order::class)->create();

        $uuid =  Str::limit(Order::first()->uuid, 8, '');

        factory(Order::class, 10)->create();

        $response = $this->actingAs($user)->get("/admin?id=$uuid");
        $response->assertStatus(200)
            ->assertPropCount('orders', 1)
            ->assertPropValue('orders', function($orders) use ($expectedOrder){
                $filteredOrder = collect($orders)->first();
                $this->assertEquals($expectedOrder->uuid, collect($filteredOrder)->get('uuid'));
            });
    }

    /** @test */
    function it_can_update_the_status()
    {
        $user = factory(User::class)->create();
        factory(Order::class)->create()->each(function ($currentOrder) {
            $currentOrder->products()->save(factory(Product::class)->make());
        });

        $order = Order::first();
        $this->assertEquals('created', $order->status);

        $response = $this->actingAs($user)->put("/admin/orders/{$order->id}", [
            'status' => 'opened'
        ]);
        $response->assertStatus(302);
        $this->assertDatabaseHas('orders', [
            'status' => 'opened',
        ]);
    }

    /** @test */
    function it_can_change_to_canceled_state()
    {
        $this->withoutExceptionHandling();
        factory(Order::class)->create()->each(function ($currentOrder) {
            $currentOrder->products()->save(factory(Product::class)->make());
        });

        $order = Order::first();
        $this->actingAs(factory(User::class)->create())->put("/admin/orders/{$order->id}", [
            'canceled' => true
        ]);
        $this->assertDatabaseHas('orders', [
            'canceled' => true,
        ]);
    }

    /** @test */
    function it_can_change_to_payed_true()
    {
        $this->withoutExceptionHandling();
        factory(Order::class)->create()->each(function ($currentOrder) {
            $currentOrder->products()->save(factory(Product::class)->make());
        });

        $order = Order::first();
        $this->actingAs(factory(User::class)->create())->put("/admin/orders/{$order->id}", [
            'payed' => true,
        ]);
        $this->assertDatabaseHas('orders', [
            'payed' => true,
        ]);
    }

}
