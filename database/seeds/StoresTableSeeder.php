<?php

use App\Imports\StoreImport;
use App\Store;
use Illuminate\Database\Seeder;
use Maatwebsite\Excel\Facades\Excel;

class StoresTableSeeder extends Seeder
{
    protected $stores = [
        [
            "id" =>2,
            "name" =>"Bernal",
            "address" =>"Bernal Díaz del Castillo #630 entre Martí e Isabel la Católica, Reforma, 91919 Veracruz, Ver.",
            "friendly_address" =>"Bernal Díaz del Castillo entre Isabel La Católica y Martí, Fracc. Reforma",
            "delivery_time" =>"7:00 a 21:00",
            "lat" =>"19.1689372",
            "lon" =>"-96.1237504",
            "monday_saturday" =>"Lunes a sábado",
            "sunday" =>"Cierra",
            "created_at" =>"2020-01-24 18:09:52",
            "updated_at" =>"2020-01-28 19:38:42"
          ],
        [
            "id" =>3,
            "name" =>"Bravo",
            "address" =>"BRAVO # 445 ESQ. ZAMORA COL =>CENTRO CP:91700 VERACRUZ, VER.",
            "friendly_address" =>"Bravo esquina Zamora, colonia Centro",
            "delivery_time" =>"7:00 a 21:00",
            "lat" =>"19.1974881",
            "lon" =>"-96.1422452",
            "monday_saturday" =>"Lunes a sábado",
            "sunday" =>"8:00 a 21:00",
            "created_at" =>"2020-01-24 18:09:52",
            "updated_at" =>"2020-01-28 19:40:05"
          ],
        [
            "id" =>4,
            "name" =>"Miguel Alemán",
            "address" =>"Av Miguel Alemán esquina Campero #331, Zona Centro, 91700 Veracruz, Ver.",
            "friendly_address" =>"Miguel Alemán esquina Campero, colonia Centro",
            "delivery_time" =>"00:00 a 23:30",
            "lat" =>"19.1865953",
            "lon" =>"-96.1371938",
            "monday_saturday" =>"Lunes a sábado",
            "sunday" =>"24 horas",
            "created_at" =>"2020-01-24 18:09:53",
            "updated_at" =>"2020-01-28 19:44:51"
          ],
        [
            "id" =>5,
            "name" =>"Zaragoza",
            "address" =>"Av Juan de Dios Peza #35 esquina Collado, Zaragoza, 91910 Veracruz, Ver.",
            "friendly_address" =>"Juan de Diós Peza esquina Collada Colonia Zaragoza",
            "delivery_time" =>"7:00 a 21:00",
            "lat" =>"19.181148",
            "lon" =>"-96.128834",
            "monday_saturday" =>"Lunes a sábado",
            "sunday" =>"8:00 a 21:00",
            "created_at" =>"2020-01-24 18:09:53",
            "updated_at" =>"2020-01-28 19:47:01"
          ],
        [
            "id" =>6,
            "name" =>"Floresta",
            "address" =>"Paseo Ébanos #688 Esquina Las Palmas, Floresta, 91940 Veracruz, Ver.",
            "friendly_address" =>"Paseo Ébanos Esquina Las Palmas, Fracc. Floresta",
            "delivery_time" =>"7:00 a 21:00",
            "lat" =>"19.1471218",
            "lon" =>"-96.1389446",
            "monday_saturday" =>"Lunes a sábado",
            "sunday" =>"8:00 a 21:00",
            "created_at" =>"2020-01-24 18:09:53",
            "updated_at" =>"2020-01-28 19:48:24"
          ],
        [
            "id" =>7,
            "name" =>"Cortés",
            "address" =>"HERNAN CORTES # 473 % ALLENDE Y GUERRERO COL =>CENTRO C:P.91700 VERACRUZ, VER.",
            "friendly_address" =>"Cortés entre Allende y Guerrero, colonia Centro",
            "delivery_time" =>"7:00 a 21:00",
            "lat" =>"19.1922716",
            "lon" =>"-96.1400734",
            "monday_saturday" =>"Lunes a sábado",
            "sunday" =>"8:00 a 21:00",
            "created_at" =>"2020-01-24 18:09:53",
            "updated_at" =>"2020-01-28 19:51:27"
          ],
        [
            "id" =>8,
            "name" =>"Plaza Palmas",
            "address" =>"Ejército Mexicano esquina Av Urano, Plaza Express Las Palmas #585, Los Pinos, 94298 Boca del Río, Ver.",
            "friendly_address" =>"Urano esquina Ejército Mexicano, Plaza Palmas",
            "delivery_time" =>"7:00 a 21:00",
            "lat" =>"19.1408236",
            "lon" =>"-96.1093984",
            "monday_saturday" =>"Lunes a sábado",
            "sunday" =>"8:00 a 21:00",
            "created_at" =>"2020-01-24 18:09:53",
            "updated_at" =>"2020-01-28 19:52:56"
          ],
        [
            "id" =>9,
            "name" =>"Plaza Monte Albán",
            "address" =>"Av. La Bamba Plaza Monte Albán S/N local 16, Entre circuito prehispánico y avenida de las culturas, Siglo XXI, Geovillas del Puerto, 91963 Veracruz, Ver.",
            "friendly_address" =>"Avenida La bamba, Plaza Monte Albán, Fracc. Geovillas del Puerto",
            "delivery_time" =>"7:00 a 21:00",
            "lat" =>"19154216",
            "lon" =>"-96162423",
            "monday_saturday" =>"Lunes a sábado",
            "sunday" =>"8:00 a 21:00",
            "created_at" =>"2020-01-24 18:09:53",
            "updated_at" =>"2020-01-28 19:53:55"
          ],
        [
            "id" =>10,
            "name" =>"Laguna Real",
            "address" =>"Av. Laguna Real local 3 Entre Laberintos y, Los Búhos, Laguna Real, 91698 Veracruz, Ver.",
            "friendly_address" =>"Av. Laguna Real entre Laberintos y Los Búhos, Fracc. Laguna Real",
            "delivery_time" =>"7:00 a 21:00",
            "lat" =>"19.1451554",
            "lon" =>"-96.1566895",
            "monday_saturday" =>"Lunes a sábado",
            "sunday" =>"Cierra",
            "created_at" =>"2020-01-24 18:09:53",
            "updated_at" =>"2020-01-28 19:58:46"
          ],
        [
            "id" =>11,
            "name" =>"Uribe",
            "address" =>"1ª DE MAYO # 862 B ESQ. URIBE COL =>FLORES MAGON CP:91900 VERACRUZ, VER.",
            "friendly_address" =>"Av. Primero de Mayo esquina Uribe colonia Flores Magón",
            "delivery_time" =>"7:00 a 21:00",
            "lat" =>"19.1902165",
            "lon" =>"-96.1296042",
            "monday_saturday" =>"Lunes a sábado",
            "sunday" =>"8:00 a 21:00",
            "created_at" =>"2020-01-24 18:09:53",
            "updated_at" =>"2020-01-28 20:01:28"
          ],
        [
            "id" =>12,
            "name" =>"Allende Norte",
            "address" =>"ALLENDE NTE.#389 ESQ. JM GARCIA FRACC =>MIGUEL ALEMAN CP =>        VERACRUZ, VER",
            "friendly_address" =>"Allende Norte esquina JM García Fracc. Miguel Alemán",
            "delivery_time" =>"7:00 a 21:00",
            "lat" =>"19.2062149",
            "lon" =>"-96.153618",
            "monday_saturday" =>"Lunes a sábado",
            "sunday" =>"8:00 a 21:00",
            "created_at" =>"2020-01-24 18:09:53",
            "updated_at" =>"2020-01-28 20:02:45"
          ],
        [
            "id" =>13,
            "name" =>"Bomberos",
            "address" =>"RAYON # 559 ESQ. ZARAGOZA COL =>CENTRO CP:91700 VERACRUZ, VER.",
            "friendly_address" =>"Rayón esquina Zaragoza, colonia Centro",
            "delivery_time" =>"7:00 a 21:00",
            "lat" =>"19.1964765",
            "lon" =>"-96.1344915",
            "monday_saturday" =>"Lunes a sábado",
            "sunday" =>"Cierra",
            "created_at" =>"2020-01-24 18:09:53",
            "updated_at" =>"2020-01-28 20:05:16"
          ],
        [
            "id" =>14,
            "name" =>"Alacio Pérez",
            "address" =>"Alacio Pérez 1114, esquina Salvador Díaz Mirón, 91700 Veracruz, Ver.",
            "friendly_address" =>"Díaz Mirón esquina Alacio Pérez col Díaz Mirón",
            "delivery_time" =>"7:00 a 21:00",
            "lat" =>"19.1838349",
            "lon" =>"-96.1370555",
            "monday_saturday" =>"Lunes a sábado",
            "sunday" =>"8:00 a 21:00",
            "created_at" =>"2020-01-24 18:09:53",
            "updated_at" =>"2020-01-28 20:05:54"
          ],
        [
            "id" =>15,
            "name" =>"Costa Verde",
            "address" =>"Avenida Costa Verde #756 esquina Mar de Cortés, Fraccionamiento Costa Verde, CP 94294, Boca del Río Ver.",
            "friendly_address" =>"Costa Verde esquina Mar de Cortés, Fraccionamiento Costa Verde",
            "delivery_time" =>"7:00 a 21:00",
            "lat" =>"19.1649481",
            "lon" =>"-96.1190341",
            "monday_saturday" =>"Lunes a sábado",
            "sunday" =>"8:00 a 21:00",
            "created_at" =>"2020-01-24 18:09:53",
            "updated_at" =>"2020-01-28 20:07:07"
          ],
        [
            "id" =>16,
            "name" =>"Don Jamón",
            "address" =>"HERNAN CORTES # 268 % BRAVO E HIDALGO  COL =>CENTRO CP:91700 VERACRUZ, VER.",
            "friendly_address" =>"Cortés entre Bravo e Hidalgo, colonia Centro",
            "delivery_time" =>"7:00 a 21:00",
            "lat" =>"19.1932468",
            "lon" =>"-96.140595",
            "monday_saturday" =>"Lunes a sábado",
            "sunday" =>"8:00 a 21:00",
            "created_at" =>"2020-01-24 18:09:53",
            "updated_at" =>"2020-01-28 20:07:44"
          ],
        [
            "id" =>17,
            "name" =>"Independencia",
            "address" =>"INDEPENDENCIA NO. 1195  ENTRE MARIO MOLINA Y  GUTIERREZ ZAMORA COL. CENTRO C.P. 91700 VERACRUZ,   VER.",
            "friendly_address" =>"Independencia entre Mario Molina y Zamora, colonia Centro",
            "delivery_time" =>"7:00 a 21:00",
            "lat" =>"19.1995753",
            "lon" =>"-96.140687",
            "monday_saturday" =>"Lunes a sábado",
            "sunday" =>"8:00 a 21:00",
            "created_at" =>"2020-01-24 18:09:53",
            "updated_at" =>"2020-01-28 20:08:49"
          ],
        [
            "id" =>18,
            "name" =>"Juan Soto",
            "address" =>"CALLE MIGUEL ANGEL DE QUEVEDO ESQUINA JUAN SOTO LOCAL 365",
            "friendly_address" =>"Miguel Ángel de Quevedo esquina Juan Soto colonia Centro",
            "delivery_time" =>"7:00 a 21:00",
            "lat" =>"19.1860062",
            "lon" =>"-96.149377",
            "monday_saturday" =>"Lunes a sábado",
            "sunday" =>"8:00 a 21:00",
            "created_at" =>"2020-01-24 18:09:53",
            "updated_at" =>"2020-01-28 20:09:39"
          ],
        [
            "id" =>19,
            "name" =>"Los Volcanes",
            "address" =>"Aconcahua #743 Esquina, Cerro de La Estrella, Los Volcanes, 91727 Veracruz, Ver.",
            "friendly_address" =>"Aconcahua esquina Cerro de la Estrella, fraccionamiento Los Volcanes",
            "delivery_time" =>"7:00 a 21:00",
            "lat" =>"19.1758748",
            "lon" =>"-96.1603195",
            "monday_saturday" =>"Lunes a sábado",
            "sunday" =>"8:00 a 21:00",
            "created_at" =>"2020-01-24 18:09:53",
            "updated_at" =>"2020-01-28 20:10:54"
          ],
        [
            "id" =>20,
            "name" =>"España",
            "address" =>"ESPAÑA No. 96 ESQUINA LAS AMERICAS FRACC. VIRGINIA BOCA DEL RIO VER.",
            "friendly_address" =>"España esquina Américas, fraccionamiento Virginia",
            "delivery_time" =>"7:00 a 21:00",
            "lat" =>"19.1668969",
            "lon" =>"-96.1264406",
            "monday_saturday" =>"Lunes a sábado",
            "sunday" =>"8:00 a 21:00",
            "created_at" =>"2020-01-24 18:09:53",
            "updated_at" =>"2020-01-28 20:11:21"
          ],
        [
            "id" =>21,
            "name" =>"Vista Mar",
            "address" =>"Puesta del Sol #275 esquina Constituyentes, Vista Mar, 91780 Veracruz, Ver.",
            "friendly_address" =>"Constituyentes esquina Puesta del Sol, fraccionamiento Vista Mar",
            "delivery_time" =>"7:00 a 21:00",
            "lat" =>"19.1697157",
            "lon" =>"-96.1423106",
            "monday_saturday" =>"Lunes a sábado",
            "sunday" =>"8:00 a 21:00",
            "created_at" =>"2020-01-24 18:09:53",
            "updated_at" =>"2020-01-28 20:11:53"
          ],
        [
            "id" =>22,
            "name" =>"Torrentes",
            "address" =>"VICTOR SANCHEZ TAPIA #748 B  ENTRE TEXOLO Y TONACHI COL. LOS TORRENTES, VERACRUZ, VER.",
            "friendly_address" =>"Víctor Sánchez Tapia entre Texolo y Tonachi, colonia Los Torrentes",
            "delivery_time" =>"7:00 a 21:00",
            "lat" =>"19.2014007",
            "lon" =>"-96.2101383",
            "monday_saturday" =>"Lunes a sábado",
            "sunday" =>"8:00 a 21:00",
            "created_at" =>"2020-01-24 18:09:53",
            "updated_at" =>"2020-01-28 20:12:32"
          ],
        [
            "id" =>23,
            "name" =>"Díaz Mirón",
            "address" =>"Av. Salvador Díaz Mirón 2299 casi esquina Simón Bolívar, Multifamiliar, Moderno, 91918 Veracruz, Ver.",
            "friendly_address" =>"Díaz Mirón Casi esquina Simón Bolívar, fraccionamiento Moderno",
            "delivery_time" =>"7:00 a 21:00",
            "lat" =>"19.1730053",
            "lon" =>"-96.1365356",
            "monday_saturday" =>"Lunes a sábado",
            "sunday" =>"8:00 a 21:00",
            "created_at" =>"2020-01-24 18:09:53",
            "updated_at" =>"2020-01-28 20:13:30"
          ],
        [
            "id" =>24,
            "name" =>"Coyol",
            "address" =>"Laguna Verde 238 entre Laguna del Coyol y Laguna del Rosario, Coyol Zona C, 91779 Veracruz, Ver.",
            "friendly_address" =>"Laguna Verde entre Laguna del Coyol y Laguna del Rosario fraccionamiento Coyol zona C",
            "delivery_time" =>"7:00 a 21:00",
            "lat" =>"19.1705469",
            "lon" =>"-96.1628102",
            "monday_saturday" =>"Lunes a sábado",
            "sunday" =>"8:00 a 21:00",
            "created_at" =>"2020-01-24 18:09:53",
            "updated_at" =>"2020-01-28 20:14:08"
          ],
        [
            "id" =>25,
            "name" =>"Esteban Morales",
            "address" =>"Calle Esteban Morales esquina Av. Ignacio Allende #1852, Centro, 91700 Veracruz, Ver.",
            "friendly_address" =>"Allende esquina Esteban Morales colonia Centro",
            "delivery_time" =>"7:00 a 21:00",
            "lat" =>"19.1952084",
            "lon" =>"-96.1411146",
            "monday_saturday" =>"Lunes a sábado",
            "sunday" =>"8:00 a 21:00",
            "created_at" =>"2020-01-24 18:09:53",
            "updated_at" =>"2020-01-28 20:14:51"
          ],
        [
            "id" =>26,
            "name" =>"El Morro",
            "address" =>"Av. Vía Muerta #2893 Entre Orizaba y Roble, Camino Real, 94293 Boca del Río, Ver.",
            "friendly_address" =>"Vía Muerta entre Orizaba y Roble, Colonia Camino Real",
            "delivery_time" =>"7:00 a 21:00",
            "lat" =>"19.1144145",
            "lon" =>"-96.1081234",
            "monday_saturday" =>"Lunes a sábado",
            "sunday" =>"8:00 a 21:00",
            "created_at" =>"2020-01-24 18:09:53",
            "updated_at" =>"2020-01-28 20:15:46"
          ],
        [
            "id" =>27,
            "name" =>"Manantial",
            "address" =>"Av. Cándido Aguilar #1052 Entre Juan de la Barrera y Juan Escutia,Colonia Manantial, 94297 Boca del Río, Ver.",
            "friendly_address" =>"Cándido Aguilar entre Juan de la Barrera y Juan Escutia, colonia Manantial",
            "delivery_time" =>"7:00 a 21:00",
            "lat" =>"19.1144112",
            "lon" =>"-96.1409542",
            "monday_saturday" =>"Lunes a sábado",
            "sunday" =>"8:00 a 21:00",
            "created_at" =>"2020-01-24 18:09:53",
            "updated_at" =>"2020-01-28 20:16:24"
          ],
        [
            "id" =>28,
            "name" =>"La Fragua",
            "address" =>"La fragua dirección exacta",
            "friendly_address" =>"La fragua dirección usuario",
            "delivery_time" =>"7:00 a 21:00",
            "lat" =>"19.1823317",
            "lon" =>"-96.1414993",
            "monday_saturday" =>"Lunes a sábado",
            "sunday" =>"8:00 a 21:00",
            "created_at" =>"2020-01-24 18:09:53",
            "updated_at" =>"2020-01-28 20:17:26"
          ],
        [
            "id" =>29,
            "name" =>"Serdán",
            "address" =>"Aquiles Serdán #481Bis colonia centro 91700. Veracruz Ver.",
            "friendly_address" =>"Serdán entre Zaragoza e Independencia, colonia Centro",
            "delivery_time" =>"7:00 a 21:00",
            "lat" =>"19.1995791",
            "lon" =>"-96.1370279",
            "monday_saturday" =>"Lunes a sábado",
            "sunday" =>"8:00 a 21:00",
            "created_at" =>"2020-01-24 18:09:53",
            "updated_at" =>"2020-01-28 20:20:04"
          ],
        [
            "id" =>30,
            "name" =>"Las Vegas",
            "address" =>"Avenida San José de Calasanz entre Río Nilo y Río Sonora, Colonia Las Vegas 2 CP 94297, Boca del Río, Veracruz",
            "friendly_address" =>"San José de Calasanz entre Río Nilo y Río Sonora, colonia Las Vegas 2",
            "delivery_time" =>"7:00 a 21:00",
            "lat" =>"19.1390708",
            "lon" =>"-96.133015",
            "monday_saturday" =>"Lunes a sábado",
            "sunday" =>"8:00 a 21:00",
            "created_at" =>"2020-01-24 18:09:53",
            "updated_at" =>"2020-01-28 20:20:42"
          ],
        [
            "id" =>31,
            "name" =>"Boca del Río",
            "address" =>"Blvd. Miguel Alemán 2, Plaza Comercial Santa Ana, Zona Centro, Centro, 94290 Boca del Río, Ver.",
            "friendly_address" =>"Plaza Santa Ana, (junto a la Gasolinera frente al Ayuntamiento de Boca del Río)",
            "delivery_time" =>"7:00 a 21:00",
            "lat" =>"19.1000466",
            "lon" =>"-96.1063046",
            "monday_saturday" =>"Lunes a sábado",
            "sunday" =>"8:00 a 21:00",
            "created_at" =>"2020-01-24 18:09:53",
            "updated_at" =>"2020-01-28 20:24:58"
          ]
    ];
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
//        Excel::import(new StoreImport, './stores.xlsx');
        collect($this->stores)->map(function($current) {
           $store = collect($current);
           Store::create([
               'name' => $store->get('name'),
               'address' => $store->get('address'),
               'friendly_address' => $store->get('friendly_address'),
               'delivery_time' => $store->get('delivery_time'),
               'lat' => $store->get('lat'),
               'lon' => $store->get('lon'),
               'monday_saturday' => $store->get('monday_saturday'),
               'sunday' => $store->get('sunday'),
           ]);
        });
    }
}
