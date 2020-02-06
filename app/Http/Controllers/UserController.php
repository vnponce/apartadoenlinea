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
                // dd($user->stores);
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
        if(!auth()->user()->isGod) {
            return back();
        }
//        dd($request->toArray());
        $rules = [
            'name' => 'required|string|max:255',
            'file' => 'image',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
            'role' => 'required',
            'store' => 'required',
        ];
        if($request->role === 'manager') {
            $rules['store'] = 'required|exists:stores,id';
        }
        $request->validate($rules);
        // dd($request->toArray());
        // $avatar = $request->file('file')->store('public/avatars');
        // dd($avatar);
        $request->merge(['password' => bcrypt($request->password)]);
//        dd($request->toArray());
        $user = User::create($request->all());
        if($request->role === 'manager') {
            $user->stores()->attach($request->store);
        }
        $users = User::all();
        // dd($users);
        return Inertia::render('Admin/Users', compact('users'))->with('success_message', 'TODO COOOL!');
    }

    public function update(User $user, Request $request)
    {
//        dd($user, $request->toArray());
        $rules = [
            'name' => 'required|string|max:255',
            // 'file' => 'image',
            // 'email' => 'required|string|email|max:255|unique:users',
            'password' => 'string|min:6',
            'role' => 'required',
        ];
        $this->validate($request,$rules);

        if($request->password) {
            $request->merge(['password' => bcrypt($request->password)]);
        }
        $user->update($request->only('name', 'password', 'role'));
        if($request->role === 'manager'){
            $user->stores()->detach();
            $user->stores()->attach($request->store);
        }
        // $users = User::all();
        // return Inertia::render('Admin/Users', compact('users'))->with('success_message', 'Usuario actualizado correctamente!');
        return back()->with('success_message', 'Usuario actualizado correctamente!');
    }
}
