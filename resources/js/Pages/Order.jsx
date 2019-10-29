import React, { useState } from 'react';
import Layout from '../Shared/Layout';
import {InertiaLink} from "@inertiajs/inertia-react";
import {Inertia} from "@inertiajs/inertia";
import HeaderDescription from "../components/HeaderDescription";
import Input from "../components/Input";


function Order(props) {
    const [wantInvoice, setWantInvoice] = useState(false);

    return (
        <Layout title="Producto seleccionado">
            <HeaderDescription title="PEDIDOS"
                               description="Por favor recuerda llenar el formulario para indicarnos en dónde recogeras tu pedido."/>
            <div className="mt-4 w-full pb-24 ">
                {/* Order and map container */}
                <div className="px-4 lg:w-1/2 lg:float-left lg:content-end">
                    {/* Order and map aux */}
                    <div className="lg:w-3/4 lg:float-right">
                        {/* Order place and hour data */}
                        {/* Sucursal */}
                        <Input label="Sucursal" id="store" placeholder="Bravo" value="Bravo"/>
                        {/* Día */}
                        <Input label="Día" id="date" placeholder="Día" value="12 de octubre"/>
                        {/* Hora */}
                        <Input label="Hora" id="hour" placeholder="9:30" value="9:30pm"/>
                        {/* Map */}
                        {/* Mapa */}
                        <div className="hidden border h-56 mt-4 bg-brand-gray sm:block">
                            MAPA
                        </div>
                        {/* Ver mapa */}
                        <button
                            className="flex cursor-pointer justify-center font-bold py-2 px-4 rounded w-1/2 m-auto mt-4 block bg-transparent border border-brand-orange text-brand-orange text-bold hover:bg-brand-orange hover:text-white hover:shadow hover:text-white sm:hidden">
                            <span>Ver el mapa</span>
                            <svg version="1.1" className="stroke-current fill-current w-6" id="Location_pin"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path
                                    d="M10,2.009c-2.762,0-5,2.229-5,4.99c0,4.774,5,11,5,11s5-6.227,5-11C15,4.239,12.762,2.009,10,2.009zM10,9.76c-1.492,0-2.7-1.209-2.7-2.7s1.208-2.7,2.7-2.7c1.49,0,2.699,1.209,2.699,2.7S11.49,9.76,10,9.76z"/>
                            </svg>
                        </button>
                    </div>

                </div>
                {/* separator */}
                <div className="px-4 mt-8 mb-6 lg:hidden">
                    <hr className="w-100"/>
                </div>
                <div className="px-4 lg:w-1/2 lg:float-left">
                    {/* Order user data */}
                    <div className="lg:w-3/4">
                        {/* Name */}
                        <Input label="Nombre" id="name" placeholder="Ej. Juan" value=""/>
                        {/* LastName */}
                        <Input label="Apellido" id="lastname" placeholder="Apellido" value=""/>
                        {/* Phone */}
                        <Input label="Teléfono" id="phone" placeholder="" value="" type="tel"/>
                        {/* email */}
                        <Input label="Correo electrónico" id="email" placeholder="" value="" type="email"/>
                    </div>
                    {/* Invoice */}
                    <div className="w-full bg-brand-gray mt-8 p-4">
                        <div className="flex items-center">
                            <input id="want-invoice" className="mr-2" type="checkbox"
                                   onClick={() => setWantInvoice(!wantInvoice)}/>
                            <label htmlFor="want-invoice" className="text-brand-orange text-lg italic font-thin">
                                ¿Quieres factura?
                            </label>
                        </div>
                        {wantInvoice &&
                            <>
                                {/* RFC */}
                                <Input label="RFC" id="invoice-rfc" />
                                {/* Type of... is a selector */}
                                <Input label="Selector" id="invoice-type" />
                                {/* Address */}
                                <Input label="Dirección" id="invoice-address" />
                                {/* Full name */}
                                <Input label="Nombre completo" id="invoice-full-name" />
                                {/* Phone */}
                                <Input label="Teléfono" id="invoice-phone" type="tel" />
                                {/* email */}
                                <Input label="Correo electrónico" id="email" type="email" />
                            </>
                        }
                    </div>
                    {/* 'Proceder' Next step */}
                    <InertiaLink href="/charola"
                                 className="flex cursor-pointer justify-center font-bold py-2 px-4 rounded w-1/2 m-auto mt-4 block bg-transparent border border-brand-orange text-brand-orange text-bold hover:bg-brand-orange hover:text-white hover:shadow hover:text-white">
                        <span>Proceder</span>
                    </InertiaLink>
                </div>
            </div>
        </Layout>
    );
}

export default Order;
