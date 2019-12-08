import React from 'react';
import Input from "../../Input";

export default function CreateUser(props) {
    const { data } = props;
    return (
        <>
            <Input
                onChange={() => console.log('onChange')}
                value=""
                id="name"
                label="Nombre de usuario"
                onKeyDown={() => console.log('on key down')}
                placeholder="nombre"
            />
            <Input
                onChange={() => console.log('onChange')}
                value=""
                id="role"
                label="Role"
                onKeyDown={() => console.log('on key down')}
                placeholder="role"
            />
            <Input
                onChange={() => console.log('onChange')}
                value=""
                id="email"
                label="Correo Electrónico"
                onKeyDown={() => console.log('on key down')}
                placeholder="email"
            />
            <Input
                onChange={() => console.log('onChange')}
                value=""
                id="email"
                label="Correo Electrónico"
                onKeyDown={() => console.log('on key down')}
                placeholder="email"
            />
            <Input
                onChange={() => console.log('onChange')}
                value=""
                id="email"
                label="Store"
                onKeyDown={() => console.log('on key down')}
                placeholder="email"
            />
        </>
    )
};
