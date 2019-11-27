<?php

use App\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Super Sayayin Dios',
            'email' => 'god@panaderialaespecial.com.mx',
            'role' => 'god',
            'password' => bcrypt('secret'),
            'avatar' => 'https://areajugones.sport.es/wp-content/uploads/2015/10/super_saiyan_god_super_saiyan__ssgss__goku_by_mikkkiwarrior3-d8wv7hx.jpg'
        ]);
        User::create([
            'name' => 'Super Sayayin',
            'email' => 'admin@panaderialaespecial.com.mx',
            'role' => 'admin',
            'password' => bcrypt('secret'),
            'avatar' => 'http://mouse.latercera.com/wp-content/uploads/2018/01/ssj3.png'
        ]);
    }
}
