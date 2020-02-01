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
import set from "@babel/runtime/helpers/esm/set";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);


export default function CreateProduct(props) {
    const { data, setCreateProduct, editing = false, setEditing = () => {}, setDataSelected} = props;
    const { errors, stores, categories, flash } = usePage();
    const [successMessageCount, setSuccessMessageCount] = useState(0);
    const [productData, setProductData] = useState({
        name: '',
        description: '',
        ingredients: '',
        price: '',
        favorite: 0,
        available: 0,
        category_id: categories[0].id,
    });
    const [storeSelected, setStoreSelected] = useState(false);
    // const [editing, setEditing] = useState(false);
    const [avatar, setAvatar] = useState(null);
    const onChange = e => {
        setProductData({
            ...productData,
            [e.target.name]: e.target.value,
        })
    };

    useEffect(() => {
        if(flash.success){
            setEditing(false);
            setCreateProduct(false);
            setDataSelected(false);
            if(successMessageCount === 0) {
                // toast(flash.success);
                setSuccessMessageCount(1);
            }
        }
    }, [flash]);

    useEffect(() => {
        if(data) {
            setEditing(true);
            setProductData({...data});
        }
    }, [data]);

    const cancelProduct = () => {
        const hostname = window.location.hostname;
        const url = window.location.href;
        const [port, path] = url.split(hostname);
        Inertia.visit(path)
    };

    const refreshPage = () => {
        const hostname = window.location.hostname;
        const url = window.location.href;
        const [port, path] = url.split(hostname);

        Inertia.visit(path);
    };
    const getFormData = () => {
        const formData = new FormData();
        formData.append("file", avatar, avatar.name);
        formData.set("name", productData.name || '');
        formData.set("description", productData.description || '');
        formData.set("ingredients", productData.ingredients || '');
        formData.set("price", productData.price || '');
        formData.set("category_id", productData.category_id || '');
        formData.set("available", productData.available);
        formData.set("favorite", productData.favorite);
        // Display the key/value pairs
        // for (var pair of formData.entries()) {
            // console.log('[getFormData] =>' + pair[0]+ ', ' + pair[1]);
        // }
        return formData;
    };
    const createProduct = () => {
        if(editing){
            if(avatar) {
                const updateFormData = getFormData();
                /*
                const updateFormData = new FormData();
                console.log('before updateFormData =>', updateFormData);
                updateFormData.append("file", avatar, avatar.name);
                updateFormData.set("name", productData.name || '');
                updateFormData.set("description", productData.description || '');
                updateFormData.set("ingredients", productData.ingredients || '');
                updateFormData.set("price", productData.price || '');
                updateFormData.set("category_id", productData.category_id || '');
                updateFormData.set("available", productData.available);
                updateFormData.set("favorite", productData.favorite);

                 */
                Inertia.post(`products/${productData.id}`, updateFormData);
            } else {
                Inertia.put(`products/${productData.id}`, {
                    ...productData,
                    // store: storeSelected,
                });
            }
        } else {
            const formData = getFormData();
            Inertia.post("products", formData);
            // Inertia.post("products", {
            //     ...productData,
            //     // store: storeSelected,
            // });
        }
    };
    return (
        <>
            <FilePond onupdatefiles={fileItems => {
                // setAvatar(fileItems.map(fileItem => fileItem.file));
                setAvatar(fileItems[0].file);
            }}/>
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
                        <option value={category.id} selected={productData.category_id === category.id}>{category.name}</option>
                    ))}
                </select>
            </div>
            {errors.category_id && <p className={`text-sm m-auto text-red-500 error category`}>{errors.category_id[0]}</p>}

            <Checkbox label="Disponible" checked={productData.available} setChecked={() => setProductData({...productData, available: productData.available === 0 ? 1 : 0})} error={errors.available} />
            <Checkbox label="Favorito" checked={productData.favorite} setChecked={() => setProductData({...productData, favorite: productData.favorite === 0 ? 1 : 0})} error={errors.favorite} />
            <hr className="my-6"/>
            <button
                className="inline-block float-right text-white bg-orange-400 hover:bg-brand-orange hover:text-white focus:outline-none focus:shadow-outline font-bold py-2 px-4 rounded sm:m-auto lg:m-0"
                onClick={createProduct}>
                {editing ? 'Editar' : 'Crear producto'}
            </button>
            <button
                className="inline-block float-left text-white bg-orange-400 hover:bg-brand-orange hover:text-white focus:outline-none focus:shadow-outline font-bold py-2 px-4 rounded sm:m-auto lg:m-0"
                onClick={cancelProduct}>
                Cancelar
            </button>
        </>
    )
};
