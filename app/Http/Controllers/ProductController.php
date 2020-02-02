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
        dd($request->toArray());
        $request->validate([
            'name' => 'required|string|max:255',
            'file' => 'image',
            'ingredients' => 'required|string|max:255',
            'description' => 'string|max:255',
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
        return back()->with('success', 'Producto creado satisfactoriamente');
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
        $request->validate([
            'name' => 'required|string|max:255',
            'file' => 'image',
            'ingredients' => 'required|string|max:255',
            'description' => 'max:255',
            'category_id' => 'required|exists:categories,id',
            'available' => 'required',
            'favorite' => 'required',
            'price' => 'required|regex:/^\d+(\.\d{1,2})?$/'
        ]);

        $only = collect(['name', 'ingredients', 'description', 'category_id', 'available', 'favorite', 'price']);

//        dd($request->toArray());
        if($request->hasFile('file')) {
//            dd($request->file);
            $image = $request->file('file')->store('public/products');
            $available = ($request->available === 'true') ? true : false;
            $favorite = ($request->favorite === 'true') ? true : false;
            $request->merge(['image' => $image, 'available' => $available, 'favorite' => $favorite]);
            $only->push('image');
        }
//        dd($request->toArray(), $only->toArray());
        $product->update($request->only($only->toArray()));
//        dd($product);
        $products = Product::where('favorite', true)->where('available', true)->paginate();
//         return Inertia::render('Admin/Users', compact('users'))->with('success_message', 'Usuario actualizado correctamente!');
         return redirect()->back()->with('success', 'Producto actualizado correctamente!');

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
