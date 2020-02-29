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
//        dd(request()->toArray());
        Date::setLocale('es');
//        $orderAll = Order::all();
        $now = Carbon::today();
        $orderAll = Order::whereDate('date', '>=', $now)->where('status', '<>', 'delivered')->orderBy('date')->get();
        // dd($orderAll->toArray());
        $searchValues = collect([
            'id' => '',
            'store' => '',
            // 'date' => $now,
            'date' => '',
            'status' => $this->getStatusObject(),
        ]);
        if(request('id') || request('store') || request('date') || request('status')) {
            $query = app(Order::class)->newQuery();
//             dd((new Carbon(request('date')))->format('d M y H:m'));
            if (request()->filled('id')) {
                $id = request()->get('id');
                $searchValues['id'] = $id;
                $query->where('uuid', 'LIKE', "%{$id}%");
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
            } else {
                $searchValues['date'] = '';
                $query->whereDate('date', '>=', Carbon::today());
            }
            if(request()->filled('status')) {
                $this->getStatusFromRequest(request('status'), $query);
            }
            $orderAll = $query->orderBy('date')->get();
        }
        if(auth()->user()->isManager) {
            // @todo: revisar porque con ID = 2 falla.
//            $orderAll = auth()->user()->stores->map(function($store) {
//                return $store->orders;
//            })->flatten();
            $orderAll = auth()->user()->stores()->first()->orders();
            // dd($orderAll->toArray());

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
            if (request()->filled('date')) {
                // $date = request()->get('date');
                $date = (new Carbon(request('date')));
//                dd((new Carbon(request('date')))->format('d M y H:m'));
                $searchValues['date'] = $date;
                $orderAll = $orderAll->whereDate('date', $date);
            } else {
                // @todo: test this I dont remember why I set now always
                // $searchValues['date'] = request()->filled('id') ? '' : $now;
                $searchValues['date'] = '';
                $query->whereDate('date', '>=', Carbon::today());
            }//             dd($orderAll);
            if(request()->filled('status')) {
                $this->getStatusFromRequest(request('status'), $orderAll);
            }
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
        $products = Product::orderBy('name')->paginate(10);
        return Inertia::render('Admin/Products', compact('products'));
    }

    public function getStatusFromRequest($statusRequest, &$query)
    {
        // status
        switch ($statusRequest) {
            case 'not-delivered':
                return $query->where('status','<>', 'delivered');
                break;
            case 'delivered':
                return $query->where('status', 'delivered');
                break;
            case 'all':
                return false;
                break;
        }

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
