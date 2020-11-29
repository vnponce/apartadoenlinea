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
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Pagination\UrlWindow;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Collection;

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
        $this->registerLengthAwarePaginator();

        Inertia::version(function () {
            return md5_file(public_path('mix-manifest.json'));
        });
        // Multiple values
        Inertia::share([
            // Synchronously
            'app' => [
//                'name' => Config::get('app.name'),
                'env' => Config::get('app.env'),
                'mock' => Config::get('app.env') === 'local' ? [
                    'username' => env('APP_MOCK_USERNAME', null),
                    'password' => env('APP_MOCK_PASSWORD', null),
                ] : null,
            ],
            // Lazily
            'auth' => function () {
                return [
                    'user' => Auth::user() ? [
                        'id' => Auth::user()->id,
                        'name' => Auth::user()->name,
                        'avatar' => Auth::user()->avatar,
                        'role' => Auth::user()->role,
                        'isGod' => Auth::user()->isGod,
                        'isAdmin' => Auth::user()->isAdmin,
                        'isMatrix' => Auth::user()->isMatrix,
                    ] : null
                ];
            },
            'categories' => function () {
                $categories = Category::all();
                return $categories;
            },
            'flash' => function () {
                return [
                    'success' => Session::get('success'),
                    'success_message' => Session::get('success_message'),
                    'message' => Session::get('message'),
                    'show_panel' => Session::get('show_panel'),
                ];
            },
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

    protected function registerLengthAwarePaginator()
    {
        $this->app->bind(LengthAwarePaginator::class, function ($app, $values) {
            return new class(...array_values($values)) extends LengthAwarePaginator {
                public function only(...$attributes)
                {
                    return $this->transform(function ($item) use ($attributes) {
                        return $item->only($attributes);
                    });
                }

                public function transform($callback)
                {
                    $this->items->transform($callback);

                    return $this;
                }

                public function toArray()
                {
                    return [
                        'data' => $this->items->toArray(),
                        'links' => $this->links(),
                    ];
                }

                public function links($view = null, $data = [])
                {
                    $this->appends(Request::all());

                    $window = UrlWindow::make($this);

                    $elements = array_filter([
                        $window['first'],
                        is_array($window['slider']) ? '...' : null,
                        $window['slider'],
                        is_array($window['last']) ? '...' : null,
                        $window['last'],
                    ]);

                    return Collection::make($elements)->flatMap(function ($item) {
                        if (is_array($item)) {
                            return Collection::make($item)->map(function ($url, $page) {
                                return [
                                    'url' => $url,
                                    'label' => $page,
                                    'active' => $this->currentPage() === $page,
                                ];
                            });
                        } else {
                            return [
                                [
                                    'url' => null,
                                    'label' => '...',
                                    'active' => false,
                                ],
                            ];
                        }
                    })->prepend([
                        'url' => $this->previousPageUrl(),
                        'label' => 'Previous',
                        'active' => false,
                    ])->push([
                        'url' => $this->nextPageUrl(),
                        'label' => 'Next',
                        'active' => false,
                    ]);
                }
            };
        });
    }
}
