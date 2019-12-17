<?php

namespace App\Http\Controllers;

use App\Order;
use App\Product;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Jenssegers\Date\Date;
use function foo\func;

class PanelController extends Controller
{
    public function index()
    {
        Date::setLocale('es');
        // dd(auth()->user()->stores->first()->orders);
        $orderAll = Order::all();
        if(!auth()->user()->isAdmin) {
            $orderAll = auth()->user()->stores->map(function($store) {
                return $store->orders;
            })->flatten();
        }
//         dd($orderAll);
        $orders = $orderAll->map(function($order) {
            $date = $order->pick_up;
            return [
                'id' => $order->id,
                'date' =>  [
                    'original' => $date,
                    'formatted' => $date->format('D d M, H:ia'),
                ],
                'customer' => [
                    'name' => $order->full_name,
                    'email' => $order->email,
                    'phone' => $order->phone,
                ],
                'store' => [
                    'friendlyAddress' => $order->store->friendly_address,
                    'name' => $order->store->name,
                ],
                'products' =>
                    $order->products->map(function($product){
                       return [
                           'name' => $product->name,
                           'qty' => $product->pivot->quantity,
                           'price' => $product->pivot->price / 100,
                           'options' => [
                               'comment' => $product->pivot->comment,
                           ],
                       ];
                    }),
                'status' => [
                    'original' => $order->status,
                    'step' => $order->statusStep,
                ],
                'total' => toFormat($order->total),
            ];
        });
        return Inertia::render('Admin/Dashboard', compact('orders'));
    }

    public function products()
    {
        $products = Product::paginate(10);
        return Inertia::render('Admin/Products', compact('products'));
    }
}
