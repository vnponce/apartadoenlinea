<?php

namespace App\Http\Controllers;

use App\Product;
use Gloudemans\Shoppingcart\Facades\Cart;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CartController extends Controller
{
    public function index()
    {
        $cart = Cart::content();
        return Inertia::render('Checkout', compact('cart'));
    }

    public function store(Request $request)
    {
        $product = Product::find($request->product_id);
        // dd($product->toArray(), $request->toArray());
        Cart::add($product->id, $product->name, $request->quantity, $product->price/100, ['comment' => $request->comment])->associate(Product::class);
        return redirect('/')->with('success_message', 'Listo en tu charola');
    }

    public function empty()
    {
        Cart::destroy();
    }
}
