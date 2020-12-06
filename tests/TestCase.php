<?php

namespace Tests;

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

}
