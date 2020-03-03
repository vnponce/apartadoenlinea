import {useTable} from "react-table";
import classNames from "classnames";
import React from "react";

function Table({ columns, data, onClick, selected }) {
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
                    const cx = classNames(
                        'hover:bg-gray-300',
                        'cursor-pointer',
                        { 'bg-gray-200': (i % 2) },
                        { 'text-brand-orange': selected && row.original.id === selected.id },
                        { 'text-red-500': row.original.date.forToday },
                        { 'bg-red-100': row.original.date.forToday },
                        { 'text-yellow-500': row.original.date.forTomorrow },
                        { 'bg-yellow-100': row.original.date.forTomorrow },
                        { 'line-through': row.original.canceled },
                    );
                    return (
                        <tr
                            id={row.original.id}
                            onClick={() => onClick(row)}
                            className={cx}
                            {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td className="py-4 px-2 border-b border-grey-light" {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )}
            )}
            </tbody>
        </table>
    )
}

export default Table;
