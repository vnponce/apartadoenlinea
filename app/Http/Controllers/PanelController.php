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
        $now = Carbon::today();
        $orderAll = Order::whereDate('date', '>=', $now)->where('status', '<>', 'delivered')->orderBy('date')->get();
        $searchValues = collect([
//            'id' => '',
//            'store' => '',
            'date' => '',
            'status' => $this->getStatusObject(),
        ]);
        if(request('id') || request('store') || request('date') || request('status')) {
            $query = app(Order::class)->newQuery();
            if (request()->filled('id')) {
                $id = request()->get('id');
//                $searchValues['id'] = $id;
                $query->search(request('id'));
            }
            if (request()->filled('store')) {
                $store = request()->get('store');
//                $searchValues['store'] = $store;
                $query->store($store);
            }
            if (request()->filled('date')) {
                $date = (new Carbon(request('date')));
                $searchValues['date'] = $date;
                $query->date($date);
            } else {
                $searchValues['date'] = '';
                // @todo: ver que hacer con este
                $query->whereDate('date', '>=', Carbon::today());
            }
            $query->status(request('status'));
            $orderAll = $query->orderBy('date')->get();
        }
        if(auth()->user()->isManager) {
            // @todo: revisar porque con ID = 2 falla.
            $orderAll = auth()->user()->stores()->first()->orders();

            if (request()->filled('id')) {
                $id = request()->get('id');
                $searchValues['id'] = $id;
                $orderAll->search(request('id'));
            }
            if (request()->filled('date')) {
                $date = (new Carbon(request('date')));
                $searchValues['date'] = $date;
                $orderAll->date($date);
            } else {
                $searchValues['date'] = '';
                $orderAll->whereDate('date', '>=', Carbon::today());
            }//             dd($orderAll);
            $orderAll->status(request('status'));
            $orderAll = $orderAll->orderBy('date')->get();
        }
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
        return Inertia::render('Admin/Dashboard', compact('orders', 'searchValues'));
    }

    public function products()
    {
        $products = Product::orderBy('name')->paginate(10);
        return Inertia::render('Admin/Products', compact('products'));
    }

    public function getStatusObject()
    {
        if(request()->filled('status')) {
            $status = request('status');
            switch ($status) {
                case 'not-delivered':
                    return [
                        'label' => 'No entregados',
                        'value' => 'no-delivered'
                    ];
                    break;
                case 'delivered':
                    return [
                        'label' => 'Entregados',
                        'value' => 'delivered'
                    ];
                    break;
                case 'all':
                    return [
                        'label' => 'Todos',
                        'value' => 'all'
                    ];
                    break;
            }
        }
        return [
            'label' => 'No entregados',
            'value' => 'no-delivered'
        ];
    }
}
