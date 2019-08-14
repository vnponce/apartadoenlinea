<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">-->
    <link href="/css/app.css" rel="stylesheet">
    <title>Approach Front</title>
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
<body class="flex flex-col font-body">
    <header class="md:px-12">
        <div class="flex p-5">
            <div class="flex-2 m-auto h-20 hidden lg:block">
                <img src="/svg/Logo-Full.svg" class="my-auto h-full" alt="">
            </div>
            <div class="flex flex-row lg:flex-col flex-1">
                <nav class="flex-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="cursor-pointer stroke-current text-white lg:hidden feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    <ul class="hidden lg:flex items-center justify-end text-white">
                        <li class="md:ml-5"><a class="block md:inline" href="#">Pan de dulce</a></li>
                        <li class="md:ml-5"><a class="block md:inline" href="#">Pan de sal</a></li>
                        <li class="md:ml-5"><a class="block md:inline" href="#">Bocadillos</a></li>
                        <li class="md:ml-5"><a class="block md:inline" href="#">Repostería</a></li>
                        <li class="md:ml-5"><a class="block md:inline" href="#">Favoritos</a></li>
                    </ul>
                </nav>
                <img src="Logo-Short.svg" class="lg:hidden pt-2 h-20 flex-1 flex-grow-0 m-auto" alt="">
                <div class="flex-1 flex justify-end lg:items-end">
                    <svg class="h-4 mr-3 fill-current stroke-current text-white" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                        <g id="Empty_Tray">
                            <path
                                d="M71.22,62.86H66.67L65,61.43a37.85,37.85,0,0,0,8.83-24.29A36.89,36.89,0,1,0,37,74.27a38.3,38.3,0,0,0,24.22-8.85L63,66.85v4.58L91.46,100,100,91.43ZM37,62.86a25.7,25.7,0,1,1,25.65-25.7A25.58,25.58,0,0,1,37,62.86Z"/>
                        </g>
                    </svg>
                    <svg class="h-4 fill-current stroke-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 44.83">
                        <g id="Empty_Tray">
                            <polygon id="Tray" points="0 34.83 100 34.83 89.37 44.83 10.59 44.83 0 34.83"/>
                            <g id="Empty">
                                <path
                                    d="M27.33,10.15a2.51,2.51,0,0,1,3.21,1.5L35.78,26a2.42,2.42,0,0,1-1.41,3.17,2.57,2.57,0,0,1-3.29-1.46L25.84,13.36A2.51,2.51,0,0,1,27.33,10.15Z"/>
                                <path
                                    d="M72.64,10.15a2.51,2.51,0,0,1,1.49,3.21L68.92,27.75a2.43,2.43,0,0,1-3.12,1.53A2.58,2.58,0,0,1,64.22,26l5.21-14.39A2.51,2.51,0,0,1,72.64,10.15Z"/>
                                <path
                                    d="M50,0a2.5,2.5,0,0,1,2.5,2.5v25A2.43,2.43,0,0,1,50.1,30a2.58,2.58,0,0,1-2.59-2.5V2.5A2.5,2.5,0,0,1,50,0Z"/>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
        <!-- <div class="flex pb-1">
            <img src="Logo-Short.svg" class="h-20 flex-1" alt="">
        </div> -->
        <div id="header-lines"></div>
    </header>
    <section class="mt-24">
        <span class="block text-4xl text-center font-title font-semibold">PANADERíA</span>
        <span class="block p-2 text-gray-500 text-base text-center max-w-xl m-auto">Bienvenido a Panadería la Especial donde encotnrarás la mejor calidad y servicio</span>
    </section>
    <section class="flex m-auto container">
        <div class="w-full icons p-4">
            <a href="#" class="inline-block p-4 h-40 w-1/2 float-left md:w-1/4 md:float-left opacity-75 hover:opacity-100">
                <svg class="h-20 m-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><style>.cls-1{fill:#686868;}</style></defs><title>Pan-dulce</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M50,0A50,50,0,0,0,5.56,27.07a5.41,5.41,0,0,0,2.77.71c3.49,0,5.34-2.67,8.06-7s6-9.64,12.76-9.64,10.1,5.35,12.78,9.64,4.57,7,8.06,7,5.34-2.67,8.07-7,6-9.64,12.76-9.64,10.1,5.35,12.78,9.64,4.57,7,8.07,7a5.41,5.41,0,0,0,2.77-.71A50,50,0,0,0,50,0ZM96.72,32.15a10.88,10.88,0,0,1-5,1.18c-6.75,0-10.1-5.34-12.78-9.64s-4.57-7-8.07-7-5.33,2.66-8.06,7-6,9.64-12.77,9.64S39.9,28,37.22,23.69s-4.57-7-8.07-7-5.33,2.66-8,7-6,9.64-12.77,9.64a10.88,10.88,0,0,1-5.05-1.18,50,50,0,1,0,93.44,0ZM50,68.06a12.5,12.5,0,1,1,12.5-12.5A12.5,12.5,0,0,1,50,68.06Z"/></g></g></svg>
                <div class="icon-menu-category-text first-letter-bigger">Pan de Dulce</div>
            </a>
            <a href="#" class="inline-block p-4 h-40 w-1/2 float-right md:w-1/4 md:float-left opacity-75 hover:opacity-100">
                <svg class="h-20 m-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 133.53 100"><defs><style>.cls-1{fill:#686868;}</style></defs><title>Pan-sal</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path id="Bread" class="cls-1" d="M131.29,79.46a27.89,27.89,0,0,0-1.84-2.24,97.75,97.75,0,0,0-29.71-22.3V67.08a6.59,6.59,0,0,1-13.17,0V49.94a76.65,76.65,0,0,0-13.22-2.17V67.08a6.59,6.59,0,0,1-13.17,0V47.77A76.23,76.23,0,0,0,47,49.93V67.08a6.59,6.59,0,0,1-13.17,0V54.89A97.81,97.81,0,0,0,4.08,77.22a27.89,27.89,0,0,0-1.84,2.24A12.81,12.81,0,0,0,0,86.83,13.21,13.21,0,0,0,13.17,100H120.36a13.21,13.21,0,0,0,13.17-13.17A12.81,12.81,0,0,0,131.29,79.46Z"/><circle class="cls-1" cx="66.86" cy="29.17" r="4.17"/><circle class="cls-1" cx="58.53" cy="16.67" r="4.17"/><circle class="cls-1" cx="66.86" cy="4.17" r="4.17"/></g></g></svg>
                <div class="icon-menu-category-text">Pan de sal</div>
            </a>
            <a href="#" class="inline-block p-4 h-40 w-1/2 float-left md:w-1/4 md:float-left opacity-75 hover:opacity-100">
                <svg class="h-20 m-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 114.8 100"><defs><style>.cls-1{fill:#686868;}</style></defs><title>Bocadillos</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M57.4,55.82c-25.53,0-47.17-6.4-54.62-15.24A1.59,1.59,0,0,0,0,41.65V90.21A10,10,0,0,0,10.2,100h94.4a10,10,0,0,0,10.2-9.79V41.65A1.59,1.59,0,0,0,112,40.58C104.57,49.42,82.93,55.82,57.4,55.82Z"/><path class="cls-1" d="M80.17,26.69c0-.07,0-.14,0-.2A13.2,13.2,0,0,0,70.6,13.82c0-.19.06-.38.06-.58a13.24,13.24,0,1,0-26.48,0c0,.2,0,.38.06.57a13.2,13.2,0,0,0-9.61,12.68c0,.06,0,.13,0,.2C19.56,29.47,11.29,34.5,10.24,37,11.73,40.5,27.79,49.22,57.4,49.22S103.07,40.5,104.56,37C103.51,34.5,95.24,29.47,80.17,26.69Z"/></g></g></svg>
                <div class="icon-menu-category-text">Bocadillos</div>
            </a>
            <a href="#" class="inline-block p-4 h-40 w-1/2 float-right md:w-1/4 md:float-left opacity-75 hover:opacity-100">
                <svg class="h-20 m-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 89.99 100"><defs><style>.cls-1{fill:#686868;}</style></defs><title>Reposteria</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M45,57.46c-7.82,0-14.9-3.73-18.06-9.52l-2.57-4.72-4.93,2.14a16,16,0,0,1-6.4,1.31c-4.54,0-7.95-1.13-10.14-3.35C.51,40.86,0,37.43,0,35,0,20.68,16,0,45,0S90,20.6,90,34.84c0,2.48-.51,6-3,8.46-2.18,2.23-5.56,3.37-10,3.37a15.9,15.9,0,0,1-6.4-1.31l-4.94-2.14-2.57,4.72C59.94,53.73,52.85,57.46,45,57.46Z"/><path class="cls-1" d="M77,52.36a22.13,22.13,0,0,1-8.75-1.79C64.21,58,55.35,63.16,45,63.16S25.86,58,21.82,50.57a22.08,22.08,0,0,1-8.74,1.79,22.86,22.86,0,0,1-10-2,1.46,1.46,0,0,0-2,1.88L18.76,96.3a5.87,5.87,0,0,0,5.46,3.7H65.85a5.87,5.87,0,0,0,5.46-3.7L89,52.15a1.46,1.46,0,0,0-2-1.87A22.42,22.42,0,0,1,77,52.36Z"/></g></g></svg>
                <div class="icon-menu-category-text">Repostería</div>
            </a>
        </div>
    </section>
    <hr class="w-1/2 mb-5">
    <main class="flex flex-wrap w-full p-0 sm:p-2">
        <div class="container bread-card">
            <div class="flex-1 flex sm:bg-gray-100">
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
        <div class="container bread-card">
            <div class="flex-1 flex sm:bg-gray-100">
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
        <div class="container bread-card">
            <div class="flex-1 flex sm:bg-gray-100">
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
        <div class="container bread-card">
            <div class="flex-1 flex sm:bg-gray-100">
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
        <div class="container bread-card">
            <div class="flex-1 flex sm:bg-gray-100">
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
        <div class="container bread-card">
            <div class="flex-1 flex sm:bg-gray-100">
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
    <footer class="flex h-16">
        <span class="flex-1 m-auto text-center text-white text-xs">Política de Privacidad</span>
        <img src="Logo-Short.svg" class="h-10 flex-1 flex-grow-0 m-auto" alt="">
        <span class="flex-1 m-auto text-center text-white text-xs">Términos y condiciones</span>
    </footer>
</body>
</html>
