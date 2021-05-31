import React, { useState, useEffect } from 'react';
import Admin from "../../Shared/Admin";
// import UsersInfoBoxes from "../../components/Admin/UsersInfoBoxes";
// import {Inertia} from "@inertiajs/inertia";
import Table from "../../components/Table";
import StoresInfoBoxes from "../../components/Admin/StoresInfoBoxes";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import Content from "../../components/Admin/Content";
// import 'sweetalert2/src/sweetalert2.scss'
import {breakpoints} from "../../Shared/utils";
import { useWindowSize } from '../../hooks/useWindowSize';


function Stores(props) {
    const { stores, flash: { success_message } } = props;
    const [storeId, setStoreId] = useState(false);
    const [mobileShowInfoBoxes, setMobileShowInfoBoxes] = useState(false);
    const [isInfoBoxOpen, setIsInfoBoxOpen] = useState(false);
    const { isLessThanLG } = useWindowSize();
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
        setIsInfoBoxOpen(true);
        if(isLessThanLG) {
            setMobileShowInfoBoxes(true);
        }
    };

    return (
        <Admin title="Panel">
            { ( (isLessThanLG && isInfoBoxOpen) || !isLessThanLG ) && (
                <StoresInfoBoxes id={storeId} createStore={false} setCreateStore={() => {}}/>
            )}
            {!mobileShowInfoBoxes && (
                <Content>
                    <h5 className="font-bold text-black inline-block">Tiendas</h5>
                    {/*<button*/}
                    {/*    className="inline-block float-right text-white bg-orange-400 hover:bg-brand-orange hover:text-white focus:outline-none focus:shadow-outline font-bold py-2 px-4 rounded sm:m-auto lg:m-0"*/}
                    {/*    onClick={() => console.log('tienda')}>*/}
                    {/*    <i*/}
                    {/*        className="inline fa fa-store fa-fw"/>*/}
                    {/*</button>*/}
                    <Table columns={columns} data={stores} onClick={row => openedAndShow(row.index)} selected={false}/>
                </Content>
            )}
        </Admin>
    );
};

export default Stores;
