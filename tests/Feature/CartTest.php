<?php

namespace Tests\Feature;

use App\Product;
use App\User;
use Gloudemans\Shoppingcart\Facades\Cart;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CartTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    function it_can_store_product_with_custom_message_in_cart()
    {
        Cart::destroy();
        $product = factory(Product::class)->create();
        $user = factory(User::class)->create();
        $this->actingAs($user)
            ->post('/cart', [
                'product_id' => $product->id,
                'quantity' => 1,
                'custom_message' => 'dummy custom text'
            ]);

        $this->assertEquals([
            'custom_message' => 'dummy custom text',
            'comment' => null,
            'allow_instructions' => false,
        ], Cart::content()->first()->options->toArray());
    }
}
