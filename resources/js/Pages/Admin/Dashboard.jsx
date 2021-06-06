import React, { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Admin from '../../Shared/Admin';
import InfoBoxes from '../../components/Admin/InfoBoxes';
import Table from '../../components/Table';
import SearchBar from '../../components/Admin/SearchBar';
import Content from '../../components/Admin/Content';
import { getParameterByName } from '../../Shared/utils';
import Pagination from "../../components/Pagination";
import {useWindowSize} from "../../hooks/useWindowSize";
import Accordion from "../../components/Accordion";


function Dashboard(props) {
  const { auth } = usePage();
  const {
    orders, orderAll, success_message, order, stores, searchValues,
  } = props;
  const [dataSelected, setDataSelected] = useState(null);
  const [isPaginateActive, setIsPaginateActive] = useState(false);
  const [isHistoric, setIsHistoric] = useState(false);
  const [accordionText, setAccordionText] = useState('');
  const [mobileShowInfoBoxes, setMobileShowInfoBoxes] = useState(false);
  const [isInfoBoxOpen, setIsInfoBoxOpen] = useState(false);
  const { isLessThanLG } = useWindowSize();

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


  const openedAndShow = (index) => {
    const data = orders[index];
    setDataSelected(data);
    setIsInfoBoxOpen(true);
    if(isLessThanLG) {
      setMobileShowInfoBoxes(true);
    }
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
            { ( (isLessThanLG && isInfoBoxOpen) || !isLessThanLG ) && (
                <InfoBoxes data={dataSelected}/>
            )}
            {/* Graph Content */}
            {!mobileShowInfoBoxes && (
                <Content>
                    <Accordion text={accordionText}>
                        <SearchBar stores={stores} searchValues={searchValues} setAccordionText={setAccordionText}/>
                    </Accordion>
                    <div className="flex">
                        <h5 className="font-bold text-black w-3/12">{isHistoric ? 'Pedidos anteriores' : 'Pedidos'}</h5>
                        |
                        <InertiaLink
                            href={isHistoric ? '/admin' : '/admin?date=historic&status=all&sort=desc&get=paginate' }
                            className="ml-3">
                            {isHistoric ? 'Pedidos' : 'Pedidos anteriores'}
                        </InertiaLink>
                    </div>
                    <div className="w-full overflow-y-hidden">
                        <Table columns={columns} data={orders} onClick={(row) => openedAndShow(row.index)} selected={dataSelected}/>
                    </div>
                    {isPaginateActive && (
                        <Pagination items={orderAll} />
                    )}
                </Content>
            )}
        </Admin>
  );
}

export default Dashboard;
