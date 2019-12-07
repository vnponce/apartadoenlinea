import React, { useState, useEffect } from 'react';
import Admin from "../../Shared/Admin";
import InfoBoxes from "../../components/Admin/InfoBoxes";
import { useTable } from 'react-table';
import {Inertia} from "@inertiajs/inertia";
import Styled from 'styled-components';
import classNames from 'classnames';
import Table from "../../components/Table";


function Products(props) {
    const { products, success_message } = props;
    const [dataSelected, setDataSelected] = useState(null);
    const updateStatus = id => evt => {
        console.log('id =>', id);
        Inertia.put( `/products/${id}`, {
            status: evt.target.value,
        });
    };

    const columns = React.useMemo(
        () => [
            {
                Header: 'Nombre',
                accessor: 'id',
            },
            {
                Header: 'Descripción',
                accessor: 'customer',
                Cell: data => (
                    <span className="">{data.cell.value.name}</span>
                ),
            },
            {
                Header: 'Sucrusal',
                accessor: 'store',
                Cell: data => (
                    <span className="">{data.cell.value.name}</span>
                ),
            },
            {
                Header: 'Fecha',
                accessor: 'date',
                Cell: data => (
                    <span className="">{data.cell.value.formatted}</span>
                ),
            },
            {
                Header: 'Estatus',
                accessor: 'status',
                Cell: data => (
                    <>
                        {/* start select */}
                        <div className="inline-block relative w-full">
                            <select
                                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                onChange={updateStatus(data.cell.row.original.id)}
                            >
                                <option value="opened" selected={data.cell.value.original !== 'opened'}>Visto</option>
                                <option value="placed" selected={data.cell.value.original === 'placed'}>En ruta/sucursal</option>
                                <option value="delivered" selected={data.cell.value.original === 'delivered'}>Entregada</option>
                                <option value="-" selected={data.cell.value.original === '-'}>Pendiente</option>
                            </select>
                            <div
                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                </svg>
                            </div>
                        </div>
                        {/* end select */}
                    </>
                ),
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
            <InfoBoxes data={dataSelected}/>
            {/*Graph Content */}
            <div id="main-content" className="w-full flex-1">

                <div className="flex flex-1 flex-wrap">

                    <div className="w-full py-6 xl:max-w-6xl">

                        {/*"Container" for the graphs"*/}
                        <div className="max-w-full lg:max-w-3xl xl:max-w-5xl">

                            {/*Table orders*/}
                            <div className="border-b p-3">
                                <h5 className="font-bold text-black">Pedidos</h5>
                                <Table columns={columns} data={orders} onClick={row => openedAndShow(row.index)} selected={dataSelected}/>
                            </div>
                            {/*/Table orders*/}

                        </div>
                    </div>
                </div>

            </div>
        </Admin>
    );
}

export default Dashboard;
