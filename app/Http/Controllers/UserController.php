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
               'avatar_path' => $user->avatar_path,
           ];
        });
        return Inertia::render('Admin/Users', compact('users'));
    }

    public function store(Request $request)
    {
        // dd($request->toArray());
        if(!auth()->user()->isGod) {
            return back();
        }
        // dd($request->toArray());
        $request->validate([
            'name' => 'required',
            'file' => 'image',
            'email' => 'required|email|unique:users',
            'password' => 'required',
            'role' => 'required',
            'store' => 'required',
        ]);
        $avatar = $request->file('file')->store('public/avatars');
        // dd($avatar);
        $request->merge(['avatar' => $avatar]);
//        dd($request->toArray());
        User::create($request->all());
        $users = User::all();
        return Inertia::render('Admin/Users', compact('users'))->with('success_message', 'TODO COOOL!');
    }
}
