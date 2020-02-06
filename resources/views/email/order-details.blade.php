@component('mail::message')
# GRACIAS POR TU COMPRA

¡Tu pan está en el horno!

## RESUMEN DE COMPRA:

- Nombre: {{ $order->name }} {{ $order->lastname }}
- No. Pedido: {{ $order->uuid }}
- Recoger en: {{ $store }}
- Día: {{ $date }}
- Hora: {{ $order->hour }} hrs.


@component('mail::table')
    | Producto    | Cant.   | Precio  |
    |:------:   |:-----------   |:--------: |
    @foreach($order->products as $product)
        | {{ $product->name }}     | {{ $product->pivot->quantity }} |        {{ '$ '.sprintf('%0.2f', $product->price/100) }} |
    @endforeach
@endcomponent

## Total:
# {{ '$ '.sprintf('%0.2f', $order->total/100) }}

@component('mail::button', ['url' => "https://www.google.com/maps/search/?api=1&query={$order->store->lat},{$order->store->lon}"])
    Ver tienda en el mapa
@endcomponent

Muchas gracias,<br>
{{ config('app.name') }}
[logo]: http://laespecial.test/svg/logo-full.svg

@endcomponent
