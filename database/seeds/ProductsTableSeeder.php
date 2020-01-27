<?php

use App\Imports\ProductsImport;
use Illuminate\Database\Seeder;
use Maatwebsite\Excel\Facades\Excel;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // I need to export local products table from DB cuz it does not find products .xlsx
        Excel::import(new ProductsImport, './products.xlsx');
    }
}
