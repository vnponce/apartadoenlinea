<?php

namespace App;

use Carbon\Carbon;
use Jenssegers\Date\Date;
use Spatie\ModelStatus\HasStatuses;
use Laravelista\Comments\Commentable;
use Illuminate\Database\Eloquent\Model;

class Suggestion extends Model
{
    use HasStatuses, Commentable;

    protected $fillable = ['name', 'email', 'suggestion'];

    // scopes
    public function scopeSearch($query, $value)
    {
        if($value) {
            $query->where('name', 'LIKE', "%{$value}%");
        }
    }

    public function scopeDate($query, $value)
    {
        Date::setLocale('es');
        if($value) {
            $date = (new Carbon(request('date')));
            $query->whereDate('created_at', $date);
        }
    }

}
