import React from 'react';
// import AsyncSelect from 'react-select/async';
import AsyncCreatableSelect from 'react-select/async-creatable';
import {Inertia} from "@inertiajs/inertia";
export default function Autocomplete() {
    const customStylesBK = {
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

    const Svg = p => (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            focusable="false"
            role="presentation"
            {...p}
        />
    );

    const DropdownIndicator = () => (
        <div style={{ height: 24, width: 32 }}>
            <Svg>
                <path
                    d="M16.436 15.085l3.94 4.01a1 1 0 0 1-1.425 1.402l-3.938-4.006a7.5 7.5 0 1 1 1.423-1.406zM10.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"
                    fill="currentColor"
                    fillRule="evenodd"
                />
            </Svg>
        </div>
    );

    const promiseOptions = inputValue =>{
        if(inputValue && inputValue.length > 3) {
            return fetch(`/product/search?q=${inputValue}`, )
                .then(response => {
                    return response.json()
                })
                .then(json => {
                    let options = [];
                    options = json.map(item => ({
                        value: item.id,
                        label: item.name,
                    }));
                    return options;
                })
                .catch(error => console.log('error =>', error))
        }
    };

    const handleChange = selectedOption => {
        Inertia.visit(`/pan/${selectedOption.value}`)
    };

    const onCreateOption = selectedOption => {
        Inertia.visit(`/?search=${selectedOption}`);
    };

    return (
        <AsyncCreatableSelect
            // className="mr-3 w-1/3 bg-brand-orange border-solid border-b-2 border-brand-gray text-white"
            className="mr-3 w-1/3 bg-brand-orange"
            options={options}
            // styles={customStyles}
            isSearchable
            placeholder="Buscar"
            loadOptions={promiseOptions}
            onChange={handleChange}
            onCreateOption={onCreateOption}
            autoFocus
            // components={{ DropdownIndicator, IndicatorSeparator: null }}
        />
    )
};
