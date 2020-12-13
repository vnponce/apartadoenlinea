<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Jenssegers\Date\Date;
use Spatie\Activitylog\Traits\LogsActivity;
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
    use Commentable, LogsActivity;

    protected $fillable = ['name', 'email', 'suggestion', 'status'];

    protected static $logAttributes = ['status'];

    protected $with = ['comments'];


    // scopes
    public function scopeGetAllSearched($query)
    {
        return $query
            ->search(request('name'))
            ->date(request('date'))
            ->status(request('status'))
//            ->currentStatus(request('status'))
            ->solver(request('solver'))
            ->paginate();
    }

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

    public function scopeSolver($query, $value)
    {
        if($value) {
//            dd($query->get()->toArray());
//            dd($query->with('comments')->get()->toArray());
            // este no funciona por el WHERE que lo cambie a WHEREHAS
//            dd($query->with('comments')->where('comments', function($query) use($value){
//                $query->where('commenter_id', $value);
//            }));
            $query->with('comments')->whereHas('comments', function($q) use($value){
                $q->where('comments.commenter_id', $value);
            });
//            dd($query->get()->toArray());
        }
    }
}
