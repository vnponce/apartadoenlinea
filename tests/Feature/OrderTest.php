<?php

namespace Tests\Features;

use App\Product;
use App\Store;
use Gloudemans\Shoppingcart\Facades\Cart;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class OrderTest extends TestCase
{
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
}
