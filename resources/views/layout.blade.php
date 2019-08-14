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
<main class="container flex flex-wrap w-full p-0 sm:px-2">
    @yield('content')
</main>

@include('partials.footer')
</body>
</html>
