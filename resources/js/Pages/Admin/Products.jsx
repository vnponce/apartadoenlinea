import React, { useState, useEffect } from 'react';
import Admin from "../../Shared/Admin";
import {Inertia} from "@inertiajs/inertia";
import Table from "../../components/Table";
import ProductsInfoBoxes from "../../components/Admin/ProductsInfoBoxes";
import {Pagination} from "react-laravel-paginex";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'


function Products(props) {
    const { products, flash: { success_message } } = props;
    const [dataSelected, setDataSelected] = useState(null);
    const [createProduct, setCreateProduct] = useState(null);
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        if(success_message) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: success_message,
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                location.reload();
            })
        }
    }, [success_message]);

    const showCreateProduct = () => {
        setCreateProduct(true);
        setDataSelected(false);
        setEditing(false);
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
                    const { available } = data.row.original;
                    if(available) {
                        return <i className="fas fa-check-circle table m-auto"></i>
                    } else {
                        return <i className="fas fa-times-circle table m-auto"></i>
                    }
                },
            },
        ],
        []
    );

    const openedAndShow = index => {
        const data = products.data[index];
        setEditing(false);
        setDataSelected(data);
    };

    const getData = data => Inertia.visit(`?page=${data.page}`);

    return (
        <Admin title="Panel">
            {console.log('rendering Products')}
            <ProductsInfoBoxes data={dataSelected} setDataSelected={setDataSelected} createProduct={createProduct} setCreateProduct={setCreateProduct} editing={editing} setEditing={setEditing}/>
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
                                <Table columns={columns} data={products.data} onClick={row => openedAndShow(row.index)} selected={dataSelected}/>
                            </div>
                            {/*/Table orders*/}
                            <div className="py-10 block w-full flex justify-center">
                                {products && products.data.length > 0 && (
                                    <Pagination
                                        containerClass="flex flex-wrap h-12"
                                        numberButtonClass="mr-1 mb-1 px-4 py-3 text-sm border rounded hover:bg-white focus:border-indigo focus:text-indigo"
                                        // numberClass="mr-1 mb-1 px-4 py-3 text-sm border rounded hover:bg-white focus:border-indigo focus:text-indigo"
                                        activeClass="border-brand-orange bg-orange-400 text-white hover:text-gray-600"
                                        changePage={getData}
                                        nextButtonText="Siguiente"
                                        buttonIcons
                                        prevButtonClass="mr-1 mb-1 px-4 py-3 text-sm border rounded hover:bg-white focus:border-indigo focus:text-indigo"
                                        nextButtonClass="mr-1 mb-1 px-4 py-3 text-sm border rounded hover:bg-white focus:border-indigo focus:text-indigo"
                                        // prevButtonText="Anterior"
                                        // prevButtonIcon="fa fa-chevron-left"
                                        data={products}/>
                                )}
                            </div>


                        </div>
                    </div>
                </div>

            </div>
        </Admin>
    );
}

export default Products;
