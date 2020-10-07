import React, { useState, useEffect } from 'react';
import Layout from '../Shared/Layout';
import HeaderDescription from "../components/HeaderDescription";
import ProductListElement from "../components/ProductListElement";
import { usePage } from "@inertiajs/inertia-react";
import {Inertia} from "@inertiajs/inertia";
import Loading from '../components/Loading';

function Checkout(props) {
    const { cart: { content }, subtotal, auth } = usePage();
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [loading, setLoading] = useState(false);
    const createOrder = () => {
        setLoading(true);
        Inertia.post('/pedido', )
    };
    useEffect(() => {
        if(content.length <= 0) {
            Inertia.visit('/');
        }
    });
    return (
        <Layout title="Mi charola">
            { loading && <Loading /> }
            <HeaderDescription title="MI CHAROLA" description="Esto tiene tu charola" />
            <div className="flex justify-center w-full pb-24 px-8 content-center">
                <div className="md:w-1/2">
                    {/* separator */}
                    <div className="w-full mt-8 px-2 mb-6">
                        <hr className="w-100" />
                    </div>
                    {/* checkout container */}
                    <div className="w-full flex flex-col">
                        {/* checkout table  */}
                        <div className="flex content-between">
                            <span className="flex-1 text-brand-orange font-thin text-left">Producto</span>
                            <span className="flex-1 text-brand-orange font-thin text-center">Cant.</span>
                            <span className="flex-1 text-brand-orange font-thin text-right">Prec. Unit.</span>
                        </div>
                        {/* products list */}
                        { Object.keys(content).sort().filter(product => content[product].id !== 'orderDetailsId').map(product => <ProductListElement product={content[product]}/>)}
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
                        <div className="flex justify-center">
                            <input id="checkout-agree" className="w-10 h-10 cursor-pointer mr-2 mt-1" type="checkbox" value={agreeTerms} onChange={() => setAgreeTerms(!agreeTerms)}/>
                                <label htmlFor="checkout-agree" className="cursor-pointer text-center text-gray-500 text-base italic">
                                    ¿El contenido de tu compra es el correcto?, recuerda que no hay cambios, devoluciones ni modificaciones.
                                </label>
                        </div>
                        {auth && auth.user && (
                            <button
                                disabled={!agreeTerms}
                                onClick={createOrder}
                                className="flex cursor-pointer justify-center font-bold py-2 px-4 rounded w-full md:w-1/2 m-auto mt-4 block bg-transparent border border-brand-orange text-brand-orange text-bold hover:bg-brand-orange hover:text-white hover:shadow hover:text-white disabled:opacity-75">
                                <span>Crear pedido</span>
                            </button>
                        )}
                        {/* Paypal button or levantar pedido si es usuario */}
                        {!auth.user && (
                            <button
                                disabled={!agreeTerms}
                                onClick={createOrder}
                                className="flex cursor-pointer justify-center font-bold py-2 px-4 rounded w-full md:w-1/2 m-auto mt-4 block bg-transparent border border-brand-orange text-brand-orange text-bold hover:bg-brand-orange hover:text-white hover:shadow hover:text-white disabled:opacity-75">
                                <span>Paypal</span>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Checkout;
