import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';
import { usePage, useRememberedState } from '@inertiajs/inertia-react';
import Layout from '../Shared/Layout';
import Map from '../components/Map';
import Stores from '../components/Select/Stores';
// import Geolocalated from "../components/Geolocalated";

// import styled from "styled-components";

// const TwoColumns = styled.div `
//     column-count: 2;
// `


function Landing(props) {
  const { stores } = usePage();
  const [store, setStore] = useRememberedState(1);
  const [closestStore, setClosestStore] = useState(false);

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
        let closestStoreId = store;
        stores.forEach(({ lat, lon, id }) => {
          const result = getDistanceFromLatLonInKm(latitude, longitude, lat, lon);
          // console.log('result =>', result);
          if (result < closestDistance) {
            // eslint-disable-next-line no-console
            // console.log('IN result < closestStore');
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
  return (
        <Layout title="Pan de muerto">
            <div className="w-full flex items-center flex-col mt-12 sm:mt-16 px-8">
                <img className="h-56 m-auto w-full object-scale-down align-middle sm:h-full sm:object-cover md:h-64 lg:h-full" src="/breads/Cuernito.png" alt=""/>
                <div className="text-center m-8 flex">
                    <div>
                        <p>Pequeña</p>
                        <p>$30.00</p>
                    </div>
                    <div>
                        <p>Mediana</p>
                        <p>$30.00</p>
                    </div>
                    <div>
                        <p>Grande</p>
                        <p>$30.00</p>
                    </div>
                </div>
                <div className="w-full text-justify pb-16">
                    {/*{console.log('stores =>', stores)}*/}
                     {/* <Geolocalated /> */}
                    <Stores
                        setStore={setStore}
                        stores={stores}
                        storeSelected={store && stores.filter((s) => s.id === store)[0]}/>
                    <hr/>
                    <Map store={store && stores.filter((s) => s.id === store)[0]} />
                    <hr/>
                    <a className="inline-block w-full text-center float-right text-white bg-orange-400 hover:bg-brand-orange hover:text-white focus:outline-none focus:shadow-outline font-bold py-2 px-4 rounded sm:m-auto lg:m-0" target="_blank" rel="noopener noreferrer" href={`https://maps.google.com/?q=${store.lat},${store.lon}&z=8`}>
                        ir a mapa
                    </a>
                </div>
            </div>
        </Layout>
  );
}

export default Landing;
