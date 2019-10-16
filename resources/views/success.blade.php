@extends('layout')

@section('title', 'Product page')

@section('content')
    <style>
        .success-image {
            background-image:
                linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)),
                url('/images/successWithoutBlur.jpg');
            background-size: cover;
        }
    </style>
    <section class="mt-24 w-full">
        <span class="block text-brand-orange text-4xl text-center font-title font-semibold">GRACIAS POR TU COMPRA</span>
        <span class="block p-2 text-gray-500 text-base text-center max-w-xl m-auto">¡Tu pan esta en el horno!</span>
    </section>
    <!-- image -->
    <div class="w-full h-64 success-image bg-cover"></div>
    <section class="w-full px-4">
        <!-- Resumen de compra -->
        <div class="w-full mt-5 uppercase text-brand-orange text-center text-sm tracking-wider font-bold">
            <span class="text-lg">r</span>esumen de compra:
        </div>
        <!-- datos de compra -->
        <section class="w-full mt-4">
            <!-- Name -->
            <div>
                <span class="text-sm font-thin">Nombre:</span>
                <span class="text-sm font-bold mr-1">Santiago Chavez</span>
            </div>
            <!-- order number -->
            <div>
                <span class="text-sm font-thin">Número de pedido:</span>
                <span class="text-sm font-bold mr-1">00001</span>
            </div>
            <!-- Devliver place -->
            <div>
                <span class="text-sm font-thin">Recoger en:</span>
                <span class="text-sm font-bold mr-1">Zaragoza</span>
            </div>
            <!-- Date -->
            <div>
                <span class="text-sm font-thin">Día:</span>
                <span class="text-sm font-bold mr-1">13 de mayo el 2019</span>
            </div>
            <!-- Hour -->
            <div>
                <span class="text-sm font-thin">Hora:</span>
                <span class="text-sm font-bold mr-1">13:00 hrs</span>
            </div>
        </section>
        <!-- @Todo: why use pb to get footer not hover content -->
        <div class="flex justify-center w-full pb-24 content-center">
            <div class="md:w-1/2">
                <!-- separator -->
                <div class="w-full mt-4 px-2 mb-6">
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
    </section>
@endsection
