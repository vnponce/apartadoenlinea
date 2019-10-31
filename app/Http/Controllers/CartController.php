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
        $current = Cart::add($product, $request->quantity, ['comment' => $request->comment])->associate(Product::class);
        // dd($current->rowId);
        if($current->qty === 0) {
            Cart::remove($current->rowId);
        }
        if($request->redirect === 'product' ) {
            return back();
        }
        return redirect('/')->with('success_message', 'Listo en tu charola');
    }

    public function empty()
    {
        Cart::destroy();
    }
}
