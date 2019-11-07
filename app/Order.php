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
    ];

    protected $dates = [
        'date',
    ];

    public function products()
    {
        return $this->belongsToMany(Product::class)
            ->withPivot(['price', 'quantity', 'comments']);
    }
}
