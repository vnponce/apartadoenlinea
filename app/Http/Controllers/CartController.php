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
//        $sorted = $cart->sortBy(function ($product, $key) {
//            //dd($product, $key);
//           return $product->name;
//        });
        $sorted = $cart->sortBy('name');
//         dd($sorted);
        return Inertia::render('Checkout', compact('sorted'));
    }

    public function store(Request $request)
    {
        $product = Product::find($request->product_id);
        $current = Cart::add(
            $product,
            $request->quantity,
            [
                'customizable' => $product->customizable,
                'comment' => $request->comment,
                'allow_instructions' => $product->allow_instructions,
                'custom_message' => $request->custom_message,
            ]
        )->associate(Product::class);
        // dd($current->rowId);
        if($current->qty <= 0) {
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
//        return back()->with('success_message', 'Pan fuera de la charola');
        return back()->with(['success_message' => 'Pan fuera de la charola', 'show_panel' => true]);
    }

    public function updateComment(Request $request, Product $product)
    {
        $content = Cart::content();
        $notUpdatedItems = $content->filter(function ($item) use ($request){
            return $item->rowId !== $request->remove_rowId;
        });
        $currentItem = $content->filter(function ($item) use ($request){
            return $item->rowId === $request->remove_rowId;
        });
        Cart::remove($request->remove_rowId);
//        dd($currentItem->first()->options);
//        dd($request->toArray());
        Cart::add($product, $request->quantity,
            [
                'comment' => $request->comment,
                'allow_instructions' => $product->allow_instructions,
                'custom_message' => $currentItem->first()->options->custom_message,
                'customizable' => $product->customizable
            ])
            ->associate(Product::class);
//        dd(Cart::content());

        $notUpdatedItems->map(function($item) {
            Cart::remove($item->rowId);
            // si es el que tiene los datos debemos poner los datos completos de nuevo
            if($item->id === 'orderDetailsId') {
                Cart::add($item->id, $item->name, $item->qty, $item->price, [
                    'store' => $item->options->store,
                    'date' => $item->options->date,
                    'hour' => $item->options->hour,
                    'name' => $item->options->name,
                    'lastname' => $item->options->lastname,
                    'phone' => $item->options->phone,
                    'email' => $item->options->email,
                    'employeeName' => $item->options->employeeName,
                ]);
            } else {
                Cart::add($item->id, $item->name, $item->qty, $item->price,
                    [
                        'comment' => $item->options->comment,
                        'allow_instructions' => $item->options->allow_instructions,
                        'custom_message' => $item->options->custom_message,
                        'customizable' => $item->options->customizable
                    ])
                    ->associate(Product::class);
            }
        });
        $cart = Cart::content();
//        dd($cart);
        $sorted = $cart->sortBy(function ($product, $key) {
            return $product->name;
        });
        return back()->with('show_panel', 'Actualizado');

//        return redirect('/charola');
        // return Inertia::render('Checkout', compactap('sorted'));
    }

    public function updateCustomMessage(Request $request, Product $product)
    {
        $currentProduct = Cart::get($request->remove_rowId);
        Cart::remove($request->remove_rowId);
        Cart::add($product, $currentProduct->qty,
            [
                'comment' => $currentProduct->options->comment,
                'allow_instructions' => $product->allow_instructions,
                'customizable' => $product->customizable,
                'custom_message' => $request->custom_message,
            ])
            ->associate(Product::class);

        return back()->with('show_panel', 'Actualizado');
    }
    public function empty()
    {
        Cart::destroy();
        return redirect('/');
    }
}
