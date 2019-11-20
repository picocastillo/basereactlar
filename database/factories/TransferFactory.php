<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Transfer;
use Faker\Generator as Faker;

$factory->define(Transfer::class, function (Faker $faker) {
    return [
        'description' => 'asd',
        'amount' => rand(1,900),
        'wallet_id'  => 1
    ];
});
