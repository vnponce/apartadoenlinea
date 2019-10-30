<?php

use App\Category;
use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Category::create([
            'name' => 'Preparados',
        ]);
        Category::create([
            'name' => 'Pan de Sal',
        ]);
        Category::create([
            'name' => 'Pan de Sal mini',
        ]);
        Category::create([
            'name' => 'Pan de Dulce mini',
        ]);
        Category::create([
            'name' => 'Pan de Dulce',
        ]);
    }
}
