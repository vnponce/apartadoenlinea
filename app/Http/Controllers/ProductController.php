<?php

namespace App\Http\Controllers;

use App\Category;
use App\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::where('favorite', true)->where('available', true)->paginate();
        return Inertia::render('Home', compact('products'));
    }

    public function search(Request $request)
    {
        // dd($request->get('search'));
        $products = Product::where('name', 'like', "%{$request->get('q')}%")->where('available', true)->get();
        return $products;
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
//        dd($request->toArray());
        $request->validate([
            'name' => 'required|string|max:255',
            'file' => 'image',
            'ingredients' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'category_id' => 'required|exists:categories,id',
            'available' => 'required',
            'favorite' => 'required',
            'price' => 'required|regex:/^\d+(\.\d{1,2})?$/'
        ]);

//        dd($request->toArray());
        $image = $request->file('file')->store('public/products');

        $request->merge(['image' => $image]);

//        dd($request->toArray());
        $product = Product::create($request->all());
//        dd($product->toArray());
        return back()->with('success_message', 'Producto creado satisfactoriamente');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        // @todo: redirect if product is not available
        return Inertia::render('Product', compact('product'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
//        dd($request->toArray(), $product->toArray());
        $request->validate([
            'name' => 'required|string|max:255',
            'file' => 'image',
            'ingredients' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'category_id' => 'required|exists:categories,id',
            'available' => 'required',
            'favorite' => 'required',
            'price' => 'required|regex:/^\d+(\.\d{1,2})?$/'
        ]);

        $product->update($request->only('name', 'ingredients', 'description', 'category_id', 'available', 'favorite', 'price'));
        // $users = User::all();
        // return Inertia::render('Admin/Users', compact('users'))->with('success_message', 'Usuario actualizado correctamente!');
        return back()->with('success_message', 'Producto actualizado correctamente!');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
    }
}
