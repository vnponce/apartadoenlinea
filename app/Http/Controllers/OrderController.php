<?php

namespace App\Http\Controllers;

use App\Order;
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
        // dd('store request =>', $request);
        // if paypayl pasa  o es usuario de panadería no va a paypal- Crear orden
        // 1.- Obtener los detalles de la order
        $total = Cart::subtotal() * 100;
        $cart = Cart::content();
//        dd($cart);
        $detailsRowId = $cart->search(function ( $cartItem, $rowId) {
            return $cartItem->id ===  'orderDetailsId';
        });
//         dd($detailsRowId);
        $detailsData = $cart->get($detailsRowId)->options;
        // -- Cart::remove($detailsRowId);
//         dd($detailsData);
        $date = substr($detailsData->date, 0, strpos($detailsData->date, "T"));
//         dd($date);
        $order = Order::create([
            'store_id' => $detailsData->store,
            'date' => $date,
            'hour' => $detailsData->hour,
            'name' => $detailsData->name,
            'lastname' => $detailsData->lastname,
            'phone' => $detailsData->phone,
            'email' => $detailsData->email,
            'total' => $total,
            // @todo: hacer status
            'status' => 'created',
        ]);
        // dd($order);
//        dd($cart);
        $cart->filter(function($item) use ($detailsRowId) {
            return $item->rowId !== $detailsRowId;
        })->map(function ($item) use ($order) {
            // dd($item);
           $order->products()->attach($item->id, [
               'price' => $item->price * 100,
               'quantity' => $item->qty,
               'comment' => $item->options->comment ?? '',
           ]);
        });
        return Inertia::render('Success', compact('order'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function setDetails(Request $request)
    {
        // dd('set details', $request->toArray());
        $request->validate([
            'store' => 'required',
            'date' => 'required',
            'hour' => 'required',
            'name' => 'required',
            'lastname' => 'required',
            'phone' => 'required',
            'email' => 'required',
        ]);
//        dd($request->toArray());
        $cart = Cart::content();
//        dd($cart);
        $previousOrderDetails = $cart->search(function ( $cartItem, $rowId) {
           return $cartItem->id ===  'orderDetailsId';
        });
//        dd($previousData);
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
        //
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
}
