import React, { useState } from 'react';
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker, isInclusivelyAfterDay } from 'react-dates';
import styled from "styled-components";
import moment from 'moment';

const DateWrapper = styled.div`
    .DateInput_input {
        padding: 7px 7px 5px;
    }
    .SingleDatePickerInput__withBorder {
        border-radius: 3px;
    }
`;


export default function DateSelector(props) {
    // moment.locale('es');
    const today = moment();
    const { date, setDate, store = false } = props;
    console.log('storeValidDates =>', store);
    const [focus, setFocus] = useState(false);
    const pickUpAllowed = dayDate => {
        // @todo: que si son despues de las 8:00pm no poder poner el siguiente día, se hiría hasta el 'pasado mañana'
        const shopSelected = store;

        // if the sunday field means that the shop delivers on sundays, leave this, otherwise comment out
        if (shopSelected.sunday !== 'Cierra') {
            return false;
        }

        console.log('pickUpAllowed => ', dayDate.day(), dayDate);

        return dayDate.day() === 0;
        /*
        const dayNumber = dayDate.day();
        const today = new Date();
        const todayDayNumber = today.getDate();

        if (dayNumber <= todayDayNumber) return false;

        return !shopSelected.deliver_days.includes(dayNumber);

         */
    };
    return (
        <div className="font-light text-gray-600 mt-4 lg:text-justify">
            <label htmlFor="store" className="sm:text-center lg:text-justify text-sm hover:border-grey-900 italic sm:block">Día</label>

            <DateWrapper className="w-fullbg-white sm:w-7/12 sm:m-auto lg:w-full">
                <SingleDatePicker
                    id="date"
                    date={date}
                    onDateChange={date => setDate(date)}
                    focused={focus}
                    onFocusChange={props => setFocus(props.focused)}
                    disabled={!store}
                    className="w-fullbg-white sm:w-7/12 sm:m-auto lg:w-full"
                    // showDefaultInputIcon
                    /*
                    date={pickupDate}
                    focused={pickupFocused}
                    onDateChange={
                        this.onPickupDateChange
                    }
                    onFocusChange={
                        this.onPickupFocusChange
                    }
                    */
                    // Valida que no se pueda pedir el mismo día que se ingresa.
                    isOutsideRange={day =>
                        !isInclusivelyAfterDay(
                            day,
                            today
                        ) ||
                        day.isSame(today, 'd')
                    }
                    isDayBlocked={
                        pickUpAllowed
                    }
                    //-- orientation="vertical"
                    //-- verticalHeight={350}
                    displayFormat="D MMMM YY"
                    // disabled={!shopSelected}
                    numberOfMonths={1}
                    placeholder="Elige una fecha"
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
    )
};
