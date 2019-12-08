<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $preUsers = User::all();
        $users = $preUsers->map(function($user) {
            $store = 'Todas las tiendas';
            if(!$user->isAdmin) {
                $store = $user->store->name;
            }
           return [
               'id' => $user->id,
               'name' => $user->name,
               'email' => $user->email,
               'role' => $user->role,
               'stores' => $store,
               'avatar' => $user->avatar,
           ];
        });
        return Inertia::render('Admin/Users', compact('users'));
    }

    public function store(Request $request)
    {
        // dd($request->toArray());
        $request->validate([
            'name' => 'required',
            // 'avatar' => 'required',
            'email' => 'required|unique:users',
            'password' => 'required',
            'role' => 'required',
            'store' => 'required',
        ]);
        User::create($request->all());
        $users = User::all();
        return Inertia::render('Admin/Users', compact('users'))->with('success_message', 'TODO COOOL!');
    }
}
