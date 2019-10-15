@extends('layout')

@section('title', 'Product page')

@section('content')
    @include('partials.header-description', ['title' => 'PEDIDOS', 'description' => 'Por favor recuerda llenar el formulario para indicarnos en dónde recogeras tu pedido.'])
    <!-- @Todo: why use pb to get footer not hover content -->
    <div class="mt-4 w-full pb-24 ">
        <!-- Order and map container -->
        <div class="px-4 lg:w-1/2 lg:float-left lg:content-end">
            <!-- Order and map aux -->
            <div class="lg:w-3/4 lg:float-right">
                <!-- Order place and hour data -->
                <!-- Sucursal -->
            @include('partials.input', [
                'label' => 'Sucursal',
                'id' => 'store',
                'placeholder' => 'Bravo',
                'value' => 'Bravo'
            ])
            <!-- Día -->
            @include('partials.input', [
                'label' => 'Día',
                'id' => 'date',
                'placeholder' => 'Día',
                'value' => '12 de octubre'
            ])
            <!-- Hora -->
            @include('partials.input', [
                'label' => 'Hora',
                'id' => 'hour',
                'placeholder' => '9:30',
                'value' => '9:30pm'
            ])
                <!-- Map -->
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

        </div>
        <!-- separator -->
        <div class="px-4 mt-8 mb-6 lg:hidden">
            <hr class="w-100">
        </div>
        <div class="px-4 lg:w-1/2 lg:float-left">
            <!-- Order user data -->
            <div class="lg:w-3/4">
                <!-- Name -->
            @include('partials.input', [
                'label' => 'Nombre',
                'id' => 'name',
                'placeholder' => 'Ej. Juan',
                'value' => ''
            ])
            <!-- LastName -->
            @include('partials.input', [
                'label' => 'Apellido',
                'id' => 'lastname',
                'placeholder' => 'Apellido',
                'value' => ''
            ])
            <!-- Phone -->
            @include('partials.input', [
                'label' => 'Teléfono',
                'id' => 'phone',
                'placeholder' => '',
                'value' => '',
                'type' => 'tel'
            ])
            <!-- email -->
                @include('partials.input', [
                    'label' => 'Correo electrónico',
                    'id' => 'email',
                    'placeholder' => '',
                    'value' => '',
                    'type' => 'email'
                ])
            </div>
            <!-- Invoice -->
            <div class="w-full bg-brand-gray mt-8 p-4">
                <div class="flex items-center">
                    <input id="want-invoice" class="mr-2" type="checkbox">
                    <label for="want-invoice" class="text-brand-orange text-lg italic font-thin">
                        ¿Quieres factura?
                    </label>
                </div>
                <!-- RFC -->
            @include('partials.input', [
                'label' => 'RFC',
                'id' => 'invoice-rfc',
            ])
            <!-- Type of... is a selector -->
            @include('partials.input', [
                'label' => 'Selector',
                'id' => 'invoice-type',
            ])
            <!-- Address -->
            @include('partials.input', [
                'label' => 'Dirección',
                'id' => 'invoice-address',
            ])
            <!-- Full name -->
            @include('partials.input', [
                'label' => 'Nombre completo',
                'id' => 'invoice-full-name',
            ])
            <!-- Phone -->
            @include('partials.input', [
                'label' => 'Teléfono',
                'id' => 'invoice-phone',
                'type' => 'tel',
            ])
            <!-- email -->
                @include('partials.input', [
                    'label' => 'Correo electrónico',
                    'id' => 'invoice-email',
                    'type' => 'email',
                ])
            </div>
            <!-- 'Proceder' Next step -->
            <button class="flex cursor-pointer justify-center font-bold py-2 px-4 rounded w-1/2 m-auto mt-4 block bg-transparent border border-brand-orange text-brand-orange text-bold hover:bg-brand-orange hover:text-white hover:shadow hover:text-white">
                <span>Proceder</span>
            </button>
        </div>
    </div>
@endsection
