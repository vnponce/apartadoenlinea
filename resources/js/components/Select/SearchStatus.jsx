import React, { useEffect } from 'react';
import Select from "react-select";
import styled from "styled-components";

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

export default function SearchStatus(props) {
    const { status, statuses, setStatus } = props;
    console.log('status =>', status);
    console.log('statuses =>', statuses);
    console.log('setStatus =>', setStatus);

    return (
        <SelectWrapper className="font-light text-gray-600 mt-4 lg:text-justify">
            <label htmlFor="store" className="sm:text-center lg:text-justify text-sm hover:border-grey-900 italic sm:block">Sucursal</label>
            <Select
                options={[
                    {label: 'No entregados', value: 'no-entregados'},
                    {label: 'Entregados', value: 'entregados'},
                    {label: 'Todos', value: 'todos'},
                ]}
                inputId="store"
                name="store"
                className="w-fullbg-white sm:w-7/12 sm:m-auto lg:w-full"
                // defaultMenuIsOpen
                classNamePrefix="stores-selector"
                /*
                getOptionValue={option =>
                    option.key
                }
                getOptionLabel={option =>
                    option.key
                }
                isClearable
                 */
                isClearable
                placeholder="Elige estatus"
                onChange={selected => {
                    console.log('selected =>', selected);
                    if(selected === null) {
                        console.log('selected =>', selected);
                        setStore(null)
                    } else {
                        setStore(selected.value)
                    }
                }}
                // defaultValue={{label: storeSelected.name }}
                value={[{label: 'No entregados'}]}
                /*
                onFocus={
                    this.onShopFocus
                }
                value={shopSelected}
                invalid={
                    this.state
                        .errorsState.store
                }
                 */
            />
        </SelectWrapper>
    )
};
