<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Jenssegers\Date\Date;

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
                return 'Creado';
            case 'opened':
                return 'Visto';
            case 'journey':
                return 'En ruta';
            case 'placed':
                return 'En sucursal';
//            case 'payed':
//                return 'Pagado';
            case 'delivered':
                return 'Entregado';
            default:
                return 'N/A';
        }
    }

    // scopes
    public function scopeSearch($query, $value)
    {
        if($value) {
            $query->where('uuid', 'LIKE', "%{$value}%");
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
}
