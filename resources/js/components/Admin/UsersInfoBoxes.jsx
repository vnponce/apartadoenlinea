import React, { useEffect } from 'react';
import Input from "../Input";
import CreateUser from "./UsersInfoBoxes/CreateUser";

export default function InfoBoxes(props) {
    const { data, createUser = false } = props;
    console.log('UserInfoboxes data =>', data);
    console.log('UserInfoboxes createUser =>', createUser);
    useEffect(() => {
       console.log('mounting');
    });
    return (
    <div id="dash-content"
         className="bg-gray-200 py-6 lg:py-0 w-full h-full lg:max-w-sm flex flex-wrap content-start">
        { (data || createUser) && (
            <div className="w-1/2 lg:w-full">
                <div
                    className="m-2 md:mx-6 md:my-6">
                    {createUser && <CreateUser />}
                    {data && (
                        <>
                            <div className="flex justify-center">
                                <img alt={data.name} className="w-24 h-24 rounded-full mr-4" src={data.avatar_path}/>
                            </div>
                            <div className="flex flex-row">
                                <div className="flex flex-1 flex-col">
                                    <span className="text-lg my-6">{data.name}</span>
                                    <div className="my-6">
                                        <i
                                            className="inline fa fa-user-shield fa-fw text-brand-icons text-lg"/>
                                        <span className="inline"> {data.role}</span>
                                    </div>
                                    <div className="my-6">
                                        <i
                                            className="inline fa fa-at fa-fw text-brand-icons text-lg"/>
                                        <span className="inline"> {data.email}</span>
                                    </div>
                                    <div className="my-6">
                                        <i
                                            className="inline fa fa-store fa-fw text-brand-icons text-lg"/>
                                        <span className="inline"> {data.stores}</span>
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
        { !(data || createUser)  && (
            <div className="w-1/2 lg:w-full">
                <div
                    className="border-2 border-gray-400 border-dashed hover:border-transparent hover:bg-white hover:shadow-xl rounded p-6 m-2 md:mx-10 md:my-6">
                    <div className="flex flex-col items-center">
                        <div className="flex-shrink pr-4">
                            <div className="rounded-full p-3 bg-gray-400"><i
                                className="fa fa-hand-pointer fa-fw fa-inverse text-indigo-500 text-3xl"/></div>
                        </div>
                        <div className="flex-1 mt-3">
                            No hay ningun usuario seleccionado para mostrar información.
                        </div>
                        <small className="flex-1 mt-3 text-brand-orange">
                            Hacer click sobre el usuario para ver los detalles o en crear usuario.
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
