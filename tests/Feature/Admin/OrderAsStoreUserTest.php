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
}
