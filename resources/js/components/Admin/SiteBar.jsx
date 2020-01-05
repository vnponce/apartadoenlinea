import React from 'react';
import {InertiaLink} from "@inertiajs/inertia-react";

export default function SiteBar(props) {
    return (
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
                {/*
                <li className="my-2 md:my-0 ">
                    <InertiaLink href="/admin/orders"
                                 className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
                        <i className="fas fa-tasks fa-fw mr-3"/><span
                        className="w-full inline-block pb-1 md:pb-0 text-sm">Pedidos</span>
                    </InertiaLink>
                </li>
                */}
                <li className="my-2 md:my-0 ">
                    <InertiaLink href="/admin/products"
                                 className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
                        <i className="fas fa-bread-slice fa-fw mr-3"/><span
                        className="w-full inline-block pb-1 md:pb-0 text-sm">Pan</span>
                    </InertiaLink>
                </li>
                <li className="my-2 md:my-0">
                    <InertiaLink href="/admin/stores"
                                 className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
                        <i className="fa fa-store fa-fw mr-3"/><span
                        className="w-full inline-block pb-1 md:pb-0 text-sm">Tiendas</span>
                    </InertiaLink>
                </li>
                {/*
                <li className="my-2 md:my-0">
                    <InertiaLink href="/admin/settings"
                                 className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
                        <i className="fas fa-cogs fa-fw mr-3 text-indigo-400"/><span
                        className="w-full inline-block pb-1 md:pb-0 text-sm">Configuración</span>
                    </InertiaLink>
                </li>
                */}
                <li className="my-2 md:my-0">
                    <InertiaLink href="/admin/users"
                                 className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
                        <i className="fa fa-users fa-fw mr-3"/><span
                        className="w-full inline-block pb-1 md:pb-0 text-sm">Usuarios</span>
                    </InertiaLink>
                </li>
            </ul>

        </div>
    )
};
