<?php

namespace App\Imports;

use App\Category;
use App\Product;
use Maatwebsite\Excel\Concerns\ToModel;

class ProductsImport implements ToModel
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        $category = Category::where('name', $row[0])->first();
        $name = $row[2];
        if($name === '' || $name === null) {
            return null;
        }
        return new Product([
            'category_id' => $category->id,
            // subcategory not now. Must be later
            'name' => $name,
            'description' => $row[3] ?? '',
            'image' => 'products/Cuernito.png',
            'ingredients' => $row[4] ?? '',
            'available_time' => $row[5],
            'available' => true,
            'price' => $row[6] ?? 0,
        ]);
    }
}
