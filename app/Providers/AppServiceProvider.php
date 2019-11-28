<?php

namespace App\Providers;

use App\Category;
use App\Store;
use Gloudemans\Shoppingcart\Facades\Cart;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\ServiceProvider;
// use Illuminate\Contracts\Session\Session;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // Multiple values
        Inertia::share([
            // Synchronously
            'app' => [
                'name' => Config::get('app.name')
            ],
            // Lazily
            'auth' => function () {
                return [
                    'user' => Auth::user() ? [
                        'id' => Auth::user()->id,
                        'name' => Auth::user()->name,
                        'avatar' => Auth::user()->avatar,
                    ] : null
                ];
            },
            'categories' => function () {
                $categories = Category::all();
                return $categories;
            },
            'flash' => [
                'message' => session()->get('message'),
            ],
            'cart' => function () {
                return [
                    'content' => Cart::content(),
                ];
            },
            'stores' => function () {
                return Store::all();
            },
            'errors' => function () {
                return Session::get('errors')
                    ? Session::get('errors')->getBag('default')->getMessages()
                    : (object) [];
            },
        ]);
        Inertia::share('subtotal', function() {
            return Cart::subtotal();
        });
    }
}
