import React, { useEffect } from 'react';
import Input from "../Input";
import CreateProduct from "./ProductsInfoBoxes/CreateProduct";
import {create} from "filepond";

export default function InfoBoxes(props) {
    const { data, editProduct = false, createProduct = false, setCreateProduct } = props;
    console.log('ProductInfoboxes data =>', data);
    console.log('ProductInfoboxes createProduct =>', createProduct);
    useEffect(() => {
       console.log('mounting');
    });
    return (
    <div id="dash-content"
         className="bg-gray-200 py-6 lg:py-0 w-full h-full lg:max-w-sm flex flex-wrap content-start">
        { (data || createProduct) && (
            <div className="w-1/2 lg:w-full">
                <div
                    className="m-2 md:mx-6 md:my-6">
                    {createProduct && <CreateProduct />}
                    {editProduct && <CreateProduct data={data} />}
                    {data && (
                        <>
                            <div className="flex justify-center">
                                {data.image_path && <img alt={data.image_path} className="w-64 h-64 rounded mr-4" src={data.image_path}/>}
                                {!data.image && <i className="far fa-image text-6xl rounded mr-4"/>}
                            </div>
                            <div className="flex flex-row">
                                <div className="flex flex-1 flex-col">
                                    <span className="text-lg my-6">{data.name}</span>
                                    <div className="my-6">
                                        <i
                                            className="inline fa fa-user-shield fa-fw text-brand-icons text-lg"/>
                                        <span className="inline"> {data.description}</span>
                                    </div>
                                    <div className="my-6">
                                        <i
                                            className="inline fa fa-at fa-fw text-brand-icons text-lg"/>
                                        <span className="inline"> {data.ingredients}</span>
                                    </div>
                                    <div className="my-6">
                                        <i
                                            className="inline fa fa-store fa-fw text-brand-icons text-lg"/>
                                        <span className="inline">{ data.price }</span>
                                    </div>
                                    <div className="my-6">
                                        <i
                                            className="inline fa fa-store fa-fw text-brand-icons text-lg"/>
                                        <span className="inline">{ data.available }</span>
                                    </div>
                                    <div className="my-6">
                                        <i
                                            className="inline fa fa-store fa-fw text-brand-icons text-lg"/>
                                        <span className="inline">{ data.category }</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row">
                                <button>Cambiar Contraseña</button>
                                <button>Editar</button>
                            </div>
                            </>
                    )}

                </div>
            </div>
        )}
        { !(data || createProduct)  && (
            <div className="w-1/2 lg:w-full">
                <div
                    className="border-2 border-gray-400 border-dashed hover:border-transparent hover:bg-white hover:shadow-xl rounded p-6 m-2 md:mx-10 md:my-6">
                    <div className="flex flex-col items-center">
                        <div className="flex-shrink pr-4">
                            <div className="rounded-full p-3 bg-gray-400"><i
                                className="fa fa-hand-pointer fa-fw fa-inverse text-indigo-500 text-3xl"/></div>
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
