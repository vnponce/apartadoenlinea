import React, { useState, useEffect } from 'react';
import Admin from "../../Shared/Admin";
// import UsersInfoBoxes from "../../components/Admin/UsersInfoBoxes";
// import {Inertia} from "@inertiajs/inertia";
import Table from "../../components/Table";
import StoresInfoBoxes from "../../components/Admin/StoresInfoBoxes";
import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'


function Stores(props) {
    const { stores, flash: { success_message } } = props;
    const [storeId, setStoreId] = useState(false);
    const columns = React.useMemo(
        () => [
            {
                Header: 'Nombre',
                accessor: 'name',
            },
            {
                Header: 'Dirección',
                accessor: 'address',
            },
            {
                Header: 'Dirección amigable',
                accessor: 'friendly_address',
            },
            {
                Header: 'Horas de entrega',
                accessor: 'delivery_time',
                // Cell: data => (
                //     <span className="">Change Password</span>
                // ),
            },
            {
                Header: 'Lunes a Sábado',
                accessor: 'monday_saturday',
                // Cell: data => (
                //     <span className="">Change Password</span>
                // ),
            },
            {
                Header: 'Domingo',
                accessor: 'sunday',
                // Cell: data => {
                //     console.log('data =>', data);
                //     const { original: user } = data.row;
                //     if(user.isAdmin) {
                //         return <span className="">Todas</span>
                //     }
                //     return <span className="">{user.stores[0].name}</span>;
                // },
            },
        ],
        []
    );

    useEffect(() => {
        if(success_message) {
            // setCreateUser(false);
            // setDataSelected(false);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: success_message,
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                location.reload();
            });
        }
    }, [success_message]);

    const openedAndShow = index => {
        const data = stores[index];
        setStoreId(data.id);
        // setStoreId(data.id);
    };

    return (
        <Admin title="Panel">
            <StoresInfoBoxes id={storeId} createStore={false} setCreateStore={() => {}}/>
            {/*Graph Content */}
            <div id="main-content" className="w-full flex-1">

                <div className="flex flex-1 flex-wrap">

                    <div className="w-full py-6 xl:max-w-6xl">

                        {/*"Container" for the graphs"*/}
                        <div className="max-w-full lg:max-w-3xl xl:max-w-5xl">

                            {/*Table orders*/}
                            <div className="border-b p-3">
                                <h5 className="font-bold text-black inline-block">Tiendas</h5>
                                {/*<button*/}
                                {/*    className="inline-block float-right text-white bg-orange-400 hover:bg-brand-orange hover:text-white focus:outline-none focus:shadow-outline font-bold py-2 px-4 rounded sm:m-auto lg:m-0"*/}
                                {/*    onClick={() => console.log('tienda')}>*/}
                                {/*    <i*/}
                                {/*        className="inline fa fa-store fa-fw"/>*/}
                                {/*</button>*/}
                                <Table columns={columns} data={stores} onClick={row => openedAndShow(row.index)} selected={false}/>
                            </div>
                            {/*/Table orders*/}

                        </div>
                    </div>
                </div>

            </div>
        </Admin>
    );
}

export default Stores;
