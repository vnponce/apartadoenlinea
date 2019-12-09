import React, { useState } from 'react';
import Input from "../../Input";
import {usePage} from "@inertiajs/inertia-react";
import {Inertia} from "@inertiajs/inertia";
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import Stores from "../../Select/Stores";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);


export default function CreateUser(props) {
    const { data } = props;
    const { errors, stores } = usePage();
    const [userData, setUserData] = useState({
        // store: 1,
        role: 'god',
    });
    const [storeSelected, setStoreSelected] = useState(false);
    const [avatar, setAvatar] = useState(null);
    const onChange = e => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        })
    };

    const createUser = () => {
        const formData = new FormData();
        formData.append("file", avatar, avatar.name);
        formData.set("name", userData.name ? userData.name : '');
        formData.set("email", userData.email ? userData.email : '');
        formData.set("password", userData.password ? userData.password : '');
        formData.set("role", userData.role ? userData.role : '');
        formData.set("store", storeSelected ? storeSelected : '');
        Inertia.post("users", formData);
    };
    return (
        <>
            <FilePond onupdatefiles={fileItems => {
                console.log('onupdatefiles =>', fileItems);
                // setAvatar(fileItems.map(fileItem => fileItem.file));
                setAvatar(fileItems[0].file);
            }}/>
            <Input
                onChange={onChange}
                value={userData.name}
                id="name"
                label="Nombre de usuario"
                placeholder="Nombre"
                error={errors.name}
            />
            <Input
                onChange={onChange}
                value={userData.email}
                id="email"
                label="Correo Electrónico"
                placeholder="email"
                error={errors.email}
            />
            <Input
                onChange={onChange}
                value={userData.password}
                id="password"
                label="Contraseña"
                placeholder="Contraseña"
                type="password"
                error={errors.password}
            />
            <div className="font-light text-sm text-gray-600 mt-4 sm:text-center lg:text-justify">
                <label htmlFor="role" className="hover:border-grey-900 italic sm:block">Role</label>
                <select
                    id="role"
                    name="role"
                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    onChange={onChange}
                >
                    <option value="god" selected={userData.role !== 'god'}>Dios</option>
                    <option value="admin" selected={userData.role === 'admmin'}>Administrador/Matriz</option>
                    <option value="manager" selected={userData.role === 'manager'}>Manager/Sucursal</option>
                </select>
            </div>
            {errors.role && <p className={`text-sm m-auto text-red-500 error role`}>{errors.role[0]}</p>}
            {userData.role === 'manager' && (
                <>
                    <Stores setStore={setStoreSelected} stores={stores} />
                    {errors.store && <p className={`text-sm m-auto text-red-500 error store`}>{errors.store[0]}</p>}
                </>
            )}
            {userData.role !== 'manager' && (
                <div className="font-light text-sm text-gray-600 mt-4 sm:text-center lg:text-justify">
                    <label htmlFor="role" className="hover:border-grey-900 italic sm:block">Sucursal</label>
                    <span className="text-base">Visualiza todas las sucursales</span>
                    <input id="role"
                           name="role"
                           type="hidden"
                           value="1"
                    />
                </div>
            )}
            <hr className="my-6"/>
            <button
                className="inline-block float-right text-white bg-orange-400 hover:bg-brand-orange hover:text-white focus:outline-none focus:shadow-outline font-bold py-2 px-4 rounded sm:m-auto lg:m-0"
                onClick={createUser}>
                Crear usuario
            </button>
        </>
    )
};
