import React, { useState, useEffect } from 'react';
// import { SingleDatePicker } from 'react-dates';
import styled from 'styled-components';
import { Inertia } from '@inertiajs/inertia';
import moment from 'moment';
import SearchUsers from '../../Select/SearchUsers';
import Input from '../../Input';
import SearchStatus from '../../Select/SearchStatus';
import { getParameterByName } from '../../../Shared/utils';
import ListItemValue from "../../ListItemValue";

const DateWrapper = styled.div`
    .DateInput_input {
        padding: 7px 7px 5px;
    }
    .SingleDatePickerInput__withBorder {
        border-radius: 3px;
    }
`;

export default function SearchBar(props) {
  const { solvers, setAccordionText } = props;
  const [name, setName] = useState('');
  const [solver, setSolver] = useState('');
  const [solverObject, setSolverObject] = useState({});
  const [date, setDate] = useState(null);
  const [status, setStatus] = useState({
    label: 'No solucionado',
    value: 'not-solved',
  });

  const [focus, setFocus] = useState(false);

  const setStatusObject = (currentStatus) => {
    switch (currentStatus) {
      case 'not-solved':
        setStatus({
          label: 'No solucionado',
          value: 'not-solved',
        });
        break;
      case 'solved':
        setStatus({
          label: 'Solucionado',
          value: 'solved',
        });
        break;
      // case 'all':
      //   setStatus({
      //     label: 'Todos',
      //     value: 'all',
      //   });
      //   break;
      default:
        setStatus({
          label: '',
          value: '',
        });
        break;
    }
  };

  useEffect(() => {
    const queryName = getParameterByName('name');
    setName(queryName || '');
    const querySolver = getParameterByName('solver');
    setSolver(querySolver || '');
    const queryDate = getParameterByName('date');
    setDate(moment(queryDate));
    const queryStatus = getParameterByName('status');
    setStatusObject(queryStatus);

    // creando el texto
    setAccordionText(<ListItemValue
        items={[
        {
            filter: 'nombre:',
            value: queryName,
        },
        {
            filter: 'solucionado:',
            value: querySolver ? solvers.find(current => current.id === querySolver * 1).name : null,
        },
        {
            filter: 'status',
            value: queryStatus,
        }
        ]}
    />);
  }, []);

  useEffect(() => {
    if (solver && solvers) {
      console.log('solver =>', solver);
      // convert string to number
      const solverSelected = solvers.find((current) => current.id === solver * 1);
      console.log('solverSelected =>', solverSelected);
      setSolverObject({
        value: solverSelected.id,
        label: solverSelected.name,
      });
    }
    // if user clear store selector it must remove selected store
    if (solver === null) {
      setSolverObject({
        value: '',
        label: '',
      });
    }
  }, [solver]);

  const onChange = (e) => {
    if (e.key === 'Enter') {
      toSearch();
      // return false;
    }
    setName(e.target.value);
  };

  const setDateParam = () => {
    if (date) {
      return `date=${date}`;
    }
    // ??
    if (getParameterByName('date')) {
      if (getParameterByName('date') === 'historic') {
        return 'date=historic';
      }
    }
    return '';
  };

  const toSearch = () => {
    const searchName = name ? `name=${name}` : '';
    const searchSolver = solverObject && solverObject.value ? `solver=${solverObject.value}` : '';
    // const searchDate = date ? `date=${date}` : '';
    const searchStatus = status && status.value ? `status=${status.value}` : '';

    // const paginateQuery = getParameterByName('get') === 'paginate' ? 'get=paginate' : '';
    // const sortQuery = getParameterByName('sort') === 'desc' ? 'sort=desc' : '';

    // console.log('url builder', urlBuilder(queriesWithValue))
    // const url = `/admin?${searchString}&${searchSolver}&${searchDate}&${searchStatus}`;
    const url = `/admin/suggestions?${searchName}&${searchStatus}&${searchSolver}`;
    // Inertia.visit(urlBuilder(queriesWithValue));
    Inertia.visit(url);
  };

  return (
        <div className="flex flex-col sm:flex-row">
            <div className="w-full sm:inline-block sm:mx-2 sm:w-1/5">
                <Input
                    id="id"
                    label="Nombre o correo"
                    onChange={onChange}
                    placeholder="ej. Juan"
                    error={[]}
                    onKeyDown={onChange}
                    value={name}
                />
            </div>
            <div className="w-full sm:inline-block sm:mx-2 sm:w-1/5">
                {/* <Stores setStore={setStore} stores={stores} storeSelected={store} /> */}
                <SearchUsers setUser={setSolver} users={solvers.map(u => ({ label: u.name, value: u.id }))} user={solverObject}/>
            </div>
            {/*<div className="inline-block mx-2 w-1/5">*/}
            {/*        /!* Día *!/*/}
            {/*        /!* <Input label="Día" id="date" placeholder="Día" value="12 de octubre"/> *!/*/}
            {/*        <div className="font-light text-gray-600 mt-4 lg:text-justify">*/}
            {/*            <label htmlFor="store" className="sm:text-center lg:text-justify text-sm hover:border-grey-900 italic sm:block">Día</label>*/}

            {/*            <DateWrapper className="w-fullbg-white sm:w-7/12 sm:m-auto lg:w-full">*/}
            {/*                <SingleDatePicker*/}
            {/*                    id="date"*/}
            {/*                    name="date"*/}
            {/*                    date={date}*/}
            {/*                    onDateChange={(date) => setDate(date)}*/}
            {/*                    focused={focus}*/}
            {/*                    onFocusChange={(props) => setFocus(props.focused)}*/}
            {/*                    // disabled={!store}*/}
            {/*                    className="w-fullbg-white sm:w-7/12 sm:m-auto lg:w-full"*/}
            {/*                    displayFormat="D MMMM YYYY"*/}
            {/*                    numberOfMonths={1}*/}
            {/*                    placeholder="Elige una fecha"*/}
            {/*                    isOutsideRange={() => false}*/}
            {/*                    phrases={{*/}
            {/*                      closeDatePicker:*/}
            {/*                            'Cerrar',*/}
            {/*                      clearDates: 'Limpiar',*/}
            {/*                    }}*/}
            {/*                    showClearDate*/}
            {/*                    block*/}
            {/*                />*/}
            {/*            </DateWrapper>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            <div className="w-full sm:inline-block sm:mx-2 sm:w-1/5">
                <SearchStatus
                    status={status}
                    setStatus={setStatusObject}
                    statuses={[
                      { label: '', value: '' },
                      { label: 'No solucionado', value: 'not-solved' },
                      { label: 'Solucionado', value: 'solved' },
                      // { label: 'Todos', value: 'all' },
                    ]}
                />
            </div>
            <div className="w-full sm:w-auto mt-2 sm:mt-0 flex items-end">
                <button
                    className="w-full h-10 inline-block text-white bg-orange-400 hover:bg-brand-orange hover:text-white focus:outline-none focus:shadow-outline font-bold px-4 rounded"
                    onClick={toSearch}
                >Buscar</button>
            </div>
        </div>
  );
}
