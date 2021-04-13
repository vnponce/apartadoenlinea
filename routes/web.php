<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Inertia\Inertia;
/*
Route::get('/', function () {
    return view('welcome');
});
*/
/*
Route::get('front', function() {
    return view('front');
});

Route::get('home', function() {
    return view('home');
});

Route::get('product-back', function() {
    return view('product');
});

Route::get('order', function() {
    return view('order');
});

Route::get('checkout', function() {
    return view('checkout');
});

Route::get('compra', function() {
    return view('success');
});
*/
// Inertia
//Route::get('inertia', function() {
//    return Inertia::render('Example', [
//        'foo' => 'bar',
//    ]);
//});
//Route::get('mySuccess', function() {
//    return Inertia::render('Success', [
//        'foo' => 'bar',
//    ]);
//});

Route::get('/roscasgaribaldi-rellenas', function() {
    return Inertia::render('Landings/RoscasGaribaldi');
});

Auth::routes(['register' => false]);

// Suggestions
Route::get('/sugerencias', 'SuggestionController@create');
Route::post('/suggestions', 'SuggestionController@store');


Route::group(['middleware' => 'auth'], function() {
    Route::get('/', 'ProductController@index');
    Route::get('/category/{category}', 'CategoryController@index');

    Route::get('pan/{product}', 'ProductController@show');

    Route::get('pedido', function() {
        return Inertia::render('Order');
    });
    Route::post('pedido/detalles', 'OrderController@setDetails');
    Route::post('pedido', 'OrderController@store');

    Route::get('charola', 'CartController@index');

// Route::get('listo', 'OrderController@store');

// Card
    Route::post('/cart', 'CartController@store');
    Route::get('/empty', 'CartController@empty');
    /*Route::delete('/cart', function(\Illuminate\Http\Request $request) {
        dd($request->toArray());
    });*/
    Route::post('/cart/product/{product}/update/comment', 'CartController@updateComment');
    Route::post('/cart/product/{product}/update/custom-message', 'CartController@updateCustomMessage');
    Route::delete('/cart/product/{id}', 'CartController@remove');
// Route::post('/cart', 'CartController@remove');

    Route::get('product/search', 'ProductController@search');

    Route::get('tyc', 'TyCController@tyc');
    Route::get('politicas', 'TyCController@tyc');
// testing email view
//Route::get('email', function() {
//    return view('email.order-details-html');
//});
});


// Route::get('/home', 'HomeController@index')->name('home');

// Panel
Route::group(['prefix' => 'admin', 'middleware' => 'auth'], function() {
    Route::get('/', 'PanelController@index')->name('panel');

    Route::get('users', 'UserController@index')->name('user.index');
    Route::post('users', 'UserController@store')->name('user.create');
    Route::put('users/{user}', 'UserController@update')->name('user.update');
    Route::group(['prefix' => 'products'], function() {
        Route::get('/', 'PanelController@products')->name('panel.products');
        Route::post('/', 'ProductController@store')->name('product.store');
        Route::put('/{product}', 'ProductController@update')->name('product.update');
        Route::post('/{product}', 'ProductController@update')->name('product.update');
    });
    Route::group(['prefix' => 'orders'], function() {
        Route::put('/{order}', 'OrderController@update');
    });

    Route::group(['prefix' => 'stores'], function() {
        Route::get('/', 'StoreController@index');
        Route::put('/{store}', 'StoreController@update')->name('store.update');
    });

    Route::group(['prefix' => 'suggestions'], function() {
//        Route::post('/', 'SuggestionController@store')->name('suggestion.store');
        Route::get('/', 'SuggestionController@index');
        Route::put('/{suggestion}/update', 'SuggestionController@update')->name('suggestion.update');
        Route::put('/{suggestion}/updateStatus', 'SuggestionController@updateStatus')->name('suggestion.updateStatus');
    });
});

// CYPRESS
if(env('APP_CYPRESS')) {
    Route::post('/__cypress_abel__/login', 'CypressAbelController@login');
    Route::post('/__cypress_abel__/addCommentToSuggestion', 'CypressAbelController@addCommentToSuggestion');
}
