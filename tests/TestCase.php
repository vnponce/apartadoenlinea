<?php

namespace Tests;

use App\Product;
use App\Store;
use Gloudemans\Shoppingcart\Facades\Cart;
use Illuminate\Support\Arr;
use PHPUnit\Framework\Assert;
use Illuminate\Foundation\Testing\TestResponse;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;
    protected function setUp(): void
    {
        parent::setUp();

        TestResponse::macro('props', function ($key = null, $isPaginated = false) {
            $props = json_decode(json_encode($this->original->getData()['page']['props']), JSON_OBJECT_AS_ARRAY);

            if ($key) {
                if($isPaginated) {
                    $paginated = Arr::get($props, $key); // regresa 'orders' array $key = 'orders'
                    return Arr::get($paginated, 'data'); // paginated entrega un arayy como suggestions => [data => [suggestions data], links => [..pagination data] ]
                }
                return Arr::get($props, $key); // regresa 'orders' array $key = 'orders'
            }

            return $props;
        });

        TestResponse::macro('assertHasProp', function ($key) {
            Assert::assertTrue(Arr::has($this->props(), $key));

            return $this;
        });

        TestResponse::macro('assertPropValue', function ($key, $value, $isPaginated = false) {
            // $key = 'orders'
            $this->assertHasProp($key);

            if (is_callable($value)) {
                $value($this->props($key, $isPaginated));
            } else {
                Assert::assertEquals($this->props($key, $isPaginated), $value);
            }

            return $this;
        });

        TestResponse::macro('assertPropCount', function ($key, $count, $isPaginated = false) {
            $this->assertHasProp($key);

            Assert::assertCount($count, $this->props($key, $isPaginated));

            return $this;
        });
    }

    public function createCart()
    {
        Cart::destroy();

        // Create Cart
        $this->addItemToCart();
        $this->addOrderDetails();
    }

    public function addItemToCart($product = false)
    {
        $currentProduct = $product ? $product : factory(Product::class)->create();
        Cart::add($currentProduct, 1, ['comment' => 'test'])->associate(Product::class);
    }

    public function addOrderDetails($store = false)
    {
        Cart::add('orderDetailsId', 'OrderDetails', 1, 0, [
            'store' => $store ? $store->id : factory(Store::class)->create()->id ,
            'date' => '2019-11-23T18:00:00.000Z',
            'hour' => '1:00',
            'name' => 'Abel',
            'lastname' => 'Ponce',
            'phone' => '2299017147',
            'email' => 'vnpoce8@gmail.com',
            'employeeName' => 'employeeNameName',
        ]);
    }

}
