<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Jenssegers\Date\Date;
use Gloudemans\Shoppingcart\Facades\Cart;

class Order extends Model
{
    protected $fillable = [
        'name',
        'lastname',
        'email',
        'phone',
        'date',
        'hour',
        'store_id',
        'total',
        'status',
        'employeeName',
        'uuid',
        'canceled',
        'payed',
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($order) {
            $order->uuid = (string) Str::uuid();
        });
    }

    protected $dates = [
        'date',
        'hour' => 'HH:mm',
    ];

    public function products()
    {
        return $this->belongsToMany(Product::class)
            ->withPivot(['price', 'quantity', 'comment', 'custom_message']);
    }

    public function store()
    {
        return $this->belongsTo(Store::class);
    }

    public function getPickUpAttribute()
    {
        // [$hour, $minute] = explode(":", $this->hour);
        // $date = $this->date->addHours($hour)->addMinutes($minute);
        // dd($date);
        return new Date($this->date);
    }

    public function getFullNameAttribute()
    {
//        return "{$this->first_name} {$this->last_name}";

        return "{$this->name} {$this->lastname}";
    }

    public function getStatusStepAttribute()
    {
        switch ($this->status) {
            case 'created':
                return 'No visto';
            case 'opened':
                return 'Visto';
            case 'journey':
                return 'En ruta';
            case 'placed':
                return 'En sucursal';
//            case 'payed':
//              eturn 'Pagado';
            case 'delivered':
                return 'Entregado';
            default:
                return 'N/A';
        }
    }

    public function getUuidAttribute($value)
    {
        [$shortValue] = explode('-', $value);
        return $shortValue;
    }

    // scopes
    public function scopeSearch($query, $value)
    {
        if($value) {
            $query->where('uuid', 'LIKE', "%{$value}%")
                ->orWhere('name', 'LIKE', "%{$value}%")
                ->orWhere('lastname', 'LIKE', "%{$value}%");

        }
    }

    public function scopeStore($query, $value)
    {
        if(auth()->user()->isManager) {
            $value = auth()->user()->stores()->first()->id;
        }
        if($value) {
            $query->where('store_id', $value);
        }
    }

    public function scopeDate($query, $value)
    {
        Date::setLocale('es');
//        dd($value);
        if($value === 'historic') {
            return $query->whereDate('date', '<=', Carbon::today());
        }
        if($value) {
            $date = (new Carbon(request('date')));
            $query->whereDate('date', $date);
        } else {
            $query->whereDate('date', '>=', Carbon::today());
        }
    }

    public function scopeStatus($query, $value)
    {
        // status
        switch ($value) {
            case 'not-delivered':
                return $query->where('status','<>', 'delivered');
                break;
            case 'delivered':
                return $query->where('status', 'delivered');
                break;
            case 'all':
                break;
            default:
                return $query->where('status','<>', 'delivered');
        }
    }

    public function scopeAllOrPaginate($query, $value)
    {
        // status
        switch ($value) {
            case 'paginate':
                return $query->paginate()->appends(request()->query());
                break;
            default:
                return $query->get();
        }
    }

    // Custom create
    static function createFromCart($info) {
        ['payment_type' => $payment_type, 'payed' => $payed] = $info;

        $total = Cart::subtotal(2, '', '') * 1; // Casting to int
        $cart = Cart::content();


        $detailsRowId = $cart->search(function ( $cartItem, $rowId) {
            return $cartItem->id ===  'orderDetailsId';
        });
        $detailsData = $cart->get($detailsRowId)->options;
        $date = substr($detailsData->date, 0, strpos($detailsData->date, "T"));
        [$year, $month, $day] = explode('-', $date);
        [$hour, $minute] = explode(':', $detailsData->hour);
        $date = Carbon::now('America/Mexico_City')->year($year)->day($day)->month($month)->hour($hour)->minute($minute)->second('0');

        $order = Order::create([
            'store_id' => $detailsData->store,
            'date' => $date,
            'hour' => $detailsData->hour,
            'name' => $detailsData->name,
            'lastname' => $detailsData->lastname,
            'phone' => $detailsData->phone,
            'email' => $detailsData->email,
            'employeeName' => $detailsData->employeeName,
            'total' => $total,
            'status' => 'created',
            'invoice_requested' => $detailsData->invoice_requested,
            'payed' => $payed,
            'payment_type' => $payment_type ?? '',
        ]);

        $cart->filter(function($item) use ($detailsRowId) {
            return $item->rowId !== $detailsRowId;
        })->map(function ($item) use ($order) {
            $order->products()->attach($item->id, [
                'price' => $item->price * 100,
                'quantity' => $item->qty,
                'comment' => $item->options->comment ?? '',
                'custom_message' => $item->options->custom_message ?? '',
            ]);
        });

        Cart::remove($detailsRowId);
        return $order;
    }
}
