import React, { useState } from 'react';
import Layout from '../Shared/Layout';
import {InertiaLink, usePage} from "@inertiajs/inertia-react";
import {Inertia} from "@inertiajs/inertia";
import HeaderDescription from "../components/HeaderDescription";
import Input from "../components/Input";
import Stores from "../components/Select/Stores";
import DateSelector from "../components/DateSelector";
import Hour from "../components/Select/Hour";

function Order() {
    const { stores } = usePage();
    // const { stores } = props;
    // console.log('stores =>', stores);
    const [wantInvoice, setWantInvoice] = useState(false);
    const [store, setStore] = useState('');
    const [date, setDate] = useState(null);
    const [hour, setHour] = useState(null);

    // customer info
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    // invoice info
    const [invoiceName, setInvoiceName] = useState('');
    const [invoiceLastName, setInvoiceLastName] = useState('');
    const [invoicePhone, setInvoicePhone] = useState('');
    const [invoiceEmail, setInvoiceEmail] = useState('');

    const onSubmit = () => {
        console.log('store =>', store);
        console.log('date =>', date);
        console.log('hour =>', hour);
        /*
        Inertia.post('/order', {
            store,
            date,
            hour,
        })
        */
    };


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
                        {/* <Input label="Sucursal" id="store" placeholder="Bravo" value="Bravo"/> */}
                        <Stores setStore={setStore} stores={stores} />
                        {/* Día */}
                        {/* <Input label="Día" id="date" placeholder="Día" value="12 de octubre"/> */}
                        <DateSelector date={date} setDate={setDate} store={store && stores.filter(s => s.id === store)[0]} />
                        {/* Hora*/}
                        <Hour hour={hour} setHour={setHour} store={store && stores.filter(s => s.id === store)[0]} date={date} />
                        {/* <Input label="Hora" id="hour" placeholder="9:30" value="9:30pm"/> */}
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
                    {/* 'Proceder' Next step
                    <InertiaLink href="/charola"
                                 className="flex cursor-pointer justify-center font-bold py-2 px-4 rounded w-1/2 m-auto mt-4 block bg-transparent border border-brand-orange text-brand-orange text-bold hover:bg-brand-orange hover:text-white hover:shadow hover:text-white">
                        <span>Proceder</span>
                    </InertiaLink>
                    */}
                    <button
                        onClick={onSubmit}
                        className="flex cursor-pointer justify-center font-bold py-2 px-4 rounded w-1/2 m-auto mt-4 block bg-transparent border border-brand-orange text-brand-orange text-bold hover:bg-brand-orange hover:text-white hover:shadow hover:text-white">
                        <span>Proceder</span>
                    </button>
                </div>
            </div>
        </Layout>
    );
}

export default Order;
