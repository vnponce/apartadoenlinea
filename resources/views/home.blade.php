@extends('layout-home')

@section('title', 'Page Title')

@section('content')
    <main class="flex flex-wrap w-full p-0 pb-16 sm:px-2">
        <div class="container bread-card">
            <div class="flex-1 flex sm:bg-brand-gray">
                <!-- <img class="m-auto w-full object-cover align-middle sm:h-64" src="https://via.placeholder.com/125x110" alt="Banderilla mini"> -->
                <img class="m-auto w-full object-cover align-middle sm:h-64" src="/breads/Cuernito.png" alt="Banderilla mini">
            </div>
            <div class="flex-1 flex flex-col h-32 overflow-hidden sm:mt-4 sm:h-24">
                <div class="flex-1 sm:text-center text-gray-600 font-medium uppercase">
                    <div class="first-letter-bigger">Banderilla mini</div>
                    <div class="text-lg">
                        <span>$11.50</span>
                        <span class="text-xs align-top">p/p</span>
                    </div>
                </div>
                <div class="flex-1 truncate text-gray-500 text-base">Pan de  pasta hojaldrada, con forma de una barra larga y aplanada barnizada con clara de huevo y azúcar. ¡Buenísimas para remojar en chocolate!</div>
            </div>
        </div>
    </main>
@stop
