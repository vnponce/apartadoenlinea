import { InertiaLink } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from 'react';
import { usePage } from "@inertiajs/inertia-react";
import moment from "moment";
import styled from "styled-components";

const Wrapper = styled.div`
    .nunito {
        font-family: 'nunito', font-sans;
    }
    
    .border-b-1 {
        border-bottom-width: 1px;
    }
    
    .border-l-1 {
        border-left-width: 1px;
    }
    
    hover\\:border-none:hover {
        border-style: none;
    }
    
    #sidebar {
        transition: ease-in-out all .3s;
        z-index: 9999;
    }
    
    #sidebar span {
        opacity: 0;
        position: absolute;
        transition: ease-in-out all .1s;
    }
    
    #sidebar:hover {
        width: 150px;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        /*shadow-2xl*/
    }
    
    #sidebar:hover span {
        opacity: 1;
    }
`;

export default function Layout({ title, children }) {
    moment.locale('es');
    const [userMenuDiv, setUserMenuDiv] = useState(null);
    const [userMenu, setUserMenu] = useState(null);

    const { flash } = usePage();
    useEffect(() => {
        document.title = title;
        console.log('flash =>', flash);
    }, [title]);
    useEffect(() => {
        setUserMenuDiv(document.getElementById("userMenu"));
        setUserMenu(document.getElementById("userButton"));
    }, []);

    /**
     * JS
     * */
    /*Toggle dropdown list*/
    /*https://gist.github.com/slavapas/593e8e50cf4cc16ac972afcbad4f70c8*/
    document.onclick = check;
    function check(e) {
        const target = (e && e.target) || (event && event.srcElement);
        //User Menu
        if (!checkParent(target, userMenuDiv)) {
            // click NOT on the menu
            if (checkParent(target, userMenu)) {
                // click on the link
                if (userMenuDiv.classList.contains("invisible")) {
                    userMenuDiv.classList.remove("invisible");
                } else {
                    userMenuDiv.classList.add("invisible");
                }
            } else {
                // click both outside link and outside menu, hide menu
                userMenuDiv.classList.add("invisible");
            }
        }
    }
    function checkParent(t, elm) {
        while (t.parentNode) {
            if (t === elm) {
                return true;
            }
            t = t.parentNode;
        }
        return false;
    }
    return (
        <Wrapper>
            {/* Custom styles for this template*/}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css"
                  integrity="sha256-46qynGAkLSFpVbEBog43gvNhfrOj+BmwXdxFgVK/Kvc=" crossOrigin="anonymous"/>
            <link href="https://fonts.googleapis.com/css?family=Nunito:400,700,800" rel="stylesheet" />
            <body className="flex h-screen bg-gray-100 font-sans">

            {/* Side bar*/}
            <div id="sidebar"
                 className="h-screen w-16 menu bg-white text-white px-4 flex items-center nunito static fixed shadow">

                <ul className="list-reset ">
                    <li className="my-2 md:my-0">
                        <InertiaLink href="/admin"
                           className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
                            <i className="fas fa-home fa-fw mr-3"/><span
                            className="w-full inline-block pb-1 md:pb-0 text-sm">Panel</span>
                        </InertiaLink>
                    </li>
                    <li className="my-2 md:my-0 ">
                        <InertiaLink href="/admin/orders"
                           className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
                            <i className="fas fa-tasks fa-fw mr-3"/><span
                            className="w-full inline-block pb-1 md:pb-0 text-sm">Pedidos</span>
                        </InertiaLink>
                    </li>
                    <li className="my-2 md:my-0">
                        <InertiaLink href="/admin/stores"
                           className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
                            <i className="fa fa-store fa-fw mr-3"/><span
                            className="w-full inline-block pb-1 md:pb-0 text-sm">Tiendas</span>
                        </InertiaLink>
                    </li>
                    <li className="my-2 md:my-0">
                        <InertiaLink href="/admin/settings"
                           className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
                            <i className="fas fa-cogs fa-fw mr-3 text-indigo-400"/><span
                            className="w-full inline-block pb-1 md:pb-0 text-sm">Configuración</span>
                        </InertiaLink>
                    </li>
                    <li className="my-2 md:my-0">
                        <InertiaLink href="/admin/users"
                           className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
                            <i className="fa fa-users fa-fw mr-3"/><span
                            className="w-full inline-block pb-1 md:pb-0 text-sm">Usuarios</span>
                        </InertiaLink>
                    </li>
                </ul>

            </div>

            <div className="flex flex-row flex-wrap flex-1 flex-grow content-start pl-16">

                <div className="h-40 lg:h-20 w-full flex flex-wrap">
                    {/*Select*/}
                    <nav id="header"
                         className="bg-gray-200 w-full lg:max-w-sm flex items-center border-b-1 border-gray-300 order-2 lg:order-1">

                        <div className="px-2 w-full">
                            <select name=""
                                    className="bg-gray-300 border-2 border-gray-200 rounded-full w-full py-3 px-4 text-gray-500 font-bold leading-tight focus:outline-none focus:bg-white focus:shadow-md"
                                    id="form-field2">
                                <option value="Default">default</option>
                                <option value="A">report a</option>
                                <option value="B">report b</option>
                                <option value="C">report c</option>
                            </select>
                        </div>

                    </nav>
                    <nav id="header1"
                         className="bg-gray-100 w-auto flex-1 border-b-1 border-gray-300 order-1 lg:order-2">

                        <div className="flex h-full justify-between items-center">

                            {/*Search*/}
                            <div className="relative w-full max-w-3xl px-6">
                                <div className="absolute h-10 mt-1 left-0 top-0 flex items-center pl-10">
                                    <svg className="h-4 w-4 fill-current text-gray-600"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path
                                            d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
                                    </svg>
                                </div>

                                <input id="search-toggle" type="search" placeholder="search"
                                       className="block w-full bg-gray-200 focus:outline-none focus:bg-white focus:shadow-md text-gray-700 font-bold rounded-full pl-12 pr-4 py-3"
                                       onKeyUp="updateSearchResults(this.value);" />

                            </div>
                            {/* / Search*/}

                            {/*Menu*/}

                            <div className="flex relative inline-block pr-6">

                                <div className="relative text-sm">
                                    <button id="userButton" className="flex items-center focus:outline-none mr-3">
                                        <img className="w-8 h-8 rounded-full mr-4" src="http://i.pravatar.cc/300"
                                             alt="Avatar of User" />
                                             <span
                                                className="hidden md:inline-block">Hi, User
                                             </span>
                                            <svg className="pl-2 h-2" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                 viewBox="0 0 129 129"
                                                 enableBackground="new 0 0 129 129">
                                                <g>
                                                    <path
                                                        d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/>
                                                </g>
                                            </svg>
                                    </button>
                                    <div id="userMenu"
                                         className="bg-white nunito rounded shadow-md mt-2 absolute mt-12 top-0 right-0 min-w-full overflow-auto z-30 invisible">
                                        <ul className="list-reset">
                                            <li><a href="#"
                                                   className="px-4 py-2 block text-gray-900 hover:bg-indigo-400 hover:text-white no-underline hover:no-underline">My
                                                account</a></li>
                                            <li><a href="#"
                                                   className="px-4 py-2 block text-gray-900 hover:bg-indigo-400 hover:text-white no-underline hover:no-underline">Notifications</a>
                                            </li>
                                            <li>
                                                <hr className="border-t mx-2 border-gray-400" />
                                            </li>
                                            <li><a href="#"
                                                   className="px-4 py-2 block text-gray-900 hover:bg-indigo-400 hover:text-white no-underline hover:no-underline">Logout</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>

                            {/* / Menu */}

                        </div>

                    </nav>
                </div>

                {/*Dash Content */}
                <div id="dash-content"
                     className="bg-gray-200 py-6 lg:py-0 w-full lg:max-w-sm flex flex-wrap content-start">

                    <div className="w-1/2 lg:w-full">
                        <div
                            className="border-2 border-gray-400 border-dashed hover:border-transparent hover:bg-white hover:shadow-xl rounded p-6 m-2 md:mx-10 md:my-6">
                            <div className="flex flex-col items-center">
                                <div className="flex-shrink pr-4">
                                    <div className="rounded-full p-3 bg-gray-300"><i
                                        className="fa fa-wallet fa-fw fa-inverse text-indigo-500"/></div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-3xl">$3249 <span className="text-green-500"><i
                                        className="fas fa-caret-up"/></span></h3>
                                    <h5 className="font-bold text-gray-500">Total Revenue</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/2 lg:w-full">
                        <div
                            className="border-2 border-gray-400 border-dashed hover:border-transparent hover:bg-white hover:shadow-xl rounded p-6 m-2 md:mx-10 md:my-6">
                            <div className="flex flex-col items-center">
                                <div className="flex-shrink pr-4">
                                    <div className="rounded-full p-3 bg-gray-300"><i
                                        className="fas fa-users fa-fw fa-inverse text-indigo-500"/></div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-3xl">249 <span className="text-orange-500"><i
                                        className="fas fa-exchange-alt"/></span></h3>
                                    <h5 className="font-bold text-gray-500">Total Users</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/2 lg:w-full">
                        <div
                            className="border-2 border-gray-400 border-dashed hover:border-transparent hover:bg-white hover:shadow-xl rounded p-6 m-2 md:mx-10 md:my-6">
                            <div className="flex flex-col items-center">
                                <div className="flex-shrink pr-4">
                                    <div className="rounded-full p-3 bg-gray-300"><i
                                        className="fas fa-user-plus fa-fw fa-inverse text-indigo-500"/></div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-3xl">2 <span className="text-yellow-600"><i
                                        className="fas fa-caret-up"/></span></h3>
                                    <h5 className="font-bold text-gray-500">New Users</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/2 lg:w-full">
                        <div
                            className="border-2 border-gray-400 border-dashed hover:border-transparent hover:bg-white hover:shadow-xl rounded p-6 m-2 md:mx-10 md:my-6">
                            <div className="flex flex-col items-center">
                                <div className="flex-shrink pr-4">
                                    <div className="rounded-full p-3 bg-gray-300"><i
                                        className="fas fa-server fa-fw fa-inverse text-indigo-500"/></div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-3xl">152 days</h3>
                                    <h5 className="font-bold text-gray-500">Server Uptime</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                { children }
            </div>
            </body>
        </Wrapper>
    );
}
