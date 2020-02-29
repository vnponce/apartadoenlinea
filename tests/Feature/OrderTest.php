<?php

namespace Tests\Features;

use App\Category;
use App\Order;
use App\Product;
use App\Store;
use App\User;
use Carbon\Carbon;
use Gloudemans\Shoppingcart\Facades\Cart;
use Illuminate\Support\Facades\Mail;
use Jenssegers\Date\Date;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class OrderTest extends TestCase
{
     use RefreshDatabase;

    /** @test */
    function it_send_email_to_user_with_data()
    {
        // before test clear cart
        Cart::destroy();
        Mail::fake();
        $product = Product::first();
        $store = Store::first();

        // Create Cart
        Cart::add($product, 1, ['comment' => 'test'])->associate(Product::class);
        Cart::add('orderDetailsId', 'OrderDetails', 1, 0, [
            'store' => $store->id,
            'date' => '2019-11-23T18:00:00.000Z',
            'hour' => '1:00',
            'name' => 'Abel',
            'lastname' => 'Ponce',
            'phone' => '2299017147',
            'email' => 'vnpoce8@gmail.com',
        ]);
        $response = $this->post("pedido");

        $response->assertStatus(200);

        Mail::assertSentTo('vnponce8@gmail.com', );

        dd(Cart::content());
    }
    /** @test */
    function it_show_orders()
    {
        $product = factory(Product::class)->create();
        $user = factory(User::class)->create();
        $this->actingAs($user);
        // before test clear cartç
        $store = factory(Store::class)->create();
//        $date = Carbon::now();
        $date = new Date();  // Para tener la fecha en español
        $order = Order::create([
            'store_id' => $store->id,
            'date' => $date,
            'hour' => '11:00',
            'name' => 'Nombre',
            'lastname' => 'Apellido',
            'phone' => '1222312',
            'email' => 'email@test.com',
            'employeeName' => 'nombreEmpleado',
            'total' => 2000,
            // @todo: hacer status
            'status' => 'created',
        ]);

        $order->products()->attach($product->id, [
            'price' => $product->price * 100,
            'quantity' => 2,
            'comment' => $product->options->comment ?? '',
        ]);

        $response = $this->get('/admin')->assertSee('Nombre');
        $this->assertDatabaseHas('orders', $order->toArray());
        // dd($response->getOriginalContent()->getData());
        // dd($response->getOriginalContent()->getData()['page']['props']);
        $this->get('/admin')
            ->assertStatus(200)
            ->assertPropCount('orders', 1)
            ->assertPropValue('orders', function($orders) use($date){
                // dd($order[0]);
                $order = Order::first();
                $products = $order->products->map(function($product){
                    return [
                        'name' => $product->name,
                        'qty' => $product->pivot->quantity,
                        'price' => $product->pivot->price / 100,
                        'options' => [
                            'comment' => $product->pivot->comment,
                        ],
                    ];
                });
//                dd($products->toArray());
//                dd($order->products);
                $this->assertEquals([
                    'id' => $order->id,
                    'uuid' => $order->uuid,
                    'date' =>  [
                        'formatted' => $date->format('D d M, H:ia'),
                        // This is a hack, because this date in a way is returning correct time zone but idk why is transformed in other timezone.
                        // This must be after formatted because it change timezone and it chang values.
                        'original' => $date->timezone('UTC')->format('Y-m-d\TH:i:s.\0\0\0\0\0\0\Z'),
                        'forToday' => $date->isToday(),
                        'forTomorrow' => $date->isTomorrow(),
                    ],
                    'customer' => [
                        'name' => 'Nombre Apellido',
                        'email' => 'email@test.com',
                        'phone' => '1222312',
                    ],
                    'store' => [
                        'friendlyAddress' => "Bernal Díaz del Castillo entre Isabel La Católica y Martí, Fracc. Reforma",
                        'name' => 'Bernal',
                        'isMatrix' => false,
                    ],
                    'products' => $products->toArray(),
                    'status' => [
                        'original' => $order->status,
                        'step' => $order->statusStep,
                    ],
                    'payed' => [
                        'original' => false,
                        'label' => 'Pendiente',
                    ],
                    'employee' => [
                        'name' => 'nombreEmpleado',
                    ],
                    'total' => toFormat($order->total),
                ], $orders[0]);
            });
        // dd($response);
    }
}
