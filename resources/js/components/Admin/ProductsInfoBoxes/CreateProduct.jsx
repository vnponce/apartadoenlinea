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
import {create} from "filepond";
import Checkbox from "../../Checkbox";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);


export default function CreateProduct(props) {
    const { data } = props;
    const { errors, stores, categories, success_message } = usePage();
    const [productData, setProductData] = useState({
        // store: 1,
    });
    const [storeSelected, setStoreSelected] = useState(false);
    const [editing, setEditing] = useState(false);
    const [avatar, setAvatar] = useState(null);
    const onChange = e => {
        setProductData({
            ...productData,
            [e.target.name]: e.target.value,
        })
    };

    useEffect(() => {
        console.log('mounting Create User data =>', data);
        if(data) {
            setEditing(true);
            setProductData({...data});
        }
    }, [data]);

    const createProduct = () => {
        console.log('createProduct isEditing =>', editing);
        /*
        const formData = new FormData();
        formData.append("file", avatar, avatar.name);
        formData.set("name", userData.name ? userData.name : '');
        formData.set("email", userData.email ? userData.email : '');
        formData.set("password", userData.password ? userData.password : '');
        formData.set("role", userData.role ? userData.role : '');
        formData.set("store", storeSelected ? storeSelected : '');
         */
        if(editing){
            console.log('editing true');
            console.log('editing productData =>', productData);
            // console.log('editing storeSelected =>', storeSelected);
            Inertia.put(`products/${userData.id}`, {
                ...productData,
                // store: storeSelected,
            });
        } else {
            console.log('editing else con post');
            Inertia.post("products", {
                ...productData,
                // store: storeSelected,
            });
        }
    };
    return (
        <>
            {/*
            <FilePond onupdatefiles={fileItems => {
                console.log('onupdatefiles =>', fileItems);
                // setAvatar(fileItems.map(fileItem => fileItem.file));
                setAvatar(fileItems[0].file);
            }}/>
            */}
            <Input
                onChange={onChange}
                value={productData.name}
                id="name"
                label="Nombre de producto"
                placeholder="Nombre"
                error={errors.name}
            />
            <Input
                onChange={onChange}
                value={productData.description}
                id="description"
                label="Descripción"
                placeholder="Descripción"
                error={errors.description}
            />
            <Input
                onChange={onChange}
                value={productData.ingredients}
                id="ingredients"
                label="Ingredientes"
                placeholder="Ingredientes separados por coma"
                error={errors.ingredients}
            />
            <Input
                onChange={onChange}
                value={productData.price}
                id="price"
                label="Precio"
                placeholder="12.50"
                error={errors.price}
            />
            <div className="font-light text-sm text-gray-600 mt-4 sm:text-center lg:text-justify">
                <label htmlFor="category_id" className="hover:border-grey-900 italic sm:block">Categoría</label>
                <select
                    id="category_id"
                    name="category_id"
                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    onChange={onChange}
                >
                    {categories.map(category => (
                        <option value={category.id} selected={productData.category_id !== category.id}>{category.name}</option>
                    ))}
                </select>
            </div>
            {errors.category && <p className={`text-sm m-auto text-red-500 error category`}>{errors.category[0]}</p>}

            <Checkbox label="Disponible" checked={productData.available} setChecked={() => setProductData({...productData, available: !productData.available})} error={errors.available} />
            <Checkbox label="Favorito" checked={productData.favorite} setChecked={() => setProductData({...productData, favorite: !productData.favorite})} error={errors.favorite} />
            <hr className="my-6"/>
            <button
                className="inline-block float-right text-white bg-orange-400 hover:bg-brand-orange hover:text-white focus:outline-none focus:shadow-outline font-bold py-2 px-4 rounded sm:m-auto lg:m-0"
                onClick={createProduct}>
                Crear producto
            </button>
        </>
    )
};
