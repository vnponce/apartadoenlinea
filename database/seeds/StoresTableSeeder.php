<?php

use App\Imports\StoreImport;
use Illuminate\Database\Seeder;
use Maatwebsite\Excel\Facades\Excel;

class StoresTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Excel::import(new StoreImport, './stores.xlsx');
    }
}
