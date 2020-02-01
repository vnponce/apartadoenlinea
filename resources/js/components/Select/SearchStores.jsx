import React, { useEffect } from 'react';
import Select, {components} from "react-select";
import styled from "styled-components";
import set from "@babel/runtime/helpers/esm/set";

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
const transformStoreList = stores => stores.map(store => ({
    value: store.id,
    label: store.name,
    friendlyAddress: store.friendly_address,
}));
const ShopOptionComponent = props => {
    const {
        children,
        data: { friendlyAddress },
        isSelected,
    } = props;

    // console.log('ShopOptionComponent props =>', props);
    return (
        <components.Option {...props}>
            <span className="shop-option-name">{children}</span>
            <span
                className={`shop-option-description${isSelected ? ' selected' : ''}`}
            >
        {friendlyAddress}
      </span>
        </components.Option>
    );
};

export default function Stores(props) {
    const { setStore, stores, storeSelected = false } = props;
    const storesToSelect = transformStoreList(stores);

    useEffect(() => {
        if(storeSelected){
            setStore(storeSelected.id);
        }
    }, []);

    return (
        <SelectWrapper className="font-light text-gray-600 mt-4 lg:text-justify">
            <label htmlFor="store" className="sm:text-center lg:text-justify text-sm hover:border-grey-900 italic sm:block">Sucursal</label>
            <Select
                options={storesToSelect}
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
                placeholder="Elige una sucursal"
                components={{
                    Option: ShopOptionComponent,
                }}
                onChange={selected => {
                    if(selected === null) {
                        setStore(null)
                    } else {
                        setStore(selected.value)
                    }
                }}
                // defaultValue={{label: storeSelected.name }}
                value={[{label: storeSelected.name, value: storeSelected.id}]}
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
