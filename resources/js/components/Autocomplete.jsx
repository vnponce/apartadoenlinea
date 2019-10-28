import React from 'react';
import Select from "react-select";

export default function Autocomplete() {
    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            borderBottom: '1px dotted pink',
            color: state.isSelected ? 'red' : 'blue',
            padding: 20,
            // backgroundColor: 'black',
        }),
        control: () => ({
            // none of react-select's styles are passed to <Control />
            // width: 200,
            // backgroundColor: 'black',
            display: 'flex',
            // borderBottom: '1px solid grey',
        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';

            return { ...provided, opacity, transition };
        }
    };

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ];

    return (
        <Select
            className="mr-3 w-1/3 bg-brand-orange border-solid border-b-2 border-brand-gray text-white"
            options={options}
            styles={customStyles}
            isSearchable
        />
    )
};
