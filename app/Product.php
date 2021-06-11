<?php

namespace App;

use Cviebrock\EloquentSluggable\Sluggable;
use Gloudemans\Shoppingcart\Contracts\Buyable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Product extends Model implements Buyable
{
    use Sluggable;

    protected $fillable = [
      'name',
      'customizable',
      'description',
      'ingredients',
      'category_id',
      'available',
      'favorite',
      'image',
      'price',
    ];
    protected $appends = ['formatPrice', 'image_path', 'allow_ingredients', 'allow_instructions'];

    protected $with = ['category'];

    protected $casts = [
        'available' => 'boolean',
        'favorite' => 'boolean',
        'customizable' => 'boolean',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function orders()
    {
        return $this->belongsToMany(Order::class)
            ->withPivot(['price', 'quantity', 'comment', 'custom_message']);
    }

    /**
     * Return the sluggable configuration array for this model.
     *
     * @return array
     */
    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }

    public function setPriceAttribute($value)
    {
        $this->attributes['price'] = $value * 100;
    }

    public function getImagePathAttribute()
    {
        return env('APP_URL_STORAGE').'/'.Str::replaceFirst('public/', '', $this->image);
    }

    public function getAllowIngredientsAttribute()
    {
        return $this->category->name === 'Bocadillos';
    }

    public function getAllowInstructionsAttribute()
    {
        return $this->category->name === 'Bocadillos';
    }

    public function getDescriptionAttribute($value)
    {
        return is_null($value) ? '' : $value;
    }

    public function getIngredientsAttribute($value)
    {
        return is_null($value) ? '' : $value;
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

    // queries
    // scopes
    public function scopeSearch($query, $value)
    {
        if($value) {
            $query->where('name', 'LIKE', "%{$value}%");
        }
    }
}
