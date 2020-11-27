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

const DateWrapper = styled.div`
    .DateInput_input {
        padding: 7px 7px 5px;
    }
    .SingleDatePickerInput__withBorder {
        border-radius: 3px;
    }
`;

export default function SearchBar(props) {
  const { auth: { user }, stores } = usePage();
  const { searchValues } = props;
  // const [id, setId] = useState(searchValues.id || '');
  const [id, setId] = useState('');
  // const [store, setStore] = useState(searchValues.store || '');
  const [store, setStore] = useState('');
  const [storeObject, setStoreObject] = useState({});
  const [date, setDate] = useState(null);
  const [status, setStatus] = useState(searchValues.status);

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
  function getParameterByName(name) {
    const match = RegExp(`[?&]${name}=([^&]*)`).exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
  }

  useEffect(() => {
    console.log(getParameterByName('id'));
    const queryId = getParameterByName('id');
    setId(queryId || '');
    const queryStore = getParameterByName('store');
    setStore(queryStore || '');
  }, []);

  useEffect(() => {
    // if (searchValues && searchValues.store !== '' && searchValues.store) {
    //   const searchData = stores.find((current) => current.id === store * 1);
    //   setStoreObject({
    //     id: searchData.id,
    //     name: searchData.name,
    //     friendlyAddress: searchData.friendly_address,
    //   });
    // }
    if (searchValues && searchValues.date !== '') {
      // if search values has date value, needs to be set datepicker component with date const.
      setDate(moment(searchValues.date));
    }
    if (searchValues && searchValues.status !== '') {
      // if search values has date value, needs to be set datepicker component with date const.

      setStatus(searchValues.status);
    }
  }, [searchValues]);

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

  const toSearch = () => {
    // console.log(`Vamos a buscar id: ${id} , store: ${storeObject.id}, date: ${date}, status: ${status.value}`);
    const searchId = id ? `id=${id}` : '';
    const searchStore = storeObject && storeObject.id ? `store=${storeObject.id}` : '';
    const searchDate = date ? `date=${date}` : '';
    const searchStatus = status ? `status=${status.value}` : '';

    const url = `/admin?${searchId}&${searchStore}&${searchDate}&${searchStatus}`;
    Inertia.visit(url);
  };

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

  return (
        <div className="flex">
            <div className="inline-block mx-2 w-1/5">
                <Input
                    id="id"
                    label="Id"
                    onChange={onChange}
                    placeholder="ej. 234"
                    error={[]}
                    onKeyDown={onChange}
                    value={id}
                />
            </div>
            { user.isAdmin && (
                <div className="inline-block mx-2 w-1/5">
                    {/* <Stores setStore={setStore} stores={stores} storeSelected={store} /> */}
                    <Stores setStore={setStore} stores={stores} storeSelected={storeObject}/>
                </div>
            )}
            <div className="inline-block mx-2 w-1/5">
                    {/* Día */}
                    {/* <Input label="Día" id="date" placeholder="Día" value="12 de octubre"/> */}
                    <div className="font-light text-gray-600 mt-4 lg:text-justify">
                        <label htmlFor="store" className="sm:text-center lg:text-justify text-sm hover:border-grey-900 italic sm:block">Día</label>

                        <DateWrapper className="w-fullbg-white sm:w-7/12 sm:m-auto lg:w-full">
                            <SingleDatePicker
                                id="date"
                                name="date"
                                date={date}
                                onDateChange={(date) => setDate(date)}
                                focused={focus}
                                onFocusChange={(props) => setFocus(props.focused)}
                                // disabled={!store}
                                className="w-fullbg-white sm:w-7/12 sm:m-auto lg:w-full"
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
            <div className="inline-block mx-2 w-1/5">
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
            <div className="flex items-end">
                <button
                    className="h-10 inline-block text-white bg-orange-400 hover:bg-brand-orange hover:text-white focus:outline-none focus:shadow-outline font-bold px-4 rounded"
                    onClick={toSearch}
                >Buscar</button>
            </div>
        </div>
  );
}
