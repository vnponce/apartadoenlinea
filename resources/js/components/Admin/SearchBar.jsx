import React, { useState, useEffect } from 'react';
import Input from "../Input";
import Stores from "../Select/Stores";
import DateSelector from "../../components/DateSelector";
import {isInclusivelyAfterDay, SingleDatePicker} from "react-dates";
import styled from "styled-components";
import {Inertia} from "@inertiajs/inertia";

const DateWrapper = styled.div`
    .DateInput_input {
        padding: 7px 7px 5px;
    }
    .SingleDatePickerInput__withBorder {
        border-radius: 3px;
    }
`;

export default function SearchBar(props) {
    const { stores, searchValues } = props;
    console.log('[SearchBar] searchValues =>', searchValues);
    const [id, setId] = useState(searchValues.id || '');
    const [store, setStore] = useState(searchValues.store || '');
    const [storeObject, setStoreObject] = useState({});
    const [date, setDate] = useState(null);

    const [focus, setFocus] = useState(false);

    useEffect(() => {
        if(searchValues) {
            setStoreObject({
                id: store,
                name: 'Bernal',
            })
        }
    }, [searchValues]);
    const onChange = e => {
        setId(e.target.value);
    };

    const toSearch = () => {
      console.log(`Vamos a buscar id: ${id} , store: ${store}, date: ${date}`);
      let url = `/admin?id=${id}&store=${store}&date=${date}`;
      Inertia.visit(url)
    };

    return (
        <div className="flex">
            <div className="inline-block mx-2 w-1/4">
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
            <div className="inline-block mx-2 w-1/4">
                {console.log('[SearchBar] storeSelected =>', store)}
                {/* <Stores setStore={setStore} stores={stores} storeSelected={store} /> */}
                <Stores setStore={setStore} stores={stores} />
            </div>
            <div className="inline-block mx-2 w-1/4">
                {/* Día */}
                {/* <Input label="Día" id="date" placeholder="Día" value="12 de octubre"/> */}
                <div className="font-light text-gray-600 mt-4 lg:text-justify">
                    <label htmlFor="store" className="sm:text-center lg:text-justify text-sm hover:border-grey-900 italic sm:block">Día</label>

                    <DateWrapper className="w-fullbg-white sm:w-7/12 sm:m-auto lg:w-full">
                        <SingleDatePicker
                            id="date"
                            name="date"
                            date={date}
                            onDateChange={date => setDate(date)}
                            focused={focus}
                            onFocusChange={props => setFocus(props.focused)}
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
            <div className="flex items-end">
                <button
                    className="h-10 inline-block text-white bg-orange-400 hover:bg-brand-orange hover:text-white focus:outline-none focus:shadow-outline font-bold px-4 rounded"
                    onClick={toSearch}
                >Buscar</button>
            </div>
        </div>
    )
};
