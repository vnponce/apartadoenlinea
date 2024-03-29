<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<script src='https://unpkg.com/nprogress@0.2.0/nprogress.js'></script>
<link rel='stylesheet' href='https://unpkg.com/nprogress@0.2.0/nprogress.css'/>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Panadería la especial</title>
    <link href="/css/app.css" rel="stylesheet">

</head>
<body class="flex flex-col font-body relative min-h-screen text-regularText">
@include('partials.header')
<main id="content-wrapper" class="flex flex-wrap w-full p-0">
    @yield('content')
</main>

@include('partials.footer')
</body>
@yield('scripts')
</html>
