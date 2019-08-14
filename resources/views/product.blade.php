@extends('layout')

@section('title', 'Product page')

@section('content')
        <div class="flex flex-col pb-16">
            <!-- Image -->
            <div class="bg-gray-100 sm:w-2/3 sm:m-auto">
                <img class="h-56 m-auto w-full object-scale-down align-middle sm:h-64 sm:object-cover" src="/breads/Cuernito.png" alt="Banderilla mini">
            </div>
            <!-- Information -->
            <div class="flex flex-col m-5">
                <!-- Name | Price -->
                <div class="flex-1 sm:text-center text-gray-700 font-medium uppercase">
                    <!-- Name -->
                    <div class="first-letter-bigger text-center">Banderilla mini</div>
                    <!-- Price -->
                    <div class="mt-2 text-lg">
                        <span>$11.50</span>
                        <span class="text-xs align-top">p/p</span>
                    </div>
                </div>
                <!-- Description -->
                <div class="mt-4 flex-1 text-gray-600 font-light sm:text-center">Pan de  pasta hojaldrada, con forma de una barra larga y aplanada barnizada con clara de huevo y azúcar. ¡Buenísimas para remojar en chocolate!</div>
                <!-- Ingredients -->
                <div class="flex-1 mt-4 sm:text-center">
                    <p class="uppercase font-medium text-sm first-letter-bigger text-orange-600">ingredientes</p>
                    <ul class="font-light text-gray-600 font-light">
                        <li>- Harina de trigo</li>
                        <li>- Agua</li>
                        <li>- Sal</li>
                    </ul>
                </div>
                <!-- Specifications -->
                <div class="flex-1 mt-5 font-light text-sm text-gray-600 sm:text-center">
                    <p class="hover:border-grey-900 italic">Si no deseas algún ingrediente, especifícalo:</p>
                    <input type="text" placeholder="Ej. sin picante" class="border border-transparent rounded w-full mt-1 bg-white border-gray-400 hover:border-orange-400 hover:shadow-xl focus:border-orange-400 focus:outline-none px-3 py-1 sm:w-7/12 sm:m-auto">
                </div>
                <!-- Qty. -->
                <div class="flex-1 mt-5 font-light text-sm text-gray-600 sm:text-center sm:w-1/3 sm:m-auto">
                    <p class="hover:border-grey-900 italic">Cantidad:</p>
                    <input type="number" placeholder="Cantidad" value="1" class="border border-transparent rounded w-1/2 mt-1 bg-white border-gray-400 hover:border-orange-400 hover:shadow-xl focus:border-orange-400 focus:outline-none px-3 py-1">
                </div>
                <!-- Button (Poner en la charola). -->
                <div class="flex-1 mt-5 font-light text-sm text-gray-600 sm:text-center sm:text-base">
                    <button class="w-full bg-orange-500 hover:bg-orange-600 focus:outline-none focus:shadow-outline text-white font-bold py-2 px-4 rounded sm:w-1/3 sm:m-auto">
                        Poner en la charola
                    </button>
                </div>
            </div>
        </div>
@stop
