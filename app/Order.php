<?php

namespace App;

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
            ->withPivot(['price', 'quantity', 'comment']);
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
}
