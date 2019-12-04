import React from 'react';
import ProductListElement from "../../ProductListElement";

export default function ProductsList(props) {
    const { data } = props;
    console.log('data products =>', data);
    return (
        <div
            className="m-2 md:mx-6 md:my-6">
            <div className="w-full flex flex-col">
                {/* checkout table  */}
                <div className="flex content-between">
                    <span className="flex-1 text-brand-orange font-thin text-left">Producto</span>
                    <span className="flex-1 text-brand-orange font-thin text-center">Cant.</span>
                    <span className="flex-1 text-brand-orange font-thin text-right">Prec. Unit.</span>
                </div>
                {/* products list */}
                { data.map(product => <ProductListElement product={product} isEditable={false} />)}
            </div>
        </div>
    )
};
