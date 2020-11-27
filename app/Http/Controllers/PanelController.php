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
        $orderAll = Order::query()
            ->search(request('id'))
            ->store(request('store'))
            ->date(request('date'))
            ->status(request('status'))
            ->orderBy('date')
            ->get();
        $orders = $orderAll->map(function($order) {
            $date = $order->pick_up;
            return [
                'id' => $order->id,
                'uuid' => $order->uuid,
                'date' =>  [
                    'original' => $date,
                    'formatted' => $date->format('D d M, H:ia'),
                    'forToday' => $date->isToday(),
                    'forTomorrow' => $date->isTomorrow(),
                ],
                'customer' => [
                    'name' => $order->full_name,
                    'email' => $order->email,
                    'phone' => $order->phone,
                ],
                'store' => [
                    'friendlyAddress' => $order->store->friendly_address,
                    'name' => $order->store->name,
                    'isMatrix' => $order->store->isMatrix,
                ],
                'products' =>
                    $order->products->map(function($product){
                       return [
                           'name' => $product->name,
                           'qty' => $product->pivot->quantity,
                           'price' => $product->pivot->price / 100,
                           'options' => [
                               'comment' => $product->pivot->comment,
                               'allow_instructions' => $product->allow_instructions,
                               'customizable' => $product->customizable,
                               'custom_message' => $product->pivot->custom_message,
                           ],
                       ];
                    }),
                'status' => [
                    'original' => $order->status,
                    'step' => $order->statusStep,
                ],
                'canceled' => $order->canceled,
                'payed' => [
                    'original' => $order->payed,
                    'label' => $order->payed ? 'Liquidado' : 'Pendiente',
                ],
                'employee' => [
                    'name' => $order->employeeName,
                ],
                'total' => toFormat($order->total),
            ];
        });
        return Inertia::render('Admin/Dashboard', compact('orders'));
    }

    public function products()
    {
        $products = Product::orderBy('name')->paginate(10);
        return Inertia::render('Admin/Products', compact('products'));
    }
}
