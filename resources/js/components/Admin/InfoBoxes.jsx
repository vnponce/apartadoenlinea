import React, { useState, useEffect } from 'react';
import {InertiaLink, usePage} from "@inertiajs/inertia-react";
import Admin from "../../Shared/Admin";
import UserDetails from "./InfoBoxes/UserDetails";
import StoreDetails from "./InfoBoxes/StoreDetails";
import ProductsList from "./InfoBoxes/ProductsList";
import {Inertia} from "@inertiajs/inertia";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'



export default function InfoBoxes(props) {
    const { auth: { user } } = usePage();
    const [nextStatus, setNextStatus] = useState(false);
    console.log('InfoBoxes user =>', user);
    const { data } = props;
    console.log('infoboxes data =>', data);

    useEffect(() => {
        console.log('useEffect =>', data);
        if(data) {
            const { status, store: { name } } = data;
            switch (status.original) {
                case 'created':
                case 'opened':
                    setNextStatus({
                        original: 'journey',
                        step: 'En ruta',
                        allowed: user.isAdmin,
                    });
                    break;
                case 'journey':
                    setNextStatus({
                        original: 'placed',
                        step: 'En sucursal',
                        allowed: user.role === 'manager' || (user.isAdmin && name === 'Miguel Alemán'),
                    });
                    break;
                case 'placed':
                    setNextStatus({
                        original: 'delivered',
                        step: 'Entregado',
                        allowed: user.role === 'manager' || (user.isAdmin && name === 'Miguel Alemán'),
                    });
                    break;
                case 'delivered':
                    setNextStatus({
                        original: 'alredyDelivered',
                        step: 'Ya entregado',
                        allowed: false,
                    });
                    break;
                default:
                    setNextStatus({
                        original: 'default',
                        step: 'Default',
                        allowed: false,
                    });
                    break;
            }
        }
    }, [data]);

    const updateToNextStatus = () => {
        console.log(`Vamos a pasar de ${data.status.original} a ${nextStatus.original}`);
        console.log(`nextStatus => ${nextStatus}`);
        console.log(`${nextStatus}`);
        if(nextStatus.allowed || user.isGod) {
            Swal.fire({
                title: '¿Seguro?',
                text: `Vamos a pasar la orden de ${data.status.step} a ${nextStatus.step}`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí cambiar estatus',
                cancelButtonText: 'No cambiar estatus',
            }).then((result) => {
                if (result.value) {
                    Inertia.put( `/admin/orders/${data.id}`, {
                        status: nextStatus.original,
                    });
                //     Swal.fire(
                //         'Deleted!',
                //         'Your file has been deleted.',
                //         'success'
                //     )
                }
            });
        }
    };

    const allowedToModify = () => {
      if(user.isGod) {
          return true;
      }
      return nextStatus.allowed;
    };

    return (
    <div id="dash-content"
         className="bg-gray-200 py-6 lg:py-0 w-full h-full lg:max-w-sm flex flex-wrap content-start">
        { data && (
            <div className="w-1/2 lg:w-full">
                <div
                    className="md:mx-6 md:my-3">
                    <div>
                        Pedido No: <strong>{data.id}</strong>
                    </div>
                    <div>
                        <i
                        className="inline fa fa-calendar-day fa-fw text-brand-icons text-sm mr-3"/>
                        <strong>{data.date.formatted}</strong>
                    </div>
                </div>
                <UserDetails data={data.customer} />
                <StoreDetails data={data.store} />
                <ProductsList data={data.products} />
                <div className="w-full text-center text-regularText text-normal">Total:</div>
                <div className="w-full text-center text-regularText text-2xl">${data.total}</div>
                <div
                    className="m-2 md:mx-6 md:my-6">
                    <span className="text-lg">{data.employee.name}</span> levantó este pedido.
                </div>
                <div className="flex flex-row">
                    <button
                        className={allowedToModify() ?
                            "w-full inline-block text-white bg-orange-400 hover:bg-brand-orange hover:text-white focus:outline-none focus:shadow-outline font-bold py-2 px-4 rounded m-6" :
                            "w-full inline-block text-white bg-orange-400 hover:bg-brand-orange hover:text-white focus:outline-none focus:shadow-outline font-bold py-2 px-4 rounded m-6 cursor-not-allowed"
                        }
                        onClick={() => updateToNextStatus(data.status)}
                        disabled={!allowedToModify()}
                    >{nextStatus.step}</button>
                </div>
            </div>
        )}
        { !data && (
            <div className="w-1/2 lg:w-full">
                <div
                    className="border-2 border-gray-400 border-dashed hover:border-transparent hover:bg-white hover:shadow-xl rounded p-6 m-2 md:mx-10 md:my-6">
                    <div className="flex flex-col items-center">
                        <div className="flex-shrink pr-4">
                            <div className="rounded-full p-3 bg-gray-400"><i
                                className="fa fa-hand-pointer fa-fw fa-inverse text-indigo-500 text-3xl"/></div>
                        </div>
                        <div className="flex-1 mt-3">
                            No hay ningun pedido seleccionado para mostrar información.
                        </div>
                        <small className="flex-1 mt-3 text-brand-orange">
                            Hacer click sobre el pedido para ver los detalles.
                        </small>
                    </div>
                </div>
            </div>
        )}
        {/*
        <div className="w-1/2 lg:w-full">
            <div
                className="border-2 border-gray-400 border-dashed hover:border-transparent hover:bg-white hover:shadow-xl rounded p-6 m-2 md:mx-10 md:my-6">
                <div className="flex flex-col items-center">
                    <div className="flex-shrink pr-4">
                        <div className="rounded-full p-3 bg-gray-300"><i
                            className="fa fa-wallet fa-fw fa-inverse text-indigo-500"/></div>
                    </div>
                    <div className="flex-1">
                        <h3 className="font-bold text-3xl">$3249 <span className="text-green-500"><i
                            className="fas fa-caret-up"/></span></h3>
                        <h5 className="font-bold text-gray-500">Total Revenue</h5>
                    </div>
                </div>
            </div>
        </div>

        <div className="w-1/2 lg:w-full">
            <div
                className="border-2 border-gray-400 border-dashed hover:border-transparent hover:bg-white hover:shadow-xl rounded p-6 m-2 md:mx-10 md:my-6">
                <div className="flex flex-col items-center">
                    <div className="flex-shrink pr-4">
                        <div className="rounded-full p-3 bg-gray-300"><i
                            className="fas fa-users fa-fw fa-inverse text-indigo-500"/></div>
                    </div>
                    <div className="flex-1">
                        <h3 className="font-bold text-3xl">249 <span className="text-orange-500"><i
                            className="fas fa-exchange-alt"/></span></h3>
                        <h5 className="font-bold text-gray-500">Total Users</h5>
                    </div>
                </div>
            </div>
        </div>

        <div className="w-1/2 lg:w-full">
            <div
                className="border-2 border-gray-400 border-dashed hover:border-transparent hover:bg-white hover:shadow-xl rounded p-6 m-2 md:mx-10 md:my-6">
                <div className="flex flex-col items-center">
                    <div className="flex-shrink pr-4">
                        <div className="rounded-full p-3 bg-gray-300"><i
                            className="fas fa-user-plus fa-fw fa-inverse text-indigo-500"/></div>
                    </div>
                    <div className="flex-1">
                        <h3 className="font-bold text-3xl">2 <span className="text-yellow-600"><i
                            className="fas fa-caret-up"/></span></h3>
                        <h5 className="font-bold text-gray-500">New Users</h5>
                    </div>
                </div>
            </div>
        </div>

        <div className="w-1/2 lg:w-full">
            <div
                className="border-2 border-gray-400 border-dashed hover:border-transparent hover:bg-white hover:shadow-xl rounded p-6 m-2 md:mx-10 md:my-6">
                <div className="flex flex-col items-center">
                    <div className="flex-shrink pr-4">
                        <div className="rounded-full p-3 bg-gray-300"><i
                            className="fas fa-server fa-fw fa-inverse text-indigo-500"/></div>
                    </div>
                    <div className="flex-1">
                        <h3 className="font-bold text-3xl">152 days</h3>
                        <h5 className="font-bold text-gray-500">Server Uptime</h5>
                    </div>
                </div>
            </div>
        </div>
        */}
    </div>
    )
};
