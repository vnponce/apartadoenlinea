import React, { useState } from 'react';
import Input from "../../Input";
import {usePage} from "@inertiajs/inertia-react";
import {Inertia} from "@inertiajs/inertia";

export default function CreateUser(props) {
    const { data } = props;
    const { errors } = usePage();
    const [userData, setUserData] = useState({});
    const onChange = e => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        })
    };

    const createUser = () => {
        Inertia.post('users', userData);
    };
    return (
        <>
            <Input
                onChange={onChange}
                value={userData.name}
                id="name"
                label="Nombre de usuario"
                placeholder="nombre"
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
            <Input
                onChange={onChange}
                value={userData.role}
                id="role"
                label="Role"
                placeholder="role"
                error={errors.role}
            />
            <Input
                onChange={onChange}
                value={userData.store}
                id="store"
                label="Store"
                placeholder="store"
                error={errors.store}
            />
            <hr className="my-6"/>
            <button
                className="inline-block float-right text-white bg-orange-400 hover:bg-brand-orange hover:text-white focus:outline-none focus:shadow-outline font-bold py-2 px-4 rounded sm:m-auto lg:m-0"
                onClick={createUser}>
                Crear usuario
            </button>
        </>
    )
};
