import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';
import { usePage, useRememberedState } from '@inertiajs/inertia-react';
import styled from 'styled-components';
import Layout from '../Shared/Layout';
import Map from '../components/Map';
import Stores from '../components/Select/Stores';
// import Geolocalated from "../components/Geolocalated";

const MainWrapper = styled.div`
    @media (min-width: 960px) {
        img {
            max-width: 1024px;
        }
    }
`;

const RotateWrapper = styled.div`
    // transform: rotate(180deg);
    transform: scaleX(-1);
`;

const Wrapper = styled.div`
    margin-bottom: 2rem;
`;


function Landing(props) {
  const { stores } = usePage();
  const [store, setStore] = useRememberedState(1);
  const [storeObject, setStoreObject] = useState(store && stores.filter((s) => s.id === store)[0]);

  useEffect(() => {
    setStoreObject(store && stores.filter((s) => s.id === store)[0]);
  }, [store]);
  return (
        <Layout title="Pan de muerto">
            <MainWrapper className="min-h-full bg-indigo-900 w-full flex items-center flex-col px-8">
                <div className="pt-20 text-4xl text-center md:text-6xl" style={{ fontFamily: 'Rye' }}>
                    <div className="flex">
                        <RotateWrapper>
                            <img className="h-10 md:h-16" src="/images/decorator-pan-muerto.svg" alt=""/>
                        </RotateWrapper>
                        <span className="text-orange-200">PAN DE</span>
                        <img className="h-10 md:h-16" src="/images/decorator-pan-muerto.svg" alt=""/>
                    </div>
                    <div className="text-orange-200 -mt-4 md:-mt-8">MUERTO</div>
                </div>
                {/* precios */}
                <div className="w-4/5 text-orange-200 text-center mt-6 flex justify-around md:text-3xl">
                    <div>
                        <p className="text-brand-orange">Pequeño</p>
                        <p>$30.00</p>
                    </div>
                    <div>
                        <p className="text-brand-orange">Mediano</p>
                        <p>$30.00</p>
                    </div>
                    <div>
                        <p className="text-brand-orange">Grande</p>
                        <p>$30.00</p>
                    </div>
                </div>
                {/* pan */}
                {/* -mt-20 */}
                <img className="h-56 -mt-20 md:m-auto w-full object-scale-down align-middle sm:h-full sm:object-cover sm:h-64 md:-mt-32 lg:h-full" src="/images/pan-de-muerto.png" alt=""/>
                {/* mapa */}
                <div className="w-full text-justify pb-20">
                    <Wrapper>
                        <Stores
                            setStore={setStore}
                            stores={stores}
                            storeSelected={store && stores.filter((s) => s.id === store)[0]}/>
                    </Wrapper>
                    <Wrapper>
                        <Map store={storeObject} />
                    </Wrapper>
                    <Wrapper>
                        <a className="mb-5 pb-3 inline-block w-full text-center float-right text-white bg-orange-400 hover:bg-brand-orange hover:text-white focus:outline-none focus:shadow-outline font-bold py-2 px-4 rounded sm:m-auto lg:m-0" target="_blank" rel="noopener noreferrer" href={`https://maps.google.com/?q=${storeObject.lat},${storeObject.lon}&z=8`}>
                            ir a mapa
                        </a>
                    </Wrapper>
                </div>
            </MainWrapper>
        </Layout>
  );
}

export default Landing;
