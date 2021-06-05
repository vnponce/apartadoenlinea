import React, { useState, useEffect } from 'react';
import Admin from "../../Shared/Admin";
import {Inertia} from "@inertiajs/inertia";
import Table from "../../components/Table";
import ProductsInfoBoxes from "../../components/Admin/ProductsInfoBoxes";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import Content from "../../components/Admin/Content";
import Pagination from "../../components/Pagination";
// import 'sweetalert2/src/sweetalert2.scss'
import {breakpoints, getParameterByName} from "../../Shared/utils";
import { useWindowSize } from '../../hooks/useWindowSize';
import Input from "../../components/Input";


function Products(props) {
    const { products, flash: { success_message } } = props;
    const [productToSearch, setProductToSearch] = useState('');
    const [dataSelected, setDataSelected] = useState(null);
    const [createProduct, setCreateProduct] = useState(null);
    const [editing, setEditing] = useState(false);
    const [mobileShowInfoBoxes, setMobileShowInfoBoxes] = useState(false);
    const [isInfoBoxOpen, setIsInfoBoxOpen] = useState(false);
    const { isLessThanLG } = useWindowSize();

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
        setIsInfoBoxOpen(true);
        if(isLessThanLG) {
            setMobileShowInfoBoxes(true);
        }
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
        setIsInfoBoxOpen(true);
        if(isLessThanLG) {
            setMobileShowInfoBoxes(true);
        }
    };

    const getData = data => Inertia.visit(`?page=${data.page}`);

    const onChange = (e) => {
        if (e.key === 'Enter') {
            toSearch();
            // return false;
        }
        setProductToSearch(e.target.value);
    };

    const toSearch = () => {
        const searchProduct = productToSearch ? `q=${productToSearch}` : '';
        const url = `/admin/products?${searchProduct}`;
        // Inertia.visit(url);
    };


    return (
        <Admin title="Panel">
            { ( (isLessThanLG && isInfoBoxOpen) || !isLessThanLG ) && (
                <ProductsInfoBoxes data={dataSelected} setDataSelected={setDataSelected} createProduct={createProduct} setCreateProduct={setCreateProduct} editing={editing} setEditing={setEditing}/>
            )}
            {/*Graph Content */}
            {!mobileShowInfoBoxes && (
                <Content>
                    <div className="w-full flex items-end mb-3">
                        <div className="inline-block flex mr-3">
                            <Input
                                id="id"
                                label="Nombre o Id"
                                onChange={onChange}
                                placeholder="ej. Juan"
                                error={[]}
                                onKeyDown={onChange}
                                value={productToSearch}
                            />
                        </div>
                        <div>
                            <button
                                className="h-10 inline-block text-white bg-orange-400 hover:bg-brand-orange hover:text-white focus:outline-none focus:shadow-outline font-bold px-4 rounded"
                                onClick={toSearch}
                            >Buscar</button>
                        </div>

                    </div>
                    <h5 className="font-bold text-black inline-block">Productos</h5>
                    <button
                        className="inline-block float-right text-white bg-orange-400 hover:bg-brand-orange hover:text-white focus:outline-none focus:shadow-outline font-bold py-2 px-4 rounded sm:m-auto lg:m-0"
                        onClick={showCreateProduct}>
                        <i
                            className="inline fa fa-bread-slice fa-fw"/>+
                    </button>
                    <div className="w-full overflow-y-hidden">
                        <Table columns={columns} data={products.data} onClick={row => openedAndShow(row.index)} selected={dataSelected}/>
                    </div>
                    <Pagination items={products} />
                </Content>
            )}
        </Admin>
    );
};

export default Products;
