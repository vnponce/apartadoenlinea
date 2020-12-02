<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Suggestion;
use Faker\Generator as Faker;

$factory->define(Suggestion::class, function (Faker $faker) {
    return [
        //
    ];
});

$factory->afterCreating(Suggestion::class, function ($suggestion) {
    $suggestion->setStatus('created');
});
