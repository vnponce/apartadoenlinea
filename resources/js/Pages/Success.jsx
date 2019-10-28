import React from 'react';
import Layout from '../Shared/Layout';
import Styled from 'styled-components';

const SuccessImage = Styled.div`
    background-image:
        linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)),
        url('/images/successWithoutBlur.jpg');
    background-size: cover;
`;

function Success(props) {
    return (
        <Layout title="Gracias">
            <section className="mt-24 w-full">
                <span className="block text-brand-orange text-4xl text-center font-title font-semibold">GRACIAS POR TU COMPRA</span>
                <span className="block p-2 text-gray-500 text-base text-center max-w-xl m-auto">¡Tu pan esta en el horno!</span>
            </section>
            {/* image */}
            <SuccessImage className="w-full h-64 bg-cover" />
            <section className="flex w-full px-4 pb-24 bg-brand-gray justify-center">
                <div className="w-full md:w-1/2">
                    {/* Resumen de compra */}
                    <div className="w-full mt-5 uppercase text-brand-orange text-center text-sm tracking-wider font-bold">
                        <span className="text-lg">r</span>esumen de compra:
                    </div>
                    {/* datos de compra */}
                    <section className="flex w-full mt-4 flex-col items-center md:flex-row md:justify-between">
                        {/* Container left */}
                        <div>
                            {/* Name */}
                            <div>
                                <span className="text-sm font-thin">Nombre:</span>
                                <span className="text-sm font-bold mr-1">Santiago Chavez</span>
                            </div>
                            {/* order number */}
                            <div>
                                <span className="text-sm font-thin">Número de pedido:</span>
                                <span className="text-sm font-bold mr-1">00001</span>
                            </div>
                        </div>
                        {/* Container right */}
                        <div>
                            {/* Devliver place */}
                            <div>
                                <span className="text-sm font-thin">Recoger en:</span>
                                <span className="text-sm font-bold mr-1">Zaragoza</span>
                            </div>
                            {/* Date */}
                            <div>
                                <span className="text-sm font-thin">Día:</span>
                                <span className="text-sm font-bold mr-1">13 de mayo el 2019</span>
                            </div>
                            {/* Hour */}
                            <div>
                                <span className="text-sm font-thin">Hora:</span>
                                <span className="text-sm font-bold mr-1">13:00 hrs</span>
                            </div>
                        </div>
                    </section>
                    {/* @Todo: why use pb to get footer not hover content */}
                    {/* separator */}
                    <div className="w-full mt-4 mb-5">
                        <hr className="w-100" />
                    </div>
                    {/* product lists */}
                    <div className="w-full flex flex-col">
                        {/* checkout table */}
                        <div className="flex content-between">
                            <span className="flex-1 text-brand-orange font-thin text-left">Producto</span>
                            <span className="flex-1 text-brand-orange font-thin text-center">Cant.</span>
                            <span className="flex-1 text-brand-orange font-thin text-right">Prec. Unit.</span>
                        </div>
                        {/* products list */}
                        <div className="mb-8">
                            <div className="flex">
                                <div className="flex items-center flex-1 inline-block">
                                    <span className="ml-0 text-lg">Producto</span>
                                </div>
                                <div className="flex flex-1 text-center items-center justify-center">
                                    <span>1</span>
                                </div>
                                <div className="flex flex-1 items-center flex-row-reverse">$ 4.00</div>
                            </div>
                            <div className="text-sm italic text-brand-orange">No incluir gluten ni conservadores</div>
                        </div>
                        <div className="w-full text-center text-regularText text-normal">Total:</div>
                        <div className="w-full text-center text-brand-orange text-2xl">$64.00</div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default Success;
