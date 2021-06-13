<?php

namespace App\Http\Controllers;

use App\Mail\OrderDetails;
use App\Order;
use Carbon\Carbon;
use Gloudemans\Shoppingcart\Facades\Cart;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Inertia\Response
     */
    public function store(Request $request)
    {
        if($this->notHasAnyProduct() || $this->isOrderDetailsDataMissing()) {
            return redirect('/');
        }

        $order = Order::createFromCart([
            'payment_type' => '',
            'payed' => false,
        ]);

        \Mail::to($order->email)->send(new OrderDetails($order));

        $successCart = Cart::content();
        $successTotalCart = Cart::subtotal();
        Cart::destroy();

        return Inertia::render('Success', compact('order', 'successCart', 'successTotalCart'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function setDetails(Request $request)
    {
        if($this->notHasAnyProduct()) {
            return redirect('/');
        };

        $request->validate([
            'store' => 'required',
            'date' => 'required',
            'hour' => 'required',
            'name' => 'required',
            'lastname' => 'required',
            'phone' => 'required',
            'email' => 'required|email',
            'employeeName' => 'required',
        ]);
//        dd($request->toArray());
        $cart = Cart::content();
//        dd($cart);
        $previousOrderDetails = $cart->search(function ( $cartItem, $rowId) {
           return $cartItem->id ===  'orderDetailsId';
        });
//        dd($previousOrderDetails);
        if($previousOrderDetails) {
            Cart::remove($previousOrderDetails);
        }
        $current = Cart::add('orderDetailsId', 'OrderDetails', 1, 0, [
            'store' => $request->store,
            'date' => $request->date,
            'hour' => $request->hour,
            'name' => $request->name,
            'lastname' => $request->lastname,
            'phone' => $request->phone,
            'email' => $request->email,
            'employeeName' => $request->employeeName,
        ]);
//        dd(Cart::content());
        return redirect('/charola');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function show(Order $order)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Order $order)
    {
        $order->update($request->toArray());
//        return redirect('/admin')->with('order', $order);
        return back()->with('order', $order);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function destroy(Order $order)
    {
        //
    }

    public function notHasAnyProduct(): bool
    {
        $cart = Cart::content();

        $products = $cart->filter(function ( $cartItem, $rowId) {
            return $cartItem->id !==  'orderDetailsId';
        });

        return $products->count() === 0;
    }

    public function isOrderDetailsDataMissing(): bool
    {
        $cart = Cart::content();

        $details = $cart->filter(function ( $cartItem, $rowId) {
            return $cartItem->id ===  'orderDetailsId';
        });

        return $details->count() === 0;
    }
}
