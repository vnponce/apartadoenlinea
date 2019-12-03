import React, { useState, useEffect } from 'react';
import Admin from "../../Shared/Admin";
import InfoBoxes from "../../components/Admin/InfoBoxes";
import { useTable } from 'react-table';
import {Inertia} from "@inertiajs/inertia";

function Table({ columns, data, onClick }) {
    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    });

    // Render the UI for your table
    return (
        <table className="table-auto w-full" {...getTableProps()}>
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th className="px-4 py-2 py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light" {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map(
                (row, i) => {
                    prepareRow(row);
                    return (
                        <tr onClick={() => onClick(row)} className={ (i % 2) ? "hover:bg-gray-300 cursor-pointer" : "hover:bg-gray-300 cursor-pointer bg-gray-200"} {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td className="py-4 px-6 border-b border-grey-light" {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )}
            )}
            </tbody>
        </table>
    )
}


function Dashboard(props) {
    const { orders, success_message } = props;
    const [dataSelected, setDataSelected] = useState(null);
    const columns = React.useMemo(
        () => [
            {
                Header: '-',
                accessor: 'id',
            },
            {
                Header: 'Cliente',
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
                    <span className="">{data.cell.value.step}</span>
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
                                <Table columns={columns} data={orders} onClick={row => openedAndShow(row.index)}/>
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
