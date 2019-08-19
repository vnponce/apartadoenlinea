<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Panadería la especial</title>
    <link href="/css/app.css" rel="stylesheet">

</head>
<body class="flex flex-col font-body relative min-h-screen text-regularText">
@include('partials.header')
@include('partials.header-description')
@include('partials.menu-icons')
<hr class="w-1/2 mb-5">
@yield('content')

@include('partials.footer')
</body>
</html>
