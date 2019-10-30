<?php

use Illuminate\Database\Seeder;

class ShopsSeedder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /*
        $shops = collect([
            [
                'key' => 'Bernal',
                'description' => 'Bernal Díaz del Castillo entre Isabel La Católica y Martí, Fracc. Reforma',
                'full_address' =>
                    'Bernal Díaz del Castillo #630 entre Martí e Isabel la Católica, Reforma, 91919 Veracruz, Ver.',
                'deliver_days' => '1, 2, 3, 4, 5, 6',
                'deliver_hours' => '7, 21',
                'sunday' => false,
                'latitude' => '19.1707806',
                'longitude' => '-96.1270615',
            ],
            [
                'key' => 'Bernal',
                'description' => 'Bravo esquina Zamora, colonia Centro',
                'full_address' =>
                    'BRAVO # 445 ESQ. ZAMORA COL: CENTRO CP:91700 VERACRUZ, VER.',
                'deliver_days' => '1, 2, 3, 4, 5, 6',
                'deliver_hours' => '7, 21',
                'sunday' => '7, 21',
                'latitude' => '19.1973319',
                'longitude' => '-96.1421741',
            ]
        ]);

        $shops->map(function ($shop) {
            factory(Shop::class)->create([
                'name' => $shop->name,
                'friendly_address' => $shop->friendle_address,
                'full_address' => $shop->full_address,
                'deliver_days' => $shop->deliver_days,
                'deliver_hours' => $shop->deliver_hours,
                'sunday' => $shop->sunday,
                'latitude' => $shop->latitude,
                'longitude' => $shop->longitude,
            ]);
        });
        */
        Excel::import(new StoresImport, './stores.xlsx');
    }
}
