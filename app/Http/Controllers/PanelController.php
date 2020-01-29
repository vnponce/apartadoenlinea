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
        $orderAll = Order::all();
        $searchValues = collect([
            'id' => '',
            'store' => '',
            'date' => '',
        ]);
        if(request('id') || request('store') || request('date')) {
            $query = app(Order::class)->newQuery();
//             dd((new Carbon(request('date')))->format('d M y H:m'));
            if (request()->filled('id')) {
                $id = request()->get('id');
                $searchValues['id'] = $id;
                $query->where('id', $id);
            }
            if (request()->filled('store')) {
                $store = request()->get('store');
                $searchValues['store'] = $store;
                $query->where('store_id', $store);
            }
            if (request()->filled('date')) {
                // $date = request()->get('date');
                $date = (new Carbon(request('date')));
//                dd((new Carbon(request('date')))->format('d M y H:m'));
                $searchValues['date'] = $date;
                $query->whereDate('date', $date);
            }
            $orderAll = $query->get();
        }
        if(auth()->user()->isManager) {
            // @todo: revisar porque con ID = 2 falla.
            $orderAll = auth()->user()->stores->map(function($store) {
                return $store->orders;
            })->flatten();

            // dd($orderAll->where('id', $id));
            if (request()->filled('id')) {
                $id = request()->get('id');
                $searchValues['id'] = $id;
                $orderAll= $orderAll->where('id', $id);
//                 dd($orderAll);
            }
            if (request()->filled('store')) {
                dd($orderAll);
                $store = request()->get('store');
                $searchValues['store'] = $store;
                $orderAll = $orderAll->where('store_id', $store);
            }
//             dd($orderAll);
        }
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
        return Inertia::render('Admin/Dashboard', compact('orders', 'searchValues'));
    }

    public function products()
    {
        $products = Product::paginate(10);
        return Inertia::render('Admin/Products', compact('products'));
    }
}
