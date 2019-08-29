@extends('layout')

@section('title', 'Product page')

@section('content')
    @include('partials.header-description', ['title' => 'PEDIDOS', 'description' => 'Por favor recuerda llenar el formulario para indicarnos en dónde recogeras tu pedido.'])
    <!-- @Todo: why use pb to get footer not hover content -->
    <div class="mt-4 w-full pb-24">
        <!-- Order place and hour data -->
        <div class="px-4">
            <!-- Sucursal -->
            <div class="font-light text-sm text-gray-600 mt-4 sm:text-center lg:text-justify">
                <p class="hover:border-grey-900 italic">Sucursal</p>
                <input type="text" placeholder="Bravo" value="Bravo" class="border border-transparent rounded w-full mt-1 bg-white border-gray-400 hover:border-orange-400 hover:shadow-xl focus:border-orange-400 focus:outline-none px-3 py-1 sm:w-7/12 sm:m-auto">
            </div>
            <!-- Día -->
            <div class="font-light text-sm text-gray-600 mt-4 sm:text-center lg:text-justify">
                <p class="hover:border-grey-900 italic">Día</p>
                <input type="text" placeholder="Bravo" value="Mañana (día)" class="border border-transparent rounded w-full mt-1 bg-white border-gray-400 hover:border-orange-400 hover:shadow-xl focus:border-orange-400 focus:outline-none px-3 py-1 sm:w-7/12 sm:m-auto">
            </div>
            <!-- Hora -->
            <div class="font-light text-sm text-gray-600 mt-4 sm:text-center lg:text-justify">
                <p class="hover:border-grey-900 italic">Hora</p>
                <input type="text" placeholder="Bravo" value="9:30 hrs." class="border border-transparent rounded w-full mt-1 bg-white border-gray-400 hover:border-orange-400 hover:shadow-xl focus:border-orange-400 focus:outline-none px-3 py-1 sm:w-7/12 sm:m-auto">
            </div>
        </div>
        <!-- Map -->
        <div class="px-4">
            <!-- Mapa -->
            <div class="hidden border h-56 mt-4 bg-brand-gray sm:block">
                MAPA
            </div>
            <!-- Ver mapa -->
            <button class="flex cursor-pointer justify-center font-bold py-2 px-4 rounded w-1/2 m-auto mt-4 block bg-transparent border border-brand-orange text-brand-orange text-bold hover:bg-brand-orange hover:text-white hover:shadow hover:text-white sm:hidden">
                <span>Ver el mapa</span>
                <svg version="1.1" class="stroke-current fill-current w-6" id="Location_pin" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20" xml:space="preserve">
                <path d="M10,2.009c-2.762,0-5,2.229-5,4.99c0,4.774,5,11,5,11s5-6.227,5-11C15,4.239,12.762,2.009,10,2.009zM10,9.76c-1.492,0-2.7-1.209-2.7-2.7s1.208-2.7,2.7-2.7c1.49,0,2.699,1.209,2.699,2.7S11.49,9.76,10,9.76z"/>
            </svg>

            </button>
        </div>
        <!-- separator -->
        <div class="px-4 mt-8 mb-6">
            <hr class="w-100">
        </div>
        <!-- Order user data -->
        <div class="px-4">
            <!-- Name -->
            <div class="font-light text-sm text-gray-600 mt-4 sm:text-center lg:text-justify">
                <p class="hover:border-grey-900 italic">Nombre</p>
                <input type="text" placeholder="Ej. Juan" class="border border-transparent rounded w-full mt-1 bg-white border-gray-400 hover:border-orange-400 hover:shadow-xl focus:border-orange-400 focus:outline-none px-3 py-1 sm:w-7/12 sm:m-auto">
            </div>
            <!-- LastName -->
            <div class="font-light text-sm text-gray-600 mt-4 sm:text-center lg:text-justify">
                <p class="hover:border-grey-900 italic">Apellido</p>
                <input type="text" placeholder="Bravo" class="border border-transparent rounded w-full mt-1 bg-white border-gray-400 hover:border-orange-400 hover:shadow-xl focus:border-orange-400 focus:outline-none px-3 py-1 sm:w-7/12 sm:m-auto">
            </div>
            <!-- Phone -->
            <div class="font-light text-sm text-gray-600 mt-4 sm:text-center lg:text-justify">
                <label for="phone" class="hover:border-grey-900 italic">Teléfono</label>
                <input type="tel" id="phone" class="border border-transparent rounded w-full mt-1 bg-white border-gray-400 hover:border-orange-400 hover:shadow-xl focus:border-orange-400 focus:outline-none px-3 py-1 sm:w-7/12 sm:m-auto">
            </div>
            <!-- email -->
            <div class="font-light text-sm text-gray-600 mt-4 sm:text-center lg:text-justify">
                <label for="email" class="hover:border-grey-900 italic">Correo electrónico</label>
                <input id="email" type="email" class="border border-transparent rounded w-full mt-1 bg-white border-gray-400 hover:border-orange-400 hover:shadow-xl focus:border-orange-400 focus:outline-none px-3 py-1 sm:w-7/12 sm:m-auto">
            </div>
        </div>
        <!-- Invoice -->
        <div class="w-full bg-brand-gray mt-8 p-4">
            <div class="flex items-center">
                <input id="want-invoice" class="mr-2" type="checkbox">
                <label for="want-invoice" class="text-brand-orange text-lg">
                    Quieres factura
                </label>
            </div>
            <!-- RFC -->
            <div class="font-light text-sm text-gray-600 mt-4 sm:text-center lg:text-justify">
                <label for="invoice-rfc" class="hover:border-grey-900 italic">RFC</label>
                <input type="text" id="invoice-rfc" class="border border-transparent rounded w-full mt-1 bg-white border-gray-400 hover:border-orange-400 hover:shadow-xl focus:border-orange-400 focus:outline-none px-3 py-1 sm:w-7/12 sm:m-auto">
            </div>
            <!-- Type of... is a selector -->
            <div class="font-light text-sm text-gray-600 mt-4 sm:text-center lg:text-justify">
                <label for="invoice-type" class="hover:border-grey-900 italic">Selector</label>
                <input id="invoice-type" type="email" class="border border-transparent rounded w-full mt-1 bg-white border-gray-400 hover:border-orange-400 hover:shadow-xl focus:border-orange-400 focus:outline-none px-3 py-1 sm:w-7/12 sm:m-auto">
            </div>
            <!-- Address -->
            <div class="font-light text-sm text-gray-600 mt-4 sm:text-center lg:text-justify">
                <label for="invoice-address" class="hover:border-grey-900 italic">Dirección</label>
                <input id="address" type="invoice-address" class="border border-transparent rounded w-full mt-1 bg-white border-gray-400 hover:border-orange-400 hover:shadow-xl focus:border-orange-400 focus:outline-none px-3 py-1 sm:w-7/12 sm:m-auto">
            </div>
            <!-- Full name -->
            <div class="font-light text-sm text-gray-600 mt-4 sm:text-center lg:text-justify">
                <label for="invoice-full-name" class="hover:border-grey-900 italic">Nombre completo</label>
                <input id="invoice-full-name" type="text" class="border border-transparent rounded w-full mt-1 bg-white border-gray-400 hover:border-orange-400 hover:shadow-xl focus:border-orange-400 focus:outline-none px-3 py-1 sm:w-7/12 sm:m-auto">
            </div>
            <!-- Phone -->
            <div class="font-light text-sm text-gray-600 mt-4 sm:text-center lg:text-justify">
                <label for="invoice-phone" class="hover:border-grey-900 italic">Teléfono</label>
                <input id="invoice-phone" type="tel" class="border border-transparent rounded w-full mt-1 bg-white border-gray-400 hover:border-orange-400 hover:shadow-xl focus:border-orange-400 focus:outline-none px-3 py-1 sm:w-7/12 sm:m-auto">
            </div>
            <!-- email -->
            <div class="font-light text-sm text-gray-600 mt-4 sm:text-center lg:text-justify">
                <label for="invoice-email" class="hover:border-grey-900 italic">Correo electrónico</label>
                <input id="invoice-email" type="email" class="border border-transparent rounded w-full mt-1 bg-white border-gray-400 hover:border-orange-400 hover:shadow-xl focus:border-orange-400 focus:outline-none px-3 py-1 sm:w-7/12 sm:m-auto">
            </div>
        </div>
        <!-- 'Proceder' Next step -->
        <button class="flex cursor-pointer justify-center font-bold py-2 px-4 rounded w-1/2 m-auto mt-4 block bg-transparent border border-brand-orange text-brand-orange text-bold hover:bg-brand-orange hover:text-white hover:shadow hover:text-white sm:hidden">
            <span>Proceder</span>
        </button>
    </div>
@endsection
