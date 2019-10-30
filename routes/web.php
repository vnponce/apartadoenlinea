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

// Inertia
Route::get('inertia', function() {
    return Inertia::render('Example', [
        'foo' => 'bar',
    ]);
});

Route::get('/', 'ProductController@index');

Route::get('pan/{product}', 'ProductController@show');

Route::get('pedido', function() {
    return Inertia::render('Order');
});

Route::get('charola', function() {
    return Inertia::render('Checkout');
});

Route::get('listo', function() {
    return Inertia::render('Success');
});
