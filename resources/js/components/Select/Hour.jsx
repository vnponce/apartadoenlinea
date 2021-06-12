import React, {useEffect} from 'react';
import Select from "react-select";
import styled from "styled-components";
import moment from 'moment';

const SelectWrapper = styled.div`
  .shop-option-description {
    display: block;
    font-size: 0.8rem;
    color: #6f6f6f;

    &.selected {
      color: #fff !important;
    }
  }
`;

const isToday = date => date.isSame(moment(), 'day');

const isAvailableHour = date => {
    // -> ver la hora en el equipo
    const now = moment().add(0, 'minutes');
    // -> ver que la hora en el equipo sea mayor a la hora en cuestión
    return date.diff(now) < 0;
}

const isDisabled = (date, hour) => {
    return isToday(date) && isAvailableHour(hour);
}

const getTimeFromString = (date, time) => {
    const clone = date.clone().subtract(12, 'h');
    const [hours, minutes] = time.split(':');
    return clone.add(hours, 'hours').add(minutes, 'minutes');
};

const getHoursFromStore = (store, date, gapTimeInMinutes) => {
    if (!store || !date) {
        return false;
    }
    let hourPropertyName = 'delivery_time';
    // if(date && date.isoWeekday() === 7 && !date.isSame('Sun Nov 01 2020 12:00:00 GMT-0600')) {
    if(date && date.isoWeekday() === 7) {
        hourPropertyName = 'sunday';
    }
    const [openString, closeString] = store[hourPropertyName].split(' a '); // 7:00 a 21:00
    const open = getTimeFromString(date, openString);
    const close = getTimeFromString(date, closeString);
    const hours = [];
    for(open; open <= close; open.add(gapTimeInMinutes, 'm')) {
        const time = open.format('H:mm');
        hours.push({
            value: time,
            label: time,
            isDisabled: isDisabled(date, open),
        });
    }
    return hours;
};

export default function Hour(props) {
    const { hour, setHour, store, date } = props;
    const gapTimeInMinutes = 30;

    // validar al cambiar el date
    useEffect(() => {
        // si la hora ya no es posible borrar el value
        console.log('date =>', date);
        console.log('hour =>', hour);
        // Si es today
        // -> si es hora no posible
        //    -> poner hour null
    }, [date]);

    return (
        <SelectWrapper className="font-light text-gray-600 mt-4 lg:text-justify">
            <label htmlFor="hour" className="sm:text-center lg:text-justify text-sm hover:border-grey-900 italic sm:block">Hora</label>
            <Select
                options={getHoursFromStore(store, date, gapTimeInMinutes)}
                inputId="hour"
                name="hour"
                placeholder="Elige una hora"
                className="w-full"
                classNamePrefix="hour-selector"
                onChange={
                    hour => setHour(hour.value)
                }
                isDisabled={!date}
                // defaultValue={defaultValue}
                defaultValue={{ label: hour, value: hour }}
                value={{ label: hour, value: hour }}
            />
        </SelectWrapper>
    )
};
