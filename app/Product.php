<?php

namespace App;

use Gloudemans\Shoppingcart\Contracts\Buyable;
use Illuminate\Database\Eloquent\Model;

class Product extends Model implements Buyable
{
    protected $fillable = [
      'name',
      'description',
      'ingredients',
      'category_id',
      'available',
      'favorite',
      'image',
      'price',
    ];
    protected $appends = ['formatPrice'];

    protected $casts = [
        'available' => 'boolean',
        'favorite' => 'boolean',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function orders()
    {
        return $this->belongsToMany(Order::class)
            ->withPivot(['price', 'quantity', 'comment']);
    }

    public function setPriceAttribute($value)
    {
        $this->attributes['price'] = $value * 100;
    }

    public function getFormatPriceAttribute()
    {
        return money_format('$%i', $this->price / 100);
    }

    public function getBuyableIdentifier($options = null){
        return $this->id;
    }

    public function getBuyableDescription($options = null){
        return $this->name;
    }

    public function getBuyablePrice($options = null){
        return $this->price / 100;
    }
}
