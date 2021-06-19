import React, { useEffect } from 'react';
import Input from "../Input";
import CreateUser from "./UsersInfoBoxes/CreateUser";

export default function InfoBoxes(props) {
    const { data, editUser = false, createUser = false, setCreateUser } = props;
    return (
        <>
        { (data || createUser) && (
            <div className="w-full">
                <div
                    className="m-2 md:mx-6 md:my-6">
                    {createUser && <CreateUser />}
                    {data && <CreateUser data={data} />}
                    {data && false && (
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
                                        <span className="inline">{ data.isAdmin ? 'Todas' :  data.stores[0].name }</span>
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
            <div className="w-full">
                <div
                    className="border-2 border-gray-400 border-dashed hover:border-transparent hover:bg-white hover:shadow-xl rounded p-6 m-2 md:mx-10 md:my-6">
                    <div className="flex flex-col items-center">
                        <div className="flex-shrink pr-4">
                            <div className="rounded-full p-3 bg-gray-400"><i
                                className="fa fa-hand-pointer fa-fw fa-inverse text-3xl"/></div>
                        </div>
                        <div className="flex-1 mt-3">
                            No hay ningun usuario seleccionado para editar la información.
                        </div>
                        <small onClick={setCreateUser} className="flex-1 mt-3 text-brand-orange cursor-pointer">
                            Haz click para crear usuario.
                        </small>
                    </div>
                </div>
            </div>
        )}
        </>
    )
};
