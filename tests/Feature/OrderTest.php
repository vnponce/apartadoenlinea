<?php

namespace Tests\Features;

use App\Order;
use App\Product;
use App\Store;
use App\User;
use Carbon\Carbon;
use Gloudemans\Shoppingcart\Facades\Cart;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class OrderTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    function it_send_email_to_user_with_data()
    {
        // before test clear cart
        Cart::destroy();
        Mail::fake();
        $product = Product::first();
        $store = Store::first();

        // Create Cart
        Cart::add($product, 1, ['comment' => 'test'])->associate(Product::class);
        Cart::add('orderDetailsId', 'OrderDetails', 1, 0, [
            'store' => $store->id,
            'date' => '2019-11-23T18:00:00.000Z',
            'hour' => '1:00',
            'name' => 'Abel',
            'lastname' => 'Ponce',
            'phone' => '2299017147',
            'email' => 'vnpoce8@gmail.com',
        ]);
        $response = $this->post("pedido");

        $response->assertStatus(200);

        Mail::assertSentTo('vnponce8@gmail.com', );

        dd(Cart::content());
    }
    /** @test */
    function it_show_orders()
    {
        $user = User::create([
            'name' => 'Super Sayayin Dios',
            'email' => 'god@panaderialaespecial.mx',
            'role' => 'god',
            'password' => bcrypt('secret'),
            'avatar' => 'https://areajugones.sport.es/wp-content/uploads/2015/10/super_saiyan_god_super_saiyan__ssgss__goku_by_mikkkiwarrior3-d8wv7hx.jpg'
        ]);
        $this->actingAs($user);
        // before test clear cartç
        $store = factory(Store::class)->create([
            "name" =>"Bernal",
            "address" =>"Bernal Díaz del Castillo #630 entre Martí e Isabel la Católica, Reforma, 91919 Veracruz, Ver.",
            "friendly_address" =>"Bernal Díaz del Castillo entre Isabel La Católica y Martí, Fracc. Reforma",
            "delivery_time" =>"7:00 a 21:00",
            "lat" =>"19.1689372",
            "lon" =>"-96.1237504",
            "monday_saturday" =>"Lunes a sábado",
            "sunday" =>"Cierra",
        ]);
        $order = Order::create([
            'store_id' => $store->id,
            'date' => Carbon::now(),
            'hour' => '11:00',
            'name' => 'Nombre',
            'lastname' => 'Apellido',
            'phone' => '1222312',
            'email' => 'email@test.com',
            'employeeName' => 'nombreEmpleado',
            'total' => '200',
            // @todo: hacer status
            'status' => 'created',
        ]);

        $response = $this->get('/admin')->assertSee('Nombre');
        $this->assertDatabaseHas('orders', $order->toArray());
        dd($response->getOriginalContent()->getData());
        dd($response->getOriginalContent()->getData()['page']['props']);
        $this->get('/admin')
            ->assertStatus(200)
            ->assertPropValue('filters.trashed', 'with')
            ->assertPropCount('contacts.data', 5);
        // dd($response);
    }
}
