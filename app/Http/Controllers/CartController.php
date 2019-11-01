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
        // dd($cart);
        $sorted = $cart->sortBy(function ($product, $key) {
            //dd($product, $key);
           return $product->name;
        });
        // dd($sorted);
        return Inertia::render('Checkout', compact('sorted'));
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

    public function remove(Request $request, $id)
    {
        Cart::remove($id);
        return back()->with('success_message', 'Pan fuera de la charola');
    }

    public function updateComment(Request $request, Product $product)
    {
        // dd('updateComment', $request->toArray(), $product->toArray());
        // $current = Cart::update($id, ['comment' => $request->comment]);
        $current = Cart::add($product, $request->quantity, ['comment' => $request->comment])->associate(Product::class);
        // dd($current);
        Cart::remove($request->remove_rowId);
        return back()->with('success_message', 'Instrucciones actualizadas');
    }

    public function empty()
    {
        Cart::destroy();
    }
}
