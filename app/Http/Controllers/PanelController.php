<?php

namespace App\Http\Controllers;

use App\Order;
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
        $orderAll = Order::all();
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
                'products' => [
                    $order->products->map(function($product){
                       return [
                           'product' => $product->name,
                           'quantity' => $product->pivot->quantity,
                           'price' => $product->pivot->price,
                           'comments' => $product->pivot->comment,
                       ];
                    }),
                ],
                'status' => [
                    'original' => $order->status,
                    'step' => $order->statusStep,
                ],
                'total' => $order->total,
            ];
        });
        return Inertia::render('Admin/Dashboard', compact('orders'));
    }
}
