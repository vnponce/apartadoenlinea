import React, { useState, useEffect } from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import moment from "moment";
import Layout from '../Shared/Layout';
import HeaderDescription from '../components/HeaderDescription';
import Input from '../components/Input';
import Stores from '../components/Select/Stores';
import DateSelector from '../components/DateSelector';
import Hour from '../components/Select/Hour';
import Map from '../components/Map';

function Order() {
  const { stores, errors, cart: { content } } = usePage();
  // const { stores } = props;
  const [wantInvoice, setWantInvoice] = useState(false);
  const [store, setStore] = useState('');
  const [date, setDate] = useState(null);
  const [hour, setHour] = useState(null);
  const [employeeName, setEmployeeName] = useState('');

  // customer info
  const [customer, setCustomer] = useState({});

  // invoice info
  const [invoice, setInvoice] = useState({});

  useEffect(() => {
    if (Object.keys(content).length) {
      // const orderDetails = Object.keys(content).find((product) => content[product].id === 'orderDetailsId');
      const orderDetails = Object.values(content).find(({ id }) => id === 'orderDetailsId');
      if (orderDetails) {
        const {
          options: {
              name, date, email, employeeName, hour, lastname, phone, store
          },
        } = orderDetails;
        setStore(store);
        setDate(moment(date));
        setHour(hour);
        setEmployeeName(employeeName);
        setCustomer({
          name,
          lastname,
          phone,
          email,
        });
      }
    }
  }, []);

  const wantInvoiceOnChange = () => {
    setWantInvoice(!wantInvoice);
    if (!invoice.name) {
      const fullName = (customer.name && customer.lastname) ? `${customer.name} ${customer.lastname}` : '';
      setInvoice({
        name: fullName,
        phone: customer.phone || '',
        email: customer.email || '',
      });
    }
  };

  const customerInfoOnChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const invoiceInfoOnChange = (e) => {
    setInvoice({
      ...invoice,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    Inertia.post('/pedido/detalles', {
      store,
      date,
      hour,
      name: customer.name,
      lastname: customer.lastname,
      phone: customer.phone,
      email: customer.email,
      employeeName,
      // date y hour en un solo string ej. '28/05/2020 7:30'
      // pickUp,
      // mandar invoice info solo si es 'wantInvoice' true
    });
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
                        <Stores setStore={setStore} stores={stores} storeSelected={store && stores.filter((s) => s.id === store)[0]}/>
                        {errors && errors.store && <span className="text-sm text-red-500 error store">{errors.store[0]}</span>}
                        {/* Día */}
                        {/* <Input label="Día" id="date" placeholder="Día" value="12 de octubre"/> */}
                        <DateSelector date={date} setDate={setDate} store={store && stores.filter((s) => s.id === store)[0]} />
                        {errors && errors.date && <span className="text-sm text-red-500 error date">{errors.date[0]}</span>}

                        {/* Hora */}
                        <Hour hour={hour} setHour={setHour} store={store && stores.filter((s) => s.id === store)[0]} date={date} />
                        {errors && errors.hour && <span className="text-sm text-red-500 error hour">{errors.hour[0]}</span>}
                        {/* <Input label="Hora" id="hour" placeholder="9:30" value="9:30pm"/> */}
                        {/* Map */}
                        {/* Mapa */}
                        <div className="hidden border h-56 mt-4 bg-brand-gray sm:block">
                            <Map store={store && stores.filter((s) => s.id === store)[0]} />
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
                        <Input label="Nombre" id="name" placeholder="Ej. Juan" value={customer.name} onChange={customerInfoOnChange}/>
                        {errors && errors.name && <span className="text-sm text-red-500 error name">{errors.name[0]}</span>}
                        {/* LastName */}
                        <Input label="Apellido" id="lastname" placeholder="Apellido" value={customer.lastname} onChange={customerInfoOnChange}/>
                        {errors && errors.lastname && <span className="text-sm text-red-500 error lastname">{errors.lastname[0]}</span>}
                        {/* Phone */}
                        <Input label="Teléfono" id="phone" placeholder="" value={customer.phone} type="phone" onChange={customerInfoOnChange}/>
                        {errors && errors.phone && <span className="text-sm text-red-500 error phone">{errors.phone[0]}</span>}
                        {/* email */}
                        <Input label="Correo electrónico" id="email" placeholder="" value={customer.email} type="email" onChange={customerInfoOnChange}/>
                        {errors && errors.email && <span className="text-sm text-red-500 error email">{errors.email[0]}</span>}
                        {/* Employee name */}
                        <Input label="¿Quién levantó el pedido?" id="employee" placeholder="" value={employeeName} onChange={(e) => setEmployeeName(e.target.value)}/>
                        {errors && errors.employeeName && <span className="text-sm text-red-500 error email">{errors.employeeName[0]}</span>}
                    </div>
                    {/* Invoice */}
                    {/* <div className="w-full bg-brand-gray mt-8 p-4"> */}
                    {/*    <div className="flex items-center"> */}
                    {/*        <input id="want-invoice" className="mr-2" type="checkbox" */}
                    {/*               onClick={wantInvoiceOnChange}/> */}
                    {/*        <label htmlFor="want-invoice" className="text-brand-orange text-lg italic font-thin"> */}
                    {/*            ¿Quieres factura? */}
                    {/*        </label> */}
                    {/*    </div> */}
                    {/*    {wantInvoice && */}
                    {/*        <> */}
                    {/*            /!* RFC *!/ */}
                    {/*            <Input label="RFC" id="rfc" value={invoice.rfc} onChange={invoiceInfoOnChange}/> */}
                    {/*            /!* Type of... is a selector *!/ */}
                    {/*            <Input label="Selector" id="type" value={invoice.type} onChange={invoiceInfoOnChange}/> */}
                    {/*            /!* Address *!/ */}
                    {/*            <Input label="Dirección" id="address" value={invoice.address} onChange={invoiceInfoOnChange}/> */}
                    {/*            /!* Full name *!/ */}
                    {/*            <Input label="Nombre completo" id="name" value={invoice.name} onChange={invoiceInfoOnChange}/> */}
                    {/*            /!* Phone *!/ */}
                    {/*            <Input label="Teléfono" id="phone" type="tel" value={invoice.phone} onChange={invoiceInfoOnChange}/> */}
                    {/*            /!* email *!/ */}
                    {/*            <Input label="Correo electrónico" id="email" type="email" value={invoice.email} onChange={invoiceInfoOnChange}/> */}
                    {/*        </> */}
                    {/*    } */}
                    {/* </div> */}
                    {/* 'Proceder' Next step
                    <InertiaLink href="/charola"
                                 className="flex cursor-pointer justify-center font-bold py-2 px-4 rounded w-1/2 m-auto mt-4 block bg-transparent border border-brand-orange text-brand-orange text-bold hover:bg-brand-orange hover:text-white hover:shadow hover:text-white">
                        <span>Proceder</span>
                    </InertiaLink>
                    */}
                    <button
                        onClick={onSubmit}
                        className="next flex cursor-pointer justify-center font-bold py-2 px-4 rounded w-1/2 m-auto mt-4 block bg-transparent border border-brand-orange text-brand-orange text-bold hover:bg-brand-orange hover:text-white hover:shadow hover:text-white">
                        <span>Proceder</span>
                    </button>
                </div>
            </div>
        </Layout>
  );
}

export default Order;
