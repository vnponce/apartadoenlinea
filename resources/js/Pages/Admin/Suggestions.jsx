import React, { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import Admin from '../../Shared/Admin';
// import Details from '../../components/Admin/Suggestions/Details';
import UsersInfoBoxes from "../../components/Admin/UsersInfoBoxes";
// import 'sweetalert2/src/sweetalert2.scss';
// import Swal from 'sweetalert2/dist/sweetalert2.js';
import Table from '../../components/Table';
import Content from '../../components/Admin/Content';


function Suggestions(props) {
  const { suggestions, flash: { success_message } } = props;
  console.log('suggestions =>', suggestions);
  const [dataSelected, setDataSelected] = useState(null);
  const [createUser, setCreateUser] = useState(null);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Nombre',
        accessor: 'name',
      },
      {
        Header: 'Sugerencia',
        accessor: 'suggestion',
        // Cell: ({ cell }) => {
        //     return cell.value === 'god' ? 'Gerencia' : cell.value;
        // }
      },
      {
        Header: 'Estatus',
        accessor: 'status',
      },
      {
        Header: '-',
        accessor: 'solver',
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
    ],
    [],
  );

  const openedAndShow = (index) => {
    const data = users[index];
    setCreateUser(false);
    setDataSelected(data);
  };

  const showCreateUser = () => {
    setCreateUser(true);
    setDataSelected(false);
  };

  useEffect(() => {
    if (success_message) {
      setCreateUser(false);
      setDataSelected(false);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: success_message,
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        location.reload();
      });
    }
  }, [success_message]);

  return (
        <Admin title="Panel">
            {/*<Details data={dataSelected} createUser={createUser} setCreateUser={setCreateUser}/>*/}
            <UsersInfoBoxes data={dataSelected} createUser={createUser} setCreateUser={setCreateUser}/>
            <Content>
                <h5 className="font-bold text-black inline-block">Sugerencias</h5>
                {/*<button*/}
                {/*    className="inline-block float-right text-white bg-orange-400 hover:bg-brand-orange hover:text-white focus:outline-none focus:shadow-outline font-bold py-2 px-4 rounded sm:m-auto lg:m-0"*/}
                {/*    onClick={showCreateUser}>*/}
                {/*    <i*/}
                {/*        className="inline fa fa-user-plus fa-fw"/>*/}
                {/*</button>*/}
                <Table columns={columns} data={suggestions.data} onClick={(row) => openedAndShow(row.index)} selected={dataSelected}/>
            </Content>
        </Admin>
  );
}

export default Suggestions;
