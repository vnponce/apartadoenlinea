import React, { useState, useEffect } from 'react';
// import { useTable } from 'react-table';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
// import { Pagination } from 'react-laravel-paginex';
import Admin from '../../Shared/Admin';
import InfoBoxes from '../../components/Admin/InfoBoxes';
import Table from '../../components/Table';
import SearchBar from '../../components/Admin/SearchBar';
import Content from '../../components/Admin/Content';
import { getParameterByName } from '../../Shared/utils';

function Dashboard(props) {
  const { auth } = usePage();
  const {
    orders, orderAll, success_message, order, stores, searchValues,
  } = props;
  const [dataSelected, setDataSelected] = useState(null);
  const [isPaginateActive, setIsPaginateActive] = useState(false);
  const [isHistoric, setIsHistoric] = useState(false);
  const updateStatus = (id) => (evt) => {
    Inertia.put(`/pedido/${id}`, {
      status: evt.target.value,
    });
  };

  const columns = React.useMemo(
    () => [
      // {
      //     Header: '-',
      //     accessor: 'uuid',
      // },
      {
        Header: 'Cliente',
        accessor: 'customer',
        Cell: (data) => (
                    <span className="">
                        {/* {console.log('data client =>', data)} */}
                        {data.cell.value.name}</span>
        ),
      },
      {
        Header: 'Sucrusal',
        accessor: 'store',
        Cell: (data) => (
                    <span className="">{data.cell.value.name}</span>
        ),
      },
      {
        Header: 'Fecha',
        accessor: 'date',
        Cell: (data) => (
                    <span className="">{data.cell.value.formatted}</span>
        ),
      },
      {
        Header: 'Estatus',
        accessor: 'status',
        Cell: (data) => (
                    <span className="">
                        {data.cell.row.original.canceled ? 'Cancelado' : data.cell.value.step}
                    </span>
        ),
      },
      {
        Header: 'Pagado',
        accessor: 'payed',
        Cell: (data) => (
                    <span className="">{data.cell.value.label}</span>
        ),
      },
    ],
    [],
  );

  { /* <> */ }
  { /*    /!* start select *!/ */ }
  { /*    <div className="inline-block relative w-full"> */ }
  { /*        <select */ }
  { /*            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" */ }
  { /*            onChange={updateStatus(data.cell.row.original.id)} */ }
  { /*        > */ }
  { /*            <option value="opened" selected={data.cell.value.original !== 'opened'}>Visto</option> */ }
  { /*            <option value="placed" selected={data.cell.value.original === 'placed'}>En ruta/sucursal</option> */ }
  { /*            <option value="delivered" selected={data.cell.value.original === 'delivered'}>Entregada</option> */ }
  { /*            <option value="-" selected={data.cell.value.original === '-'}>Pendiente</option> */ }
  { /*        </select> */ }
  { /*        <div */ }
  { /*            className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"> */ }
  { /*            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"> */ }
  { /*                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> */ }
  { /*            </svg> */ }
  { /*        </div> */ }
  { /*    </div> */ }
  { /*    /!* end select *!/ */ }
  { /* </> */ }

  const openedAndShow = (index) => {
    const data = orders[index];
    setDataSelected(data);
    if (auth.user.isMatrix && data.status.original === 'created') {
      Inertia.put(`/admin/orders/${data.id}`, {
        status: 'opened',
      });
    }
    // if(data.status.original !== 'created') {
    //     return false;
    // }
  };

  useEffect(() => {
    // console.log('orderAll =>', orderAll);
    const requestGetPagiante = getParameterByName('get') === 'paginate';
    setIsPaginateActive(requestGetPagiante);
    const requestHistorict = getParameterByName('date') === 'historic';
    setIsHistoric(requestHistorict);
  }, []);
  useEffect(() => {
    // openedAndShow(0);
    if (orders && dataSelected) {
      const orderUpdated = orders.find((order) => order.id === dataSelected.id);
      setDataSelected(orderUpdated);
    }
  }, [orders]);

  return (
        <Admin title="Panel">
            <InfoBoxes data={dataSelected}/>
            {/* Graph Content */}
            <Content>
                <SearchBar stores={stores} searchValues={searchValues}/>
                <div>
                    <h5 className="font-bold text-black">{isHistoric ? 'Pedidos anteriores' : 'Pedidos'}</h5>
                    <InertiaLink
                        href={isHistoric ? '/admin' : '/admin?date=historic&status=all&sort=desc&get=paginate' }
                        className="flex-2 m-auto">
                        {isHistoric ? 'Pedidos' : 'Pedidos anteriores'}
                    </InertiaLink>
                </div>
                <Table columns={columns} data={orders} onClick={(row) => openedAndShow(row.index)} selected={dataSelected}/>
                {isPaginateActive && (
                    <div className="py-10 block w-full flex justify-center">
                        {orderAll && orderAll.data && orderAll.data.length > 0 && (
                            <div class="pagination mt-6 -mb-1 flex flex-wrap">
                            {orderAll.links && orderAll.links.map((link, key) => {
                              if (link.url === null) {
                                return <div key={key} className={`page-link mr-1 mb-1 px-4 py-3 text-sm border rounded text-gray-400 ${link.label === 'Next' ? 'ml-auto' : ''}`}>{ link.label }</div>;
                              }
                              return <InertiaLink
                                    key={key}
                                    class={`page-link mr-1 mb-1 px-4 py-3 text-sm border rounded hover:bg-white focus:border-indigo-500 focus:text-indigo-500 ${link.active ? 'bg-white' : ''} ${link.label === 'Next' ? 'ml-auto' : ''}`}
                                    // :class="{ 'bg-white': link.active, 'ml-auto': link.label === 'Next' }"
                                    href={link.url}>
                                        { link.label }
                                </InertiaLink>;
                            })}
                            </div>
                        )}
                    </div>
                )}
            </Content>
        </Admin>
  );
}

export default Dashboard;
