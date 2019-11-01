import React from 'react';
import Layout from '../Shared/Layout';
import HeaderDescription from "../components/HeaderDescription";
import {InertiaLink} from "@inertiajs/inertia-react";
import ProductListElement from "../components/ProductListElement";
import { usePage } from "@inertiajs/inertia-react";


function Checkout(props) {
    const { cart: { content }, subtotal } = usePage();
    console.log('content =>', content, subtotal);
    return (
        <Layout title="Mi charola">
            <HeaderDescription title="MI CHAROLA" description="Esto tiene tu charola" />
            <div className="flex justify-center w-full pb-24 px-8 content-center">
                <div className="md:w-1/2">
                    {/* separator */}
                    <div className="w-full mt-8 px-2 mb-6">
                        <hr className="w-100" />
                    </div>
                    {/* checkout container */}
                    <div className="w-full flex flex-col">
                        {/* checkout table */}
                        <div className="flex content-between">
                            <span className="flex-1 text-brand-orange font-thin text-left">Producto</span>
                            <span className="flex-1 text-brand-orange font-thin text-center">Cant.</span>
                            <span className="flex-1 text-brand-orange font-thin text-right">Prec. Unit.</span>
                        </div>
                        {/* products list */}
                        { Object.keys(content).sort().map(product => <ProductListElement product={content[product]}/>)}
                        <div className="w-full text-center text-regularText text-normal">Total:</div>
                        <div className="w-full text-center text-regularText text-2xl">${subtotal}</div>
                    </div>
                    {/* separator */}
                    <div className="w-full mt-2 px-2 mb-6">
                        <hr className="w-100" />
                    </div>
                    {/* 'Proceder' Next step */}
                    <div>
                        {/* 'Proceder' Next step */}
                        <div className="flex items-center justify-center">
                            <input id="checkout-agree" className="mr-2" type="checkbox" />
                                <label for="checkout-agree" className="text-center text-gray-500 text-base italic">
                                    ¿El contenido de tu compra es el correcto?
                                </label>
                        </div>
                        {/* Paypal button or levantar pedido si es usuario */}
                        <InertiaLink href="/listo" className="flex cursor-pointer justify-center font-bold py-2 px-4 rounded w-full md:w-1/2 m-auto mt-4 block bg-transparent border border-brand-orange text-brand-orange text-bold hover:bg-brand-orange hover:text-white hover:shadow hover:text-white">
                            <span>Paypal</span>
                        </InertiaLink>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Checkout;
