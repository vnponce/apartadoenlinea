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
Route::get('inertia', function() {
    return Inertia::render('Example', [
        'foo' => 'bar',
    ]);
});
Route::get('/', 'ProductController@index');
Route::get('/category/{category}', 'CategoryController@index');

Route::get('pan/{product}', 'ProductController@show');

Route::get('pedido', function() {
    $stores = \App\Store::all();
    return Inertia::render('Order', compact('stores'));
});
Route::post('pedido/detalles', 'OrderController@setDetails');
Route::post('pedido', 'OrderController@store');
Route::put('pedido/{order}', 'OrderController@update');

Route::get('charola', 'CartController@index');

// Route::get('listo', 'OrderController@store');

// Card
Route::post('/cart', 'CartController@store');
Route::get('/empty', 'CartController@empty');
/*Route::delete('/cart', function(\Illuminate\Http\Request $request) {
    dd($request->toArray());
});*/
Route::post('/cart/product/{product}/update/comment', 'CartController@updateComment');
Route::delete('/cart/product/{id}', 'CartController@remove');
// Route::post('/cart', 'CartController@remove');

Route::get('product/search', 'ProductController@search');

Route::get('tyc', 'TyCController@tyc');
Route::get('politicas', 'TyCController@tyc');
// testing email view
Route::get('email', function() {
    return view('email.order-details-html');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

// Panel
Route::group(['prefix' => 'admin', 'middleware' => 'auth'], function() {
    Route::get('/', 'PanelController@index')->name('panel');

    Route::get('users', 'UserController@index')->name('user.index');
    Route::post('users', 'UserController@store')->name('user.create');
    Route::put('users/{user}', 'UserController@update')->name('user.update');
    Route::group(['prefix' => 'products'], function() {
        Route::get('/', 'PanelController@products')->name('panel.products');
        Route::post('/', 'ProductController@store')->name('panel.store');
    });

});
