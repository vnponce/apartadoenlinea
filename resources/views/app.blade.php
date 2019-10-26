<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<script src='https://unpkg.com/nprogress@0.2.0/nprogress.js'></script>
<link rel='stylesheet' href='https://unpkg.com/nprogress@0.2.0/nprogress.css'/>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Panadería la especial</title>
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
    <script src="{{ mix('/js/app.js') }}" defer></script>

</head>
<body class="flex flex-col font-body relative min-h-screen text-regularText">
    @inertia
</body>
@yield('scripts')
</html>
