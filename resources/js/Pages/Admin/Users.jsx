import React, { useState, useEffect } from 'react';
import Admin from "../../Shared/Admin";
import UsersInfoBoxes from "../../components/Admin/UsersInfoBoxes";
import {Inertia} from "@inertiajs/inertia";
// import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import Table from "../../components/Table";


function Users(props) {
    const { users, flash: { success_message } } = props;
    const [dataSelected, setDataSelected] = useState(null);
    const [createUser, setCreateUser] = useState(null);
    const updateStatus = id => evt => {
        Inertia.put( `/users/${id}`, {
            status: evt.target.value,
        });
    };

    const columns = React.useMemo(
        () => [
            {
                Header: 'Nombre',
                accessor: 'name',
            },
            {
                Header: 'username',
                accessor: 'username',
            },
            {
                Header: 'role',
                accessor: 'role',
            },
            /*
            {
                Header: 'password',
                accessor: 'password',
                Cell: data => (
                    <span className="">Change Password</span>
                ),
            },
            */
            {
                Header: 'Tienda',
                accessor: 'stores',
                Cell: data => {
                    const { original: user } = data.row;
                    if(user.isAdmin) {
                        return <span className="">Todas</span>
                    }
                    return <span className="">{user.stores[0].name}</span>;
                },
            },
        ],
        []
    );

    const openedAndShow = index => {
        const data = users[index];
        setCreateUser(false);
        setDataSelected(data);
    };

    const showCreateUser = () => {
        setCreateUser(true);
        setDataSelected(false);
    };

    useEffect(() => {
        console.log('befor if success =>', success_message);
        if(success_message) {
            console.log('success =>', success_message);
            setCreateUser(false);
            setDataSelected(false);
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

    return (
        <Admin title="Panel">
            <UsersInfoBoxes data={dataSelected} createUser={createUser} setCreateUser={setCreateUser}/>
            {/*Graph Content */}
            <div id="main-content" className="w-full flex-1">

                <div className="flex flex-1 flex-wrap">

                    <div className="w-full py-6 xl:max-w-6xl">

                        {/*"Container" for the graphs"*/}
                        <div className="max-w-full lg:max-w-3xl xl:max-w-5xl">

                            {/*Table orders*/}
                            <div className="border-b p-3">
                                <h5 className="font-bold text-black inline-block">Usuarios</h5>
                                <button
                                    className="inline-block float-right text-white bg-orange-400 hover:bg-brand-orange hover:text-white focus:outline-none focus:shadow-outline font-bold py-2 px-4 rounded sm:m-auto lg:m-0"
                                    onClick={showCreateUser}>
                                    <i
                                        className="inline fa fa-user-plus fa-fw"/>
                                </button>
                                <Table columns={columns} data={users} onClick={row => openedAndShow(row.index)} selected={dataSelected}/>
                            </div>
                            {/*/Table orders*/}

                        </div>
                    </div>
                </div>

            </div>
        </Admin>
    );
}

export default Users;
