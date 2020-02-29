<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Product;
use Faker\Generator as Faker;

$factory->define(Product::class, function (Faker $faker) {
    return [
        "name" => $faker->text(7),
        "description" => $faker->sentence(10),
        "ingredients" => $faker->text(6),
        "image" => "public/products/plZXSjboICXf9sUaR888t4kK8ln7dWwZmYOXr9N8.jpeg",
        "price" => $faker->numberBetween(1000, 90000),
        "available" => true,
        "available_time" => null,
        "favorite" => true,
        "category_id" => function() {
            return factory(\App\Category::class);
        },
    ];
});
