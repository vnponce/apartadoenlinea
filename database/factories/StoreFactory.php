<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Store;
use Faker\Generator as Faker;

$factory->define(Store::class, function (Faker $faker) {
    return [
        "name" =>"Bernal",
        "address" =>"Bernal Díaz del Castillo #630 entre Martí e Isabel la Católica, Reforma, 91919 Veracruz, Ver.",
        "friendly_address" =>"Bernal Díaz del Castillo entre Isabel La Católica y Martí, Fracc. Reforma",
        "delivery_time" =>"7:00 a 21:00",
        "lat" =>"19.1689372",
        "lon" =>"-96.1237504",
        "monday_saturday" =>"Lunes a sábado",
        "sunday" =>"Cierra",
    ];
});
