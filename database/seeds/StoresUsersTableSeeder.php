<?php

use App\Store;
use App\User;
use Illuminate\Database\Seeder;

class StoresUsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $userMatrix = User::where('email', 'matriz@panaderialaespecial.mx')->first();
        $storeMatrix = Store::where('isMatrix', true)->first()->id;

        $userMatrix->stores()->attach($storeMatrix);
    }
}
