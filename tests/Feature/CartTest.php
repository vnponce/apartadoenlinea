<?php

namespace Tests\Feature;

use App\Category;
use App\Product;
use App\User;
use Gloudemans\Shoppingcart\Facades\Cart;
use Illuminate\Foundation\Testing\RefreshDatabase;
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
            'customizable' => true,
            'custom_message' => 'dummy custom text',
            'comment' => null,
            'allow_instructions' => false,
        ], Cart::content()->first()->options->toArray());
    }

    /** @test */
    function it_should_update_custom_message()
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

//        Route::post('/cart/product/{product}/update/comment', 'CartController@updateComment');
//        dd(Cart::content());
        $this->post("/cart/product/$product->id/update/custom-message", [
            'remove_rowId' => Cart::content()->first()->rowId,
            'custom_message' => 'new custom message',
        ]);

        $this->assertEquals([
            'customizable' => true,
            'custom_message' => 'new custom message',
            'comment' => null,
            'allow_instructions' => false,
        ], Cart::content()->first()->options->toArray());
    }

    /** @test */
    function it_can_update_comment_without_affect_custom_message_from_same_product()
    {
        Cart::destroy();
        $category = factory(Category::class)->create([
            'name' => 'Bocadillos'
        ]);
        $product = factory(Product::class)->create([
            'name' => 'First item',
            'category_id' => $category->id,
        ]);
        $product2 = factory(Product::class)->create([
            'name' => 'Second item',
            'category_id' => $category->id,
        ]);
        $user = factory(User::class)->create();
        $this->actingAs($user)
            ->post('/cart', [
                'product_id' => $product->id,
                'quantity' => 1,
                'comment' => 'first product comment',
                'custom_message' => 'first custom message',
            ]);
        $this->actingAs($user)
            ->post('/cart', [
                'product_id' => $product2->id,
                'quantity' => 2,
                'comment' => 'second product comment',
                'custom_message' => 'second custom message',
            ]);

//        Route::post('/cart/product/{product}/update/comment', 'CartController@updateComment');
//        dd(Cart::content());
        $this->post("/cart/product/$product->id/update/comment", [
            'remove_rowId' => Cart::content()->first()->rowId,
            'comment' => 'new comment message',
            'quantity' => 1
        ]);
//        dd(Cart::content());

        $this->assertEquals(2, Cart::content()->count());

        // fist product
        $this->assertEquals([
            'customizable' => true,
            'custom_message' => 'first custom message',
            'comment' => 'new comment message',
            'allow_instructions' => true,
        ], Cart::content()->first()->options->toArray());

        // second product
        $this->assertEquals([
            'customizable' => true,
            'custom_message' => 'second custom message',
            'comment' => 'second product comment',
            'allow_instructions' => true,
        ], Cart::content()->reverse()->first()->options->toArray());
    }

    /** @test */
    function it_can_update_quantity_by_item()
    {
        Cart::destroy();
        $category = factory(Category::class)->create([
            'name' => 'Bocadillos'
        ]);
        $product = factory(Product::class)->create([
            'name' => 'First item',
            'category_id' => $category->id,
        ]);
        $product2 = factory(Product::class)->create([
            'name' => 'Second item',
            'category_id' => $category->id,
        ]);
        $user = factory(User::class)->create();
        $this->actingAs($user)
            ->post('/cart', [
                'product_id' => $product->id,
                'quantity' => 1,
                'comment' => 'first product comment',
                'custom_message' => 'first custom message',
            ]);
        $this->actingAs($user)
            ->post('/cart', [
                'product_id' => $product2->id,
                'quantity' => 2,
                'comment' => 'second product comment',
                'custom_message' => 'second custom message',
            ]);

//        Route::post('/cart/product/{product}/update/comment', 'CartController@updateComment');
//        dd(Cart::content());
        $this->actingAs($user)
            ->post('/cart', [
                'product_id' => $product2->id,
                'quantity' => 1,
                'comment' => 'second product comment',
                'custom_message' => 'second custom message',
            ]);

        $this->assertEquals(2, Cart::content()->count());

        $firstProduct = Cart::content()->first();
        $secondProduct = Cart::content()->reverse()->first();
        $this->assertEquals(1, $firstProduct->qty);
        $this->assertEquals(3, $secondProduct->qty);

        // fist product
        $this->assertEquals([
            'customizable' => true,
            'custom_message' => 'first custom message',
            'comment' => 'first product comment',
            'allow_instructions' => true,
        ], $firstProduct->options->toArray());

        // second product
        $this->assertEquals([
            'customizable' => true,
            'custom_message' => 'second custom message',
            'comment' => 'second product comment',
            'allow_instructions' => true,
        ], Cart::content()->reverse()->first()->options->toArray());
    }

    /** @test */
    function it_can_update_quantity_by_item_removing_it()
    {
        Cart::destroy();
        $category = factory(Category::class)->create([
            'name' => 'Bocadillos'
        ]);
        $product = factory(Product::class)->create([
            'name' => 'First item',
            'category_id' => $category->id,
        ]);
        $product2 = factory(Product::class)->create([
            'name' => 'Second item',
            'category_id' => $category->id,
        ]);
        $user = factory(User::class)->create();
        $this->actingAs($user)
            ->post('/cart', [
                'product_id' => $product->id,
                'quantity' => 1,
                'comment' => 'first product comment',
                'custom_message' => 'first custom message',
            ]);
        $this->actingAs($user)
            ->post('/cart', [
                'product_id' => $product2->id,
                'quantity' => 1,
                'comment' => 'second product comment',
                'custom_message' => 'second custom message',
            ]);

//        Route::post('/cart/product/{product}/update/comment', 'CartController@updateComment');
//        dd(Cart::content());
        $this->actingAs($user)
            ->post('/cart', [
                'product_id' => $product2->id,
                'quantity' => -1,
                'comment' => 'second product comment',
                'custom_message' => 'second custom message',
            ]);

        $this->assertEquals(1, Cart::content()->count());

        $firstProduct = Cart::content()->first();
        $this->assertEquals(1, $firstProduct->qty);

        // fist product
        $this->assertEquals([
            'customizable' => true,
            'custom_message' => 'first custom message',
            'comment' => 'first product comment',
            'allow_instructions' => true,
        ], $firstProduct->options->toArray());
    }

    /** @test */
    function it_can_update_custom_message_with_comment_in_product()
    {
        Cart::destroy();
        $category = factory(Category::class)->create([
            'name' => 'Bocadillos'
        ]);
        $product = factory(Product::class)->create([
            'name' => 'First item',
            'category_id' => $category->id,
        ]);
        $user = factory(User::class)->create();
        $this->actingAs($user)
            ->post('/cart', [
                'product_id' => $product->id,
                'quantity' => 3,
                'comment' => 'first product comment',
                'custom_message' => 'first custom message',
            ]);

//        dd(Cart::content());
        $firstProduct = Cart::content()->first();
        $this->actingAs($user)
            ->post("/cart/product/$product->id/update/custom-message", [
                'custom_message' => 'new custom message',
                'remove_rowId' => $firstProduct->rowId,
            ]);

        $firstProduct = Cart::content()->first();
        $this->assertEquals(1, Cart::content()->count());

        $this->assertEquals(3, $firstProduct->qty);

        // fist product
        $this->assertEquals([
            'customizable' => true,
            'custom_message' => 'new custom message',
            'comment' => 'first product comment',
            'allow_instructions' => true,
        ], $firstProduct->options->toArray());
    }
}
