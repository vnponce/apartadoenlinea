import React from 'react';
import { InertiaLink } from "@inertiajs/inertia-react";

export default function Header() {
    return (
        <header className="md:px-12 bg-brand-orange">
            <div className="flex p-5">
                <div className="flex-2 m-auto h-20 hidden lg:block">
                    <img src="/svg/Logo-Full.svg" className="my-auto h-full" alt="" />
                </div>
                <div className="flex flex-row lg:flex-col flex-1">
                    <nav className="flex-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="cursor-pointer stroke-current text-white lg:hidden feather feather-menu">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                        <ul className="hidden lg:flex items-center justify-end text-white">
                            <li className="md:ml-5"><InertiaLink href="/home">Inicio</InertiaLink></li>
                            <li className="md:ml-5"><a className="block md:inline" href="#">Pan de dulce</a></li>
                            <li className="md:ml-5"><a className="block md:inline" href="#">Pan de sal</a></li>
                            <li className="md:ml-5"><a className="block md:inline" href="#">Bocadillos</a></li>
                            <li className="md:ml-5"><a className="block md:inline" href="#">Repostería</a></li>
                            <li className="md:ml-5"><a className="block md:inline" href="#">Favoritos</a></li>
                        </ul>
                    </nav>
                    <img src="Logo-Short.svg" className="lg:hidden pt-2 h-20 flex-1 flex-grow-0 m-auto" alt="" />
                    <div className="flex-1 flex justify-end lg:items-end">
                            <svg className="h-4 mr-3 fill-current stroke-current text-white" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                <g id="Empty_Tray">
                                    <path
                                        d="M71.22,62.86H66.67L65,61.43a37.85,37.85,0,0,0,8.83-24.29A36.89,36.89,0,1,0,37,74.27a38.3,38.3,0,0,0,24.22-8.85L63,66.85v4.58L91.46,100,100,91.43ZM37,62.86a25.7,25.7,0,1,1,25.65-25.7A25.58,25.58,0,0,1,37,62.86Z"/>
                                </g>
                            </svg>
                        <InertiaLink href="/pedido">
                            <svg className="h-4 fill-current stroke-current text-white"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 44.83">
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
                        </InertiaLink>
                        </div>
                </div>
            </div>
            <div id="header-lines"></div>
        </header>
    )
};
