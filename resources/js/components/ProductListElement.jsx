import React from 'react';
import {Inertia} from "@inertiajs/inertia";

export default function ProductListElement(props) {
    const { product } = props;
    const removeOneItem = () => {
        console.log('remove an item');
        console.log(product.qty + 1);
        Inertia.post('/cart', {
            product_id: product.id,
            comment: product.options.comment,
            quantity: -1,
            redirect: 'product',
        });
    };
    const addOneItem = () => {
        console.log('add an item');
        Inertia.post('/cart', {
            product_id: product.id,
            comment: product.options.comment,
            quantity: 1,
            redirect: 'product',
        });
    }
    return (
        <div className="mb-8">
            <div className="flex">
                <div className="flex items-center flex-1 inline-block">
                    <svg className="cursor-pointer -ml-5 mr-2 stroke-current fill-current  text-gray-500 w-3"  viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="10 8.58578644 2.92893219 1.51471863 1.51471863 2.92893219 8.58578644 10 1.51471863 17.0710678 2.92893219 18.4852814 10 11.4142136 17.0710678 18.4852814 18.4852814 17.0710678 11.4142136 10 18.4852814 2.92893219 17.0710678 1.51471863 10 8.58578644"></polygon>
                    </svg>
                    <span className="ml-0 text-lg">{ product.name }</span>
                </div>
                <div className="flex flex-1 text-center items-center">
                    <svg onClick={removeOneItem} className="w-5 cursor-pointer fill-current text-brand-orange" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20">
                        <path d="M16,10c0,0.553-0.048,1-0.601,1H4.601C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H15.4  C15.952,9,16,9.447,16,10z"/>
                    </svg>
                    <span className="flex-1 cursor-pointer ">{ product.qty }</span>
                    <svg onClick={addOneItem} className="w-5 cursor-pointer fill-current text-brand-orange" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20">
                        <path d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601  C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399  C15.952,9,16,9.447,16,10z"/>
                    </svg>
                </div>
                <div className="flex flex-1 items-center flex-row-reverse">${ product.price }</div>
            </div>
            <div className="text-sm italic text-brand-orange">{ product.options.comment }</div>
        </div>
    );
};
