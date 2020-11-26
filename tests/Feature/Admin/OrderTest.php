<?php

namespace Tests\Feature\Admin;

use App\Order;
use App\Product;
use App\Store;
use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
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
