import React, { useEffect, useState } from 'react';
import Input from "../Input";
import CreateProduct from "./ProductsInfoBoxes/CreateProduct";
import {create} from "filepond";
import {Inertia} from "@inertiajs/inertia";

export default function InfoBoxes(props) {
    const { data, createProduct = false, setCreateProduct, editing, setEditing, setDataSelected } = props;
    // console.log('InfoBoxes data =>', data);
    // console.log('InfoBoxes createProduct =>', createProduct);
    // useEffect(() => {
    //     if(data){
    //         setDataSelected(data);
    //     }
    // }, [data]);
    const cancelProduct = () => {
        const { hostname } = window.location;
        const url = window.location.href;
        const [port, path] = url.split(hostname);
        Inertia.visit(path);
    };
    return (
    <div id="dash-content"
         className="h-auto bg-gray-200 py-6 lg:py-0 w-full lg:max-w-sm flex flex-wrap content-start">
        { (data || createProduct) && (
            <div className="w-full">
                <div
                    className="m-2 md:mx-6 md:my-3">
                    {createProduct && !data && <CreateProduct setDataSelected={setDataSelected} setCreateProduct={setCreateProduct}/>}
                    {editing && <CreateProduct setCreateProduct={setCreateProduct} setDataSelected={setDataSelected} data={data} editing={editing} setEditing={setEditing}/>}
                    {data && !editing && (
                        <>
                            <div className="flex justify-center">
                                {data.image_path && <img alt={data.image_path} className="w-64 h-64 rounded mr-4" src={data.image_path}/>}
                                {!data.image && <i className="far fa-image text-6xl rounded mr-4"/>}
                            </div>
                            <div className="flex flex-row">
                                <div className="flex flex-1 flex-col">
                                    <span className="text-lg my-3">{data.name}</span>
                                    <div className="my-3">
                                        <i
                                            className="inline fa fa-align-left fa-fw text-brand-icons text-lg"/>
                                        <span className="inline"> {data.description || 'No tiene descripción' }</span>
                                    </div>
                                    <div className="my-3">
                                        <i
                                            className="inline fa fa-list-ul fa-fw text-brand-icons text-lg"/>
                                        <span className="inline"> {data.ingredients || 'No tiene ingredientes'}</span>
                                    </div>
                                    <div className="my-3">
                                        <i
                                            className="inline fa fa-dollar-sign fa-fw text-brand-icons text-lg"/>
                                        <span className="inline">{ data.formatPrice }</span>
                                    </div>
                                    <div className="my-3">
                                        <i
                                            className="inline fa fa-layer-group fa-fw text-brand-icons text-lg"/>
                                        <span className="inline">{ data.category.name }</span>
                                    </div>
                                    <div className="my-3">
                                        <i
                                            className="inline fa fa-check-circle fa-fw text-brand-icons text-lg"/>
                                        <span className="inline">{ data.available ? 'Disponible' : 'No disponible'}</span>
                                    </div>
                                    <div className="my-3">
                                        <i
                                            className="inline fa fa-star fa-fw text-brand-icons text-lg"/>
                                        <span className="inline">{ data.favorite ? 'Favorito' : 'No es favorito'}</span>
                                    </div>
                                    <div className="my-3">
                                        <i
                                            className="inline fa fa-pencil-alt fa-fw text-brand-icons text-lg"/>
                                        <span className="inline">{ data.customizable ? 'Personalizable' : 'No es personalizable'}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row w-full justify-between">
                                <button
                                    className="inline-block text-white bg-orange-400 hover:bg-brand-orange hover:text-white focus:outline-none focus:shadow-outline font-bold py-2 px-4 rounded sm:m-auto lg:m-0"
                                    onClick={cancelProduct}>
                                    Cancelar
                                </button>
                                <button
                                    className="inline-block text-white bg-orange-400 hover:bg-brand-orange hover:text-white focus:outline-none focus:shadow-outline font-bold py-2 px-4 rounded sm:m-auto lg:m-0"
                                    onClick={() => setEditing(true)}>Editar</button>
                            </div>
                            </>
                    )}

                </div>
            </div>
        )}
        { !(data || createProduct)  && (
            <div className="w-full">
                <div
                    className="border-2 border-gray-400 border-dashed hover:border-transparent hover:bg-white hover:shadow-xl rounded p-6 m-2 md:mx-10 md:my-3">
                    <div className="flex flex-col items-center">
                        <div className="flex-shrink pr-4">
                            <div className="rounded-full p-3 bg-gray-400"><i
                                className="fa fa-hand-pointer fa-fw fa-inverse text-3xl"/></div>
                        </div>
                        <div className="flex-1 mt-3">
                            No hay ningun producto seleccionado para editar la información.
                        </div>
                        <small onClick={setCreateProduct} className="flex-1 mt-3 text-brand-orange cursor-pointer">
                            Haz click para crear producto.
                        </small>
                    </div>
                </div>
            </div>
        )}
        {/*
        <div className="w-1/2 lg:w-full">
            <div
                className="border-2 border-gray-400 border-dashed hover:border-transparent hover:bg-white hover:shadow-xl rounded p-6 m-2 md:mx-10 md:my-3">
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
                className="border-2 border-gray-400 border-dashed hover:border-transparent hover:bg-white hover:shadow-xl rounded p-6 m-2 md:mx-10 md:my-3">
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
                className="border-2 border-gray-400 border-dashed hover:border-transparent hover:bg-white hover:shadow-xl rounded p-6 m-2 md:mx-10 md:my-3">
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
                className="border-2 border-gray-400 border-dashed hover:border-transparent hover:bg-white hover:shadow-xl rounded p-6 m-2 md:mx-10 md:my-3">
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
