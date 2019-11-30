import React from 'react';
import Admin from "../../Shared/Admin";
import InfoBoxes from "../../components/Admin/InfoBoxes";
import { useTable } from 'react-table';

function Table({ columns, data }) {
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
        <table className="table-auto" {...getTableProps()}>
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {console.log('headerGroups =>', headerGroups)}
                    {console.log('headerGroup =>', headerGroup)}
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
                        <tr className={ (i % 2) ? "hover:bg-gray-300" : "hover:bg-gray-300 bg-gray-200"} {...row.getRowProps()}>
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
    const { orders, ux, success_message } = props;
    console.log('succes_message =>', success_message);
    console.log('orders =>', orders);
    console.log('ux =>', ux);
    const columns = React.useMemo(
        () => [
            {
                Header: '-',
                accessor: 'id',
            },
            {
                Header: 'Cliente',
                accessor: 'customer',
            },
            {
                Header: 'Sucrusal',
                accessor: 'store',
            },
            {
                Header: 'Fecha',
                accessor: 'date',
            },
            {
                Header: 'Estatus',
                accessor: 'status',
            },
        ],
        []
    );

    const data = [
        {
            id: 1,
            customer: 'Abel',
            store: 'Bernal',
            date: '17 marzo, 5:00pm',
            status: 'Visto',
            order: {
                products: [
                    {
                        name: 'Pambazo',
                        price: '300',
                        comments: 'sin nada',
                    }
                ],
                total: 300,
            }
        },
    ];

    return (
        <Admin title="Panel">
            <InfoBoxes />
            {/*Graph Content */}
            <div id="main-content" className="w-full flex-1">

                <div className="flex flex-1 flex-wrap">

                    <div className="w-full xl:w-2/3 p-6 xl:max-w-6xl">

                        {/*"Container" for the graphs"*/}
                        <div className="max-w-full lg:max-w-3xl xl:max-w-5xl">

                            {/*Table orders*/}
                            <div className="border-b p-3">
                                <h5 className="font-bold text-black">Pedidos</h5>
                                <Table columns={columns} data={data} />
                            </div>
                            {/*/Table orders*/}

                        </div>

                    </div>

                    <div className="w-full xl:w-1/3 p-6 xl:max-w-4xl border-l-1 border-gray-300">
                        Datos de lo seleccionado
                    </div>

                </div>

            </div>
        </Admin>
    );
}

export default Dashboard;
