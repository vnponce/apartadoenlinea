import React from 'react';
import {InertiaLink} from "@inertiajs/inertia-react";

export default function BreadCard(props) {
    if (!props.product ) {
        return false;
    }
    const { product } = props;
    return (
        <div className="container bread-card">
            <InertiaLink href={`/pan/${product.id}`} className="flex-1 flex cursor-pointer sm:bg-brand-gray">
                <img className="m-auto w-full h-40 object-cover align-middle md:h-64" src="/breads/Cuernito.png" alt="Banderilla mini" />
            </InertiaLink>
            <InertiaLink href="/product" className="flex-1 flex flex-col h-32 overflow-hidden cursor-pointer sm:mt-4 sm:h-24">
                <div className="flex-1 sm:text-center text-gray-600 font-medium uppercase">
                    <div className="first-letter-bigger">{product.name}</div>
                    <div className="text-lg">
                        <span>{product.formatPrice}</span>
                        <span className="text-xs align-top">p/p</span>
                    </div>
                </div>
                <div className="flex-1 truncate text-gray-500 text-base">{product.description}</div>
            </InertiaLink>
        </div>
    )
};
