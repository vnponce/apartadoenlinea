@extends('layout')

@section('title', 'Product page')

@section('content')
    @include('partials.header-description', ['title' => 'MI CHAROLA', 'description' => 'Esto tiene tu charola'])
    <!-- @Todo: why use pb to get footer not hover content -->
    <div class="flex justify-center w-full pb-24 px-8 content-center">
        <div class="md:w-1/2">
            <!-- separator -->
            <div class="w-full mt-8 px-2 mb-6">
                <hr class="w-100">
            </div>
            <!-- checkout container -->
            <div class="w-full flex flex-col">
                <!-- checkout table -->
                <div class="flex content-between">
                    <span class="flex-1 text-brand-orange font-thin text-left">Producto</span>
                    <span class="flex-1 text-brand-orange font-thin text-center">Cant.</span>
                    <span class="flex-1 text-brand-orange font-thin text-right">Prec. Unit.</span>
                </div>
                <!-- products list -->
                <div class="mb-6">
                    <div class="flex">
                        <div class="flex items-center flex-1 inline-block">
                            <svg class="cursor-pointer -ml-5 mr-2 stroke-current fill-current  text-gray-500 w-3"  viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <polygon points="10 8.58578644 2.92893219 1.51471863 1.51471863 2.92893219 8.58578644 10 1.51471863 17.0710678 2.92893219 18.4852814 10 11.4142136 17.0710678 18.4852814 18.4852814 17.0710678 11.4142136 10 18.4852814 2.92893219 17.0710678 1.51471863 10 8.58578644"></polygon>
                            </svg>
                            <span class="ml-0 text-lg">Producto</span>
                        </div>
                        <div class="flex flex-1 text-center items-center">
                            <svg class="w-5 cursor-pointer fill-current text-brand-orange" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20">
                                <path d="M16,10c0,0.553-0.048,1-0.601,1H4.601C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H15.4  C15.952,9,16,9.447,16,10z"/>
                            </svg>
                            <span class="flex-1 cursor-pointer ">1</span>
                            <svg class="w-5 cursor-pointer fill-current text-brand-orange" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20">
                                <path d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601  C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399  C15.952,9,16,9.447,16,10z"/>
                            </svg>
                        </div>
                        <div class="flex flex-1 items-center flex-row-reverse">$ 4.00</div>
                    </div>
                    <div class="text-sm italic text-brand-orange">No incluir gluten ni conservadores</div>
                </div>
                <div class="w-full text-center text-regularText text-xl">Total:</div>
                <div class="w-full text-center text-regularText text-2xl">$64.00</div>
            </div>
            <!-- separator -->
            <div class="w-full mt-2 px-2 mb-6">
                <hr class="w-100">
            </div>
            <!-- 'Proceder' Next step -->
            <div>
                <!-- 'Proceder' Next step -->
                <div class="flex items-center justify-center">
                    <input id="checkout-agree" class="mr-2" type="checkbox">
                    <label for="checkout-agree" class="text-center text-gray-500 text-base italic">
                        ¿El contenido de tu compra es el correcto?
                    </label>
                </div>
                <!-- Paypal button or levantar pedido si es usuario -->
                <button class="flex cursor-pointer justify-center font-bold py-2 px-4 rounded w-full md:w-1/2 m-auto mt-4 block bg-transparent border border-brand-orange text-brand-orange text-bold hover:bg-brand-orange hover:text-white hover:shadow hover:text-white">
                    <span>Paypal</span>
                </button>
            </div>
        </div>
    </div>
@endsection
