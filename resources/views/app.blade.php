<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" translate="no">
{{--<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">--}}
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css"
      integrity="sha256-46qynGAkLSFpVbEBog43gvNhfrOj+BmwXdxFgVK/Kvc=" crossOrigin="anonymous"/>
<!--Rye font -->
<link href="https://fonts.googleapis.com/css2?family=Rye&display=swap" rel="stylesheet">
<!--Christmas font -->
<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
<!-- Filepond to upload files -->
<link rel='stylesheet' href='https://unpkg.com/filepond@4.11.0/dist/filepond.min.css' />
<link rel='stylesheet' href='https://unpkg.com/filepond-plugin-image-preview@4.6.1/dist/filepond-plugin-image-preview.css' />
<!-- Sweet Alert 2 -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/8.11.8/sweetalert2.min.css" integrity="sha256-2bAj1LMT7CXUYUwuEnqqooPb1W0Sw0uKMsqNH0HwMa4=" crossorigin="anonymous" />
<!-- React dates picker Airbnb -->
<link rel='stylesheet' href='https://unpkg.com/react-dates@21.8.0/lib/css/_datepicker.css' />
<!--
<script src='https://unpkg.com/nprogress@0.2.0/nprogress.js'></script>
<link rel='stylesheet' href='https://unpkg.com/nprogress@0.2.0/nprogress.css'/>
<script
    src="https://code.jquery.com/jquery-3.4.1.min.js"
    integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
    crossorigin="anonymous"></script>
<script
    src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"
    integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="
    crossorigin="anonymous"></script>
    -->
<script src="{{ asset('/js/jquery.js') }}"></script>
<script src="{{ asset('/js/jquery-ui.js') }}"></script>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Panadería la especial</title>
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
    <script src="{{ mix('/js/app.js') }}" defer></script>
    <link rel="icon" type="image/png" href="/favicon/Favicon01.svg" />

</head>
<body class="flex flex-col font-body relative min-h-screen text-regularText">
    @inertia
</body>
@yield('scripts')
</html>
