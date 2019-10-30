<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $appends = ['formatPrice'];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function getFormatPriceAttribute()
    {
        return money_format('$%i', $this->price / 100);
    }
}
