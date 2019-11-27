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
            'name' => 'Pan de Dulce',
        ]);
        Category::create([
            'name' => 'Pan de Sal',
        ]);
        Category::create([
            'name' => 'Bocadillos',
        ]);
        Category::create([
            'name' => 'Repostería',
        ]);
        Category::create([
            'name' => 'Favoritos',
        ]);
    }
}
