import React, { useState, useEffect } from 'react';
import Select from "react-select";
import styled from "styled-components";
import moment from "moment";

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
        });
    }
    return hours;
};

export default function Hour(props) {
    const { hour, setHour, store, date } = props;
    const gapTimeInMinutes = 30;

    return (
        <SelectWrapper className="font-light text-gray-600 mt-4 lg:text-justify">
            <label htmlFor="hour" className="sm:text-center lg:text-justify text-sm hover:border-grey-900 italic sm:block">Hora</label>
            <Select
                options={getHoursFromStore(store, date, gapTimeInMinutes)}
                inputId="hour"
                name="hour"
                placeholder="Elige una hora"
                className="w-fullbg-white sm:w-7/12 sm:m-auto lg:w-full"
                onChange={
                    hour => setHour(hour.value)
                }
                isDisabled={!date}
                // defaultValue={defaultValue}
            />
        </SelectWrapper>
    )
};
