import React, { useState, useEffect } from 'react';
import Admin from "../../Shared/Admin";
import UsersInfoBoxes from "../../components/Admin/UsersInfoBoxes";
import { useTable } from 'react-table';
import {Inertia} from "@inertiajs/inertia";
import Styled from 'styled-components';
import classNames from 'classnames';
import Table from "../../components/Table";


function Users(props) {
    const { users, success_message } = props;
    console.log('users =>', users);
    const [dataSelected, setDataSelected] = useState(null);
    const [createUser, setCreateUser] = useState(null);
    const updateStatus = id => evt => {
        console.log('id =>', id);
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
                Header: 'email',
                accessor: 'email',
            },
            {
                Header: 'role',
                accessor: 'role',
            },
            {
                Header: 'password',
                accessor: 'password',
                Cell: data => (
                    <span className="">Change Password</span>
                ),
            },
            {
                Header: 'Tienda',
                accessor: 'stores',
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
        console.log('crear usuario');
        setCreateUser(true);
        setDataSelected(false);
    };

    useEffect(() => {
        console.log('ALGO');
        // openedAndShow(0);
    }, []);

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
                                        Crear usuario
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
