<?php

namespace Tests\Feature\Admin;

use App\Order;
use App\Store;
use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class OrderAsStoreUserTest extends TestCase
{
    use RefreshDatabase;

    protected $user;
    protected $storeOwned;

    public function setUp() :void
    {
        parent::setUp();
        $this->storeOwned = factory(Store::class)->create();
        $this->user = factory(User::class)
            ->states('manager')
            ->create();
        $this->user->stores()->attach($this->storeOwned->id);
    }

    /** @test */
    function it_show_only_orders_from_user_store_owned()
    {
        // osea solo puede ver las ordenes de su sucursal a la que esta vinculado
        $orderA = factory(Order::class)->create([
            'store_id' => $this->storeOwned->id,
        ]);
        $orderNotBelongToUser = factory(Order::class)->create();

        $response = $this->actingAs($this->user)->get("/admin");
        $response->assertStatus(200)
            ->assertPropCount('orders', 1)
            ->assertPropValue('orders', function($orders) use ($orderA){
                $filteredOrder = collect($orders)->first();
                $this->assertEquals($orderA->uuid, collect($filteredOrder)->get('uuid'));
            });
    }

    /** @test */
    function it_show_only_next_order_and_not_show_old_orders()
    {
        $orderToDeliverTomorrow = factory(Order::class)->create([
            'date' => now()->addDay(),
            'store_id' => $this->storeOwned->id,
        ]);
        $orderToDeliverYesterday = factory(Order::class)->create([
            'date' => now()->subDay(),
            'store_id' => $this->storeOwned->id,
        ]);
        $orderNotBelongToUser = factory(Order::class)->create([
            'date' => now()->subDay(),
        ]);

        $response = $this->actingAs($this->user)->get("/admin");
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
            'store_id' => $this->storeOwned->id,
        ]);
        $orderDelivered = factory(Order::class)->create([
            'store_id' => $this->storeOwned->id,
            'status' => 'delivered',
        ]);
        $orderNotBelongToUser = factory(Order::class)->create([
            'status' => 'created',
        ]);

        $response = $this->actingAs($this->user)->get("/admin");
        $response->assertStatus(200)
            ->assertPropCount('orders', 1)
            ->assertPropValue('orders', function($orders) use ($orderNotDeliveredYet){
//                dd($orders);
                $filteredOrder = collect($orders)->first();
                $this->assertEquals($orderNotDeliveredYet->uuid, collect($filteredOrder)->get('uuid'));
            });
    }

    /** @test */
    function it_search_by_id()
    {
        $expectedById = factory(Order::class)->create([
            'store_id' => $this->storeOwned->id,
        ]);
        $notExpectedById = factory(Order::class)->create([
            'store_id' => $this->storeOwned->id,
        ]);

        $response = $this->actingAs($this->user)->get("/admin?id={$expectedById->uuid}");
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
            'store_id' => $this->storeOwned->id,
        ]);
        $notExpectedByDate = factory(Order::class)->create([
            'date' => now()->addDay(),
            'store_id' => $this->storeOwned->id,
        ]);

        //Sun Nov 01 2020 12:00:00 GMT-0600
        $response = $this->actingAs($this->user)->get("/admin?date=$today");
        $response->assertStatus(200)
            ->assertPropCount('orders', 1)
            ->assertPropValue('orders', function($orders) use ($expectedByDate){
                $filteredOrder = collect($orders)->first();
                $this->assertEquals($expectedByDate->uuid, collect($filteredOrder)->get('uuid'));
            });
    }

    /** @test */
    function it_search_by_delivered_status()
    {
        $expectedByStatus = factory(Order::class)->create([
            'status' => 'delivered',
            'store_id' => $this->storeOwned->id,
        ]);
        $notExpectedByStatus = factory(Order::class)->create([
            'status' => 'created',
            'store_id' => $this->storeOwned->id,
        ]);

        //Sun Nov 01 2020 12:00:00 GMT-0600
        $response = $this->actingAs($this->user)->get("/admin?status=delivered");
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
            'store_id' => $this->storeOwned->id,
            'status' => 'created',
        ]);
        $expectedByOpenedStatus = factory(Order::class)->create([
            'store_id' => $this->storeOwned->id,
            'status' => 'opened',
        ]);
        $expectedByJourneyStatus = factory(Order::class)->create([
            'store_id' => $this->storeOwned->id,
            'status' => 'journey',
        ]);
        $expectedByPlacedStatus = factory(Order::class)->create([
            'store_id' => $this->storeOwned->id,
            'status' => 'placed',
        ]);
        $notExpectedByStatus = factory(Order::class)->create([
            'store_id' => $this->storeOwned->id,
            'status' => 'delivered',
        ]);

        $response = $this->actingAs($this->user)->get("/admin?status=not-delivered");
        $response->assertStatus(200)
            ->assertPropCount('orders', 4)
            ->assertPropValue('orders', function($orders) use ($notExpectedByStatus){
                $collectOrders = collect($orders);
                $this->assertFalse($collectOrders->search(function($order) use ($notExpectedByStatus) {
                    return collect($order)->get('uuid') === $notExpectedByStatus->uuid;
                }));
            });
    }
}
