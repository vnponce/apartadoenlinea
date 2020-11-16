import React, { useState } from 'react';
import 'react-dates/initialize'
// import 'react-dates/lib/css/_datepicker.css';
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
    const [focus, setFocus] = useState(false);
    const pickUpAllowed = dayDate => {
        // @todo: que si son despues de las 8:00pm no poder poner el siguiente día, se hiría hasta el 'pasado mañana'
        const shopSelected = store;

        // if the sunday field means that the shop delivers on sundays, leave this, otherwise comment out
        if (shopSelected.sunday !== 'Cierra') {
            return false;
        }

        // console.log({ isSame: dayDate.isSame('2020-11-01'), dayDate});
        // if (dayDate.isSame('Sun Nov 01 2020 12:00:00 GMT-0600')) {
        //     console.log('mismo dia =>', dayDate);
        //     return false;
        // }
        // console.log({ dayDate });
        // if sunday return true to block day
        return dayDate.isoWeekday() === 7;
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
                    name="date"
                    date={date}
                    onDateChange={date => {
                        console.log('date format =>', date);
                        return setDate(date)
                    }}
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
                    // Esto debe aplicar si es un usuario normal y no de panadería
                    isOutsideRange={day =>
                        !isInclusivelyAfterDay(
                            day,
                            today
                        ) || false
                        // day.isSame(today, 'd')
                    }
                    isDayBlocked={
                        pickUpAllowed
                    }
                    //-- orientation="vertical"
                    //-- verticalHeight={350}
                    displayFormat="D MMMM YYYY"
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
