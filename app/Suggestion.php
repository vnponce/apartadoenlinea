<?php

namespace App;

use Spatie\ModelStatus\HasStatuses;
use Laravelista\Comments\Commentable;
use Illuminate\Database\Eloquent\Model;

class Suggestion extends Model
{
    use HasStatuses, Commentable;

    protected $fillable = ['name', 'email', 'suggestion'];
}
