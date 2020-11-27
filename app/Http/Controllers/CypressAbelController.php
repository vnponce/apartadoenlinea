<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;
use Laracasts\Cypress\Controllers\CypressController;

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
}
