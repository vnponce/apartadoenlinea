<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Panadería la especial</title>
    <link href="/css/app.css" rel="stylesheet">
    <style>
        header, footer {
            background-color: #ef7d07;
        }
        img > svg {
            fill: white;
        }
        #header-lines {
            position: absolute;
            left: 0px;
            width: 100%;
        }
        #header-lines::before, #header-lines::after {
            background-color: rgb(253, 235, 26);
            margin: 10px 0px 10px auto;
            content: "";
            width: 80%;
            height: 5px;
            display: block;
        }
        #header-lines::after {
            background-color: rgb(8, 122, 53);
            margin: 10px auto 10px 0px;
        }
    </style>

</head>
<body class="flex flex-col font-body relative min-h-screen">
@include('partials.header')
<svg class="w-8 h-8 mt-12 mb-4 ml-4 text-lg cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
<main class="container flex flex-wrap w-full p-0 sm:px-2">
    @yield('content')
</main>

@include('partials.footer')
</body>
</html>
