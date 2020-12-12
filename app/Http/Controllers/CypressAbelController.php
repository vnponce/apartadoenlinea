<?php

namespace App\Http\Controllers;

use App\Suggestion;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;
use Laracasts\Cypress\Controllers\CypressController;
use Laravelista\Comments\Comment;

class CypressAbelController extends CypressController
{
    public function login(Request $request)
    {
        if($request->attributes){
            // find user based on attributes
            /**@var Builder $query */
            $query = app($this->userClassName())
                ->query();
            collect($request->attributes)->each(function ($attribute, $key) use($query){
                $query->where($key, '=', $attribute);
            });
            $user = $query->first();
        }

        if(!isset($user)){
            $user = factory($this->userClassName())
                ->create($request->input('attributes', []));
        }

        auth()->login($user);
        return $user;
    }

    public function addCommentToSuggestion(Request $request)
    {
//        return $request['attributes'];
        $suggestion = Suggestion::find($request['attributes']['suggestion']);
//        dd($suggestion->toArray());
//        return $suggestion->name;
        $comment = new Comment;
        $comment->commenter()->associate(auth()->user());
        $comment->commentable()->associate($suggestion);
        $comment->comment = $request['attributes']['comment'];
        $comment->approved = true;
        $comment->save();

        if($request['attributes']['solved']) {
            $suggestion->status = 'solved';
            $suggestion->save();
        }

        return $suggestion;
    }
}
