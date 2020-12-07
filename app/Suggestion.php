<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Jenssegers\Date\Date;
use Spatie\ModelStatus\HasStatuses;
use Laravelista\Comments\Commentable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Query\Builder as QueryBuilder;
use Illuminate\Support\Arr;
use Spatie\ModelStatus\Events\StatusUpdated;
use Spatie\ModelStatus\Exceptions\InvalidStatus;

class Suggestion extends Model
{
//    use HasStatuses, Commentable;
    use Commentable;

    protected $fillable = ['name', 'email', 'suggestion', 'status'];

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

    /*
    Not used because I dont knowhow to use status from spatie and  query scope
    */
    public function scopeCurrentStatus(Builder $builder, ...$names)
    {
        $names = is_array($names) ? Arr::flatten($names) : func_get_args();
        $builder
            ->whereHas(
                'statuses',
                function (Builder $query) use ($names) {
                    $query
                        ->whereIn('name', $names)
                        ->whereIn(
                            'id',
                            function (QueryBuilder $query) {
                                dd($query
                                    ->select(DB::raw('max(id)'))
                                    ->from($this->getStatusTableName())
                                    ->where('model_type', $this->getStatusModelType())
                                    ->whereColumn($this->getModelKeyColumnName(), $this->getQualifiedKeyName())
                                    ->toSql());
                            }
                        );
                }
            );
    }

    public function scopeStatus($query, $value)
    {
        if($value) {
            $query->where('status', $value);
        }
    }
}
