<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

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
    ];

    protected $dates = [
        'date',
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
}
