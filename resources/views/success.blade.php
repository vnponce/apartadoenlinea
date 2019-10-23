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
    <section class="flex w-full px-4 pb-24 bg-brand-gray justify-center">
        <div class="w-full md:w-1/2">
            <!-- Resumen de compra -->
            <div class="w-full mt-5 uppercase text-brand-orange text-center text-sm tracking-wider font-bold">
                <span class="text-lg">r</span>esumen de compra:
            </div>
            <!-- datos de compra -->
            <section class="flex w-full mt-4 flex-col items-center md:flex-row md:justify-between">
                <!-- Container left -->
                <div>
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
                </div>
                <!-- Container right -->
                <div>
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
                </div>
            </section>
            <!-- @Todo: why use pb to get footer not hover content -->
            <!-- separator -->
            <div class="w-full mt-4 mb-5">
                <hr class="w-100">
            </div>
            <!-- product lists -->
            <div class="w-full flex flex-col">
                <!-- checkout table -->
                <div class="flex content-between">
                    <span class="flex-1 text-brand-orange font-thin text-left">Producto</span>
                    <span class="flex-1 text-brand-orange font-thin text-center">Cant.</span>
                    <span class="flex-1 text-brand-orange font-thin text-right">Prec. Unit.</span>
                </div>
                <!-- products list -->
                <div class="mb-8">
                    <div class="flex">
                        <div class="flex items-center flex-1 inline-block">
                            <span class="ml-0 text-lg">Producto</span>
                        </div>
                        <div class="flex flex-1 text-center items-center justify-center">
                            <span>1</span>
                        </div>
                        <div class="flex flex-1 items-center flex-row-reverse">$ 4.00</div>
                    </div>
                    <div class="text-sm italic text-brand-orange">No incluir gluten ni conservadores</div>
                </div>
                <div class="w-full text-center text-regularText text-normal">Total:</div>
                <div class="w-full text-center text-brand-orange text-2xl">$64.00</div>
            </div>
        </div>
    </section>
@endsection
