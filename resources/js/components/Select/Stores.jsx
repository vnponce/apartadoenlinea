import React, { useEffect } from 'react';
import Select, { components } from 'react-select';
import styled from 'styled-components';
import set from '@babel/runtime/helpers/esm/set';

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
const transformStoreList = (stores) => stores.map((store) => ({
  value: store.id,
  label: store.name,
  friendlyAddress: store.friendly_address,
}));
const ShopOptionComponent = (props) => {
  const {
    children,
    data: { friendlyAddress },
    isSelected,
  } = props;

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

  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1); // deg2rad below
    const dLon = deg2rad(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
            + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2))
            * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
  }

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        let closestDistance = Number.MAX_VALUE;
        let closestStoreId = storeSelected;
        stores.forEach(({ lat, lon, id }) => {
          const result = getDistanceFromLatLonInKm(latitude, longitude, lat, lon);
          // console.log('result =>', result);
          if (result < closestDistance) {
            // eslint-disable-next-line no-console
            closestDistance = result;
            closestStoreId = id;
          }
        });
        // console.log('closestDistance =>', closestDistance);
        console.log('closestStoreId =>', closestStoreId);
        setStore(closestStoreId);
      });
    } else {
      console.log('Not Available');
    }
  }, []);

  useEffect(() => {
    if (storeSelected) {
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
                placeholder="Elige una sucursal"
                components={{
                  Option: ShopOptionComponent,
                }}
                onChange={(selected) => {
                  setStore(selected.value);
                }}
                defaultValue={{ label: storeSelected.name, value: storeSelected.id }}
                value={{ label: storeSelected.name, value: storeSelected.id }}
                // inputValue={'Bernal'}  muestra bernal pero la unica opcin
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
  );
}
