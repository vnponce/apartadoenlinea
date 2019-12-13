import React, { useState, useEffect } from 'react';
import Admin from "../../Shared/Admin";
import InfoBoxes from "../../components/Admin/InfoBoxes";
import { useTable } from 'react-table';
import {Inertia} from "@inertiajs/inertia";
import Styled from 'styled-components';
import classNames from 'classnames';
import Table from "../../components/Table";
import ProductsInfoBoxes from "../../components/Admin/ProductsInfoBoxes";


function Products(props) {
    const { products, success_message } = props;
    console.log('products =>', products);
    const [dataSelected, setDataSelected] = useState(null);
    const [createProduct, setCreateProduct] = useState(null);
    const updateStatus = id => evt => {
        console.log('id =>', id);
        Inertia.put( `/products/${id}`, {
            status: evt.target.value,
        });
    };

    const showCreateProduct = () => {
        console.log('crear product');
        setCreateProduct(true);
        setDataSelected(false);
    };

    const columns = React.useMemo(
        () => [
            {
                Header: 'Nombre',
                accessor: 'name',
            },
            {
                Header: 'Descripción',
                accessor: 'description',
            },
            {
                Header: 'Ingredientes',
                accessor: 'ingredients',
            },
            {
                Header: 'Precio',
                accessor: 'price',
                Cell: data => {
                    return (
                        <span className="">{data.row.original.formatPrice}</span>
                    )
                },
            },
            {
                Header: 'Disponible',
                accessor: 'available',
                Cell: data => {
                    return (
                        <span className="">{data.row.original.available}</span>
                    )
                },
            },
        ],
        []
    );

    const openedAndShow = index => {
        const data = orders[index];
        setDataSelected(data);
        if(data.status.original !== 'created') {
            return false;
        }
        Inertia.put(`pedido/${data.id}`, {
            status: 'opened',
        });
    };

    useEffect(() => {
        // openedAndShow(0);
    }, []);

    return (
        <Admin title="Panel">
            <ProductsInfoBoxes data={dataSelected} createProduct={createProduct} setCreateProduct={setCreateProduct}/>
            {/*Graph Content */}
            <div id="main-content" className="w-full flex-1">

                <div className="flex flex-1 flex-wrap">

                    <div className="w-full py-6 xl:max-w-6xl">

                        {/*"Container" for the graphs"*/}
                        <div className="max-w-full lg:max-w-3xl xl:max-w-5xl">

                            {/*Table orders*/}
                            <div className="border-b p-3">
                                <h5 className="font-bold text-black inline-block">Productos</h5>
                                <button
                                    className="inline-block float-right text-white bg-orange-400 hover:bg-brand-orange hover:text-white focus:outline-none focus:shadow-outline font-bold py-2 px-4 rounded sm:m-auto lg:m-0"
                                    onClick={showCreateProduct}>
                                    <i
                                        className="inline fa fa-bread-slice fa-fw"/>+
                                </button>
                                <Table columns={columns} data={products} onClick={row => openedAndShow(row.index)} selected={dataSelected}/>
                            </div>
                            {/*/Table orders*/}

                        </div>
                    </div>
                </div>

            </div>
        </Admin>
    );
}

export default Products;
