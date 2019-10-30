<?php

namespace App\Imports;

use App\Store;
use Maatwebsite\Excel\Concerns\ToModel;

class StoreImport implements ToModel
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new Store([
            'name' => $row[0],
            'friendly_address' => $row[1],
            'address' => $row[2],
            'monday_saturday' => $row[3],
            'delivery_time' => $row[4],
            'sunday' => $row[5],
            'lat' => '',
            'lon' => '',
        ]);
    }
}
