<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Store extends Model
{
    public function users()
    {
        return $this->belongsToMany(User::class);
    }

    public function orders()
    {
        return $this->hasMany(Order::class);
    }
}
