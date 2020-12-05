<?php

namespace App;

use Spatie\ModelStatus\HasStatuses;
use Illuminate\Database\Eloquent\Model;

class Suggestion extends Model
{
    use HasStatuses;

    protected $fillable = ['name', 'email', 'suggestion', 'solved_comment'];
}
