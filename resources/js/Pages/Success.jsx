import React, { useEffect, useState } from 'react';
import Layout from '../Shared/Layout';
import Styled from 'styled-components';
import moment from 'moment';
import ProductListElement from "../components/ProductListElement";
import Confetti from "react-dom-confetti";
import Map from "../components/Map";
import {Inertia} from "@inertiajs/inertia";

const SuccessImage = Styled.div`
    background-image:
        linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)),
        url('/images/successWithoutBlur.jpg');
    background-size: cover;
`;

const config = {
    angle: "50",
    spread: "107",
    startVelocity: "93",
    elementCount: "111",
    dragFriction: 0.1,
    duration: "6060",
    stagger: "0",
    width: "12px",
    height: "12px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};

function Success(props) {
    const [triggerConfetti, setTriggerConfeti] = useState(false);
    const { order, successTotalCart: subtotal, successCart: content, stores } = props;
    const store = stores.find(store => store.id === order.store_id);

    const toggleTriggerConfeti = () => setTriggerConfeti(!triggerConfetti);
    useEffect(() => {
        setTimeout(toggleTriggerConfeti, 500);
        //eslint-disable-next-line
        return () => {
            // to avoid return to charola when is success page.
            Inertia.visit('/');
        }
    }, []);
    return (
        <Layout title="Gracias">
            <Confetti active={triggerConfetti} config={ config }/>
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
                    <section className="flex w-full mt-4 flex-col items-center md:flex-row md:justify-around">
                        {/* Container left */}
                        <div>
                            {/* Name */}
                            <div>
                                <span className="text-sm font-thin">Nombre:</span>
                                <span className="text-sm font-bold ml-1">{ order.name } { order.lastname }</span>
                            </div>
                            {/* order number */}
                            <div>
                                <span className="text-sm font-thin">Número de pedido:</span>
                                <span className="text-sm font-bold ml-1">{ order.uuid }</span>
                            </div>
                        </div>
                        {/* Container right */}
                        <div>
                            {/* Devliver place */}
                            <div>
                                <span className="text-sm font-thin">Recoger en:</span>
                                <span className="text-sm font-bold ml-1">{ store.name }</span>
                            </div>
                            {/* Date */}
                            <div>
                                <span className="text-sm font-thin">Día:</span>
                                <span className="text-sm font-bold ml-1">{ moment(order.date).format('D MMMM, YYYY') }</span>
                            </div>
                            {/* Hour */}
                            <div>
                                <span className="text-sm font-thin">Hora:</span>
                                <span className="text-sm font-bold ml-1">{ order.hour}</span>
                            </div>
                        </div>
                    </section>
                    <Confetti active={triggerConfetti} config={ config }/>
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
                        { Object.keys(content).sort().filter(product => content[product].id !== 'orderDetailsId').map(product =>
                            <ProductListElement product={content[product]} isEditable={false}/>
                        )
                        }
                        <div className="w-full text-center text-regularText text-normal">Total:</div>
                        <div className="w-full text-center text-brand-orange text-2xl">${ subtotal }</div>
                        {/* Mapa */}
                        <div className="hidden border h-56 mt-4 bg-brand-gray sm:block">
                            <Map store={store}/>
                            <a target="_blank" rel="noopener noreferrer" href={`https://maps.google.com/?q=${store.lat},${store.lon}&z=8`}>
                                ir a mapa
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <Confetti active={triggerConfetti} config={ config }/>
        </Layout>
    );
}

export default Success;
