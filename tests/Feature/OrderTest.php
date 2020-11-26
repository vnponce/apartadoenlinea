<?php

namespace Tests\Features;

use App\Category;
use App\Mail\OrderDetails;
use App\Order;
use App\Product;
use App\Store;
use App\User;
use Carbon\Carbon;
use Gloudemans\Shoppingcart\Facades\Cart;
use Illuminate\Support\Facades\Mail;
use Jenssegers\Date\Date;
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
        $this->withoutExceptionHandling();
        Cart::destroy();
        Mail::fake();
        $user = factory(User::class)->create();
        $this->actingAs($user);
        $product = factory(Product::class)->create();
        $store = factory(Store::class)->create();

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
            'employeeName' => 'employeeNameName',
        ]);
        // Assert that no mailables were sent...
        Mail::assertNothingSent();
        $response = $this->post("pedido");
        $response->assertStatus(200);
        $order = Order::first();

        Mail::assertSent(OrderDetails::class, function ($mail) use ($order) {
            return $mail->order->id === $order->id;
        });

        // Assert a message was sent to the given users...
        Mail::assertSent(OrderDetails::class, function ($mail) use ($user) {
            return $mail->hasTo($mail->order->email);
        });
    }

    /** @test */
    function it_have_comment_products()
    {
        $this->withoutExceptionHandling();
        Cart::destroy();
        Mail::fake();
        $user = factory(User::class)->create();
        $this->actingAs($user);
        $product = factory(Product::class)->create();
        $store = factory(Store::class)->create();

        // Create Cart
        Cart::add($product, 1, ['comment' => 'test message'])->associate(Product::class);
        Cart::add('orderDetailsId', 'OrderDetails', 1, 0, [
            'store' => $store->id,
            'date' => '2019-11-23T18:00:00.000Z',
            'hour' => '1:00',
            'name' => 'Abel',
            'lastname' => 'Ponce',
            'phone' => '2299017147',
            'email' => 'vnpoce8@gmail.com',
            'employeeName' => 'employeeNameName',
        ]);
        $this->post("pedido");
        $this->assertDatabaseHas('order_product', [
            'product_id' => $product->id,
            'comment' => 'test message',
        ]);
    }

    /** @test */
    function it_have_customized_products()
    {
        $this->withoutExceptionHandling();
        Cart::destroy();
        Mail::fake();
        $user = factory(User::class)->create();
        $this->actingAs($user);
        $product = factory(Product::class)->create();
        $store = factory(Store::class)->create();

        // Create Cart
        Cart::add($product, 1, ['custom_message' => 'test message'])->associate(Product::class);
        Cart::add('orderDetailsId', 'OrderDetails', 1, 0, [
            'store' => $store->id,
            'date' => '2019-11-23T18:00:00.000Z',
            'hour' => '1:00',
            'name' => 'Abel',
            'lastname' => 'Ponce',
            'phone' => '2299017147',
            'email' => 'vnpoce8@gmail.com',
            'employeeName' => 'employeeNameName',
        ]);
        $this->post("pedido");
        $this->assertDatabaseHas('order_product', [
            'product_id' => $product->id,
            'custom_message' => 'test message',
        ]);
    }
}
