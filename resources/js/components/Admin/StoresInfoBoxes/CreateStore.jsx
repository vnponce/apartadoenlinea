import React, { useState, useEffect } from 'react';
import Input from "../../Input";
import {usePage} from "@inertiajs/inertia-react";
import {Inertia} from "@inertiajs/inertia";
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import Stores from "../../Select/Stores";


export default function CreateStore(props) {
    const { id } = props;
    const { errors, stores, success_message } = usePage();
    const [storeData, setStoreData] = useState(stores.filter(store => store.id === id)[0]);
    const [editing, setEditing] = useState(false);
    const onChange = e => {
        setStoreData({
            ...storeData,
            [e.target.name]: e.target.value,
        })
    };

    useEffect(() => {
        if(id) {
            setEditing(true);
            setStoreData(stores.filter(store => store.id === id)[0]);
        }
    }, [id]);

    const createStore = () => {
        if(editing){
            Inertia.put(`stores/${id}`, {
                ...storeData,
            });
        } else {
            console.log('editing else con post');
            Inertia.post("stores", {
                ...storeData,
            });
        }
    };
    return (
        <>
            <h3>{storeData.name}</h3>
            {/*<Input*/}
            {/*    onChange={onChange}*/}
            {/*    value={storeData.name}*/}
            {/*    id="name"*/}
            {/*    label="Nombre de sucursal"*/}
            {/*    placeholder="Nombre"*/}
            {/*    error={errors.name}*/}
            {/*/>*/}
            {/*{!editing &&*/}
            <Input
                onChange={onChange}
                value={storeData.address}
                id="address"
                label="Dirección"
                placeholder="email"
                error={errors.address}
            />
            {/*}*/}
            <Input
                onChange={onChange}
                value={storeData.friendly_address}
                id="friendly_address"
                label="Dirección amigable"
                placeholder="Dirección amigable"
                error={errors.friendly_address}
            />
            <Input
                onChange={onChange}
                value={storeData.lat}
                id="lat"
                label="Latitud"
                placeholder="Latitud"
                error={errors.lat}
            />
            <Input
                onChange={onChange}
                value={storeData.lon}
                id="lon"
                label="Longitud"
                placeholder="Longitud"
                error={errors.lon}
            />
            <hr className="my-6"/>
            <button
                className="inline-block float-right text-white bg-orange-400 hover:bg-brand-orange hover:text-white focus:outline-none focus:shadow-outline font-bold py-2 px-4 rounded sm:m-auto lg:m-0"
                onClick={createStore}>
                {editing ? 'Editar sucursal' : 'Crear sucursal' }
            </button>
        </>
    )
};
