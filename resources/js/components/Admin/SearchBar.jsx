import React, { useState, useEffect } from 'react';
import { isInclusivelyAfterDay, SingleDatePicker } from 'react-dates';
import styled from 'styled-components';
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/inertia-react';
import moment from 'moment';
import DateSelector from '../../components/DateSelector'; // jajaja if I remove this line, i get white page jajajaja
import Stores from '../Select/SearchStores';
import Input from '../Input';
import SearchStatus from '../Select/SearchStatus';
import { getParameterByName } from '../../Shared/utils';
import ListItemValue from "../ListItemValue";

const DateWrapper = styled.div`
    .DateInput_input {
        padding: 7px 7px 5px;
    }
    .SingleDatePickerInput__withBorder {
        border-radius: 3px;
    }
`;

export default function SearchBar({ setAccordionText }) {
  const { auth: { user }, stores } = usePage();
  const [id, setId] = useState('');
  const [store, setStore] = useState('');
  const [storeObject, setStoreObject] = useState({});
  const [date, setDate] = useState(null);
  const [status, setStatus] = useState({
    label: 'No entregados',
    value: 'not-delivered', // @todo: not-delivered
  });

  const [focus, setFocus] = useState(false);

  // function pressEnterToSearch(event) {
  //     if (event.defaultPrevented) {
  //         return; // Should do nothing if the default action has been cancelled
  //     }
  //
  //     if (event.key === 'Enter') {
  //         toSearch();
  //     }
  // }

  // useEffect(() => {
  //     document.addEventListener('keyup', pressEnterToSearch);
  //     return () => document.removeEventListener('keyup', pressEnterToSearch);
  // })
  //


  const setStatusObject = (currentStatus) => {
    switch (currentStatus) {
      case 'not-delivered':
        setStatus({
          label: 'No entregados',
          value: 'not-delivered',
        });
        break;
      case 'delivered':
        setStatus({
          label: 'Entregados',
          value: 'delivered',
        });
        break;
      case 'all':
        setStatus({
          label: 'Todos',
          value: 'all',
        });
        break;
      default:
        setStatus({
          label: 'No entregados',
          value: 'not-delivered',
        });
        break;
    }
  };

  const statusObjectBluePrint = {
      'not-delivered': {
          label: 'No entregados',
          value: 'not-delivered',
      },
      'delivered': {
          label: 'Entregados',
          value: 'delivered',
      },
      'all': {
          label: 'Todos',
          value: 'all',
      },
  }

  useEffect(() => {
    const queryId = getParameterByName('id');
    setId(queryId || '');
    const queryStore = getParameterByName('store');
    setStore(queryStore || '');
    const queryDate = getParameterByName('date');
    // @todo: think if we going to have more special status
    setDate((queryDate && queryDate !== 'historic') ? moment(queryDate) : null);
    const queryStatus = getParameterByName('status');
    setStatusObject(queryStatus);

    // creando el texto
    setAccordionText(<ListItemValue
      items={[
          {
              filter: 'nombre o id:',
              value: queryId,
          },
          {
              filter: 'Sucursal:',
              value: queryStore ? stores.find(current => current.id === queryStore * 1).name : null,
          },
          {
              filter: 'fecha:',
              value: (queryDate && queryDate !== 'historic') ? moment(queryDate).format('D MMMM, YYYY') : null,
          },
          {
              filter: 'Estatus:',
              value: queryStatus ? statusObjectBluePrint[queryStatus].label : null,
          }
      ]}
    />);
  }, []);

  useEffect(() => {
    if (store && stores) {
      // convert string to number
      const storeSelected = stores.find((current) => current.id === store * 1);
      setStoreObject({
        id: storeSelected.id,
        name: storeSelected.name,
        friendlyAddress: storeSelected.friendly_address,
      });
    }
    // if user clear store selector it must remove selected store
    if (store === null) {
      setStoreObject({
        id: '',
        name: '',
        friendlyAddress: '',
      });
    }
  }, [store]);
  const onChange = (e) => {
    if (e.key === 'Enter') {
      toSearch();
      // return false;
    }
    setId(e.target.value);
  };

  const setDateParam = () => {
    if (date) {
      return `date=${date}`;
    }
    if (getParameterByName('date')) {
      if (getParameterByName('date') === 'historic') {
        return 'date=historic';
      }
    }
    return '';
  };

  // const urlBuilder = queryParams => {
  //     if(queryParams.length) {
  //         let url;
  //         queryParams.forEach((query, index) => {
  //             console.log('query =>', query);
  //             console.log('index =>', index);
  //             if(index === 0){
  //                 url = url + `?${Object.keys(query)[0]}=${Object.values(query)[0]}`;
  //             } else {
  //                 url = url + `&${Object.keys(query)[0]}=${Object.values(query)[0]}`;
  //             }
  //             console.log('url =>', url);
  //             // url = url + '&'
  //         });
  //     }
  //     return '';
  // }
  const toSearch = () => {
    // const queries = [
    //   'id',
    //   'store',
    //   'date',
    //   'status',
    //   'get',
    // ];
    // const queriesWithValue = queries.filter(query => getParameterByName(query) && getParameterByName(query) !== '').map((query) => {
    //   const value = getParameterByName(query);
    //     console.log('[query] =>,', [query]);
    //   return { [query]: value };
    // });
    // console.log('queriesWithValue', queriesWithValue);
    // console.log(`Vamos a buscar id: ${id} , store: ${storeObject.id}, date: ${date}, status: ${status.value}`);
    const searchId = id ? `id=${id}` : '';
    const searchStore = storeObject && storeObject.id ? `store=${storeObject.id}` : '';
    const searchDate = setDateParam();
    // const searchDate = date ? `date=${date}` : '';
    const searchStatus = status ? `status=${status.value}` : '';
    const paginateQuery = getParameterByName('get') === 'paginate' ? 'get=paginate' : '';
    const sortQuery = getParameterByName('sort') === 'desc' ? 'sort=desc' : '';

    // console.log('url builder', urlBuilder(queriesWithValue))
    const url = `/admin?${paginateQuery}&${searchId}&${searchStore}&${searchDate}&${searchStatus}&${sortQuery}`;
    // Inertia.visit(urlBuilder(queriesWithValue));
    Inertia.visit(url);
  };

  return (
        <div className="flex flex-col sm:flex-row sm:items-end">
            <div className="inline-block mx-2 flex-1">
                <Input
                    id="id"
                    label="Nombre o Id"
                    onChange={onChange}
                    placeholder="ej. Juan"
                    error={[]}
                    onKeyDown={onChange}
                    value={id}
                />
            </div>
            { user.isAdmin && (
                <div className="inline-block mx-2 flex-1">
                    {/* <Stores setStore={setStore} stores={stores} storeSelected={store} /> */}
                    <Stores setStore={setStore} stores={stores} storeSelected={storeObject}/>
                </div>
            )}
            <div className="inline-block mx-2 flex-1">
                    {/* Día */}
                    {/* <Input label="Día" id="date" placeholder="Día" value="12 de octubre"/> */}
                    <div className="font-light text-gray-600 mt-4 lg:text-justify">
                        <label htmlFor="store" className="sm:text-center lg:text-justify text-sm hover:border-grey-900 italic sm:block">Día</label>

                        <DateWrapper className="w-full">
                            <SingleDatePicker
                                id="date"
                                name="date"
                                date={date}
                                onDateChange={(date) => setDate(date)}
                                focused={focus}
                                onFocusChange={(props) => setFocus(props.focused)}
                                // disabled={!store}
                                className="w-full"
                                displayFormat="D MMMM YYYY"
                                numberOfMonths={1}
                                placeholder="Elige una fecha"
                                isOutsideRange={() => false}
                                phrases={{
                                  closeDatePicker:
                                        'Cerrar',
                                  clearDates: 'Limpiar',
                                }}
                                showClearDate
                                block
                            />
                        </DateWrapper>
                    </div>
                </div>
            <div className="inline-block mx-2 flex-1">
                <SearchStatus
                    status={status}
                    setStatus={setStatusObject}
                    statuses={[
                      { label: 'No entregados', value: 'not-delivered' },
                      { label: 'Entregados', value: 'delivered' },
                      { label: 'Todos', value: 'all' },
                    ]}
                />
            </div>
            <div className="w-auto mx-2 sm:w-auto mt-2 sm:mt-0 flex items-end">
                <button
                    className="w-full h-10 inline-block text-white bg-orange-400 hover:bg-brand-orange hover:text-white focus:outline-none focus:shadow-outline font-bold px-4 rounded"
                    onClick={toSearch}
                >Buscar</button>
            </div>
        </div>
  );
}
