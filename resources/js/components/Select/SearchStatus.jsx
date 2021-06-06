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

    return (
        <SelectWrapper className="font-light text-gray-600 lg:text-justify">
            <label htmlFor="store" className="sm:text-center lg:text-justify text-sm hover:border-grey-900 italic sm:block">Estatus</label>
            <Select
                options={statuses}
                inputId="status"
                name="status"
                className="w-full"
                // defaultMenuIsOpen
                classNamePrefix="status-selector"
                /*
                getOptionValue={option =>
                    option.key
                }
                getOptionLabel={option =>
                    option.key
                }
                isClearable
                 */
                // isClearable
                placeholder="Elige estatus"
                onChange={selected => {
                    if(selected === null) {
                        setStatus(null)
                    } else {
                        setStatus(selected.value)
                    }
                }}
                // defaultValue={{label: storeSelected.name }}
                value={[{label: status.label}]}
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
