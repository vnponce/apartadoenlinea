<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        $usersAux = $users->map(function($user) {
            $store = 'Todas las tiendas';
            if(!$user->isAdmin) {
                // dd($user->stores->first()->name);
                $store = $user->stores->first()->name;
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
//        dd($request->toArray());
        $request->validate([
            'name' => 'required|string|max:255',
            'file' => 'image',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
            'role' => 'required',
            'store' => 'required',
        ]);
        // dd($request->toArray());
        // $avatar = $request->file('file')->store('public/avatars');
        // dd($avatar);
        // $request->merge(['avatar' => $avatar]);
//        dd($request->toArray());
        $user = User::create($request->all());
        $user->stores()->attach($request->store);
        $users = User::all();
        // dd($users);
        return Inertia::render('Admin/Users', compact('users'))->with('success_message', 'TODO COOOL!');
    }
}
