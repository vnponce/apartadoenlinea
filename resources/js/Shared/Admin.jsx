import { InertiaLink } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from 'react';
import { usePage } from "@inertiajs/inertia-react";
import moment from "moment";
import styled from "styled-components";
import SideBar from '../components/Admin/SiteBar';
import UserMenu from "../components/Admin/UserMenu";


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

    // #dash-content {
    //     height: calc( 100vh - 80px );
    //     min-height: unset;
    //     overflow: scroll;
    // }

    #aside-info {
        height: calc( 100vh - 80px );
        min-height: unset;
        overflow: scroll;
    }
`;

export default function Layout({ title, children }) {
    moment.locale('es');
    const [userMenuDiv, setUserMenuDiv] = useState(null);
    const [userMenu, setUserMenu] = useState(null);

    const { flash, auth: { user } } = usePage();
    useEffect(() => {
        document.title = title;
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
            {/*<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css"*/}
            {/*      integrity="sha256-46qynGAkLSFpVbEBog43gvNhfrOj+BmwXdxFgVK/Kvc=" crossOrigin="anonymous"/>*/}
            <link href="https://fonts.googleapis.com/css?family=Nunito:400,700,800" rel="stylesheet" />
            <div className="flex h-screen bg-gray-100 font-sans">

            {/* Side bar*/}
            <SideBar />

            <div className="w-full flex flex-row flex-wrap flex-1 flex-grow content-start pl-16">

                <div className="h-20 w-full flex flex-wrap">
                    <section id="logo"
                         className="hidden lg:flex bg-gray-200 w-full lg:max-w-sm flex items-center border-b-1 border-gray-300 order-2 lg:order-1">
                        <InertiaLink href="/" className="flex-2 m-auto h-16 hidden lg:block">
                            <img src="/svg/Logo-Full.svg" className="my-auto h-full" alt=""/>
                        </InertiaLink>
                        {/*Select
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
                    */}

                    </section>
                    <nav id="header1"
                         className="bg-gray-100 w-auto flex-1 border-b-1 border-gray-300 order-1 lg:order-2">

                        <div className="flex h-full justify-between items-center">

                            {/*Search*/}
                            <div className="relative w-full max-w-3xl px-6">
                                <InertiaLink href="/" className="block lg:hidden max-w-sm flex-1 m-auto h-16">
                                    <img src="/svg/Logo-Full.svg" className="my-auto h-full" alt=""/>
                                </InertiaLink>
                                {/*
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
                                */}
                            </div>
                            {/* / Search*/}

                            {/*Menu*/}
                            <UserMenu user={user} />
                            {/* / Menu */}

                        </div>

                    </nav>
                </div>

                { children }
            </div>
            </div>
        </Wrapper>
    );
}
