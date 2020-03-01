<?php

/** @var Factory $factory */

use App\Order;
use App\Store;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;
use Jenssegers\Date\Date;

$factory->define(Order::class, function (Faker $faker) {
    return [
        'store_id' => factory(Store::class),
        'date' => new Date(),
        'hour' => '11:00',
        'name' => $faker->name,
        'lastname' => $faker->lastName,
        'phone' => $faker->phoneNumber,
        'email' => $faker->email,
        'employeeName' => $faker->name,
        'total' => 2000,
        // @todo: hacer status
        'status' => 'created',
        'state' => 'active',
    ];
});
