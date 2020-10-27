import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';
import { usePage, useRememberedState } from '@inertiajs/inertia-react';
import styled from 'styled-components';
import Layout from '../Shared/Layout';
import Map from '../components/Map';
import Stores from '../components/Select/Stores';
// import Geolocalated from "../components/Geolocalated";

const MainWrapper = styled.div`
    & > div {
        max-width: 1024px;
    }
    img {
        max-width: 1024px;
    }
    label[for="store"] {
        color: #feebc8;

    }
    @keyframes do-levitation {
      0% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(0px, 5px);
      }
    }
    @keyframes do-levitation-reverted {
      0% {
        transform: translate(0px, 5px);
      }
      100% {
        transform: translate(0px, 0px);
      }
    }

    .levitate {
      animation: do-levitation 3s alternate ease-in-out infinite;
    }
    .levitate-delayed {
      animation: do-levitation-reverted 3.3s alternate ease-in-out infinite;
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
            <MainWrapper className="h-full bg-indigo-900 w-full flex items-center flex-col px-8">
                <div className="pt-20 text-4xl text-center md:text-6xl" style={{ fontFamily: 'Rye' }}>
                    <div className="flex">
                        <RotateWrapper>
                            <img className="levitate h-10 md:h-16" src="/images/decorator-pan-muerto.svg" alt=""/>
                        </RotateWrapper>
                        <span className="text-orange-200">PAN DE</span>
                        <img className="levitate-delayed h-10 md:h-16" src="/images/decorator-pan-muerto.svg" alt=""/>
                    </div>
                    <div className="text-orange-200 -mt-4 md:-mt-8">MUERTO</div>
                </div>
                {/* precios */}
                <div className="w-4/5 text-orange-200 text-center mt-6 flex justify-around md:text-3xl">
                    <div>
                        <p className="text-brand-orange">Pequeño</p>
                        <p>$25.00</p>
                    </div>
                    <div>
                        <p className="text-brand-orange">Mediano</p>
                        <p>$45.00</p>
                    </div>
                    <div>
                        <p className="text-brand-orange">Grande</p>
                        <p>$75.00</p>
                    </div>
                </div>
                {/* pan */}
                {/* -mt-20 */}
                <img className="drop-shadow h-56 -mt-20 md:m-auto w-full object-scale-down align-middle sm:h-full sm:object-cover sm:h-64 md:-mt-32 lg:h-full" src="/images/pan-de-muerto.png" alt=""/>
                <div className="text-brand-orange mt-8 font-bold italic text-lg  md:text-3xl">
                    Encuentra tu sucursal más cercana
                </div>
                {/* sucursal */}
                <div className="w-full text-justify pb-20">
                    <Wrapper className="md:w-3/5 m-auto">
                        <Stores
                            setStore={setStore}
                            stores={stores}
                            storeSelected={store && stores.filter((s) => s.id === store)[0]}/>
                    </Wrapper>
                    <Wrapper>
                        <Map store={storeObject} />
                    </Wrapper>
                    <Wrapper className="flex justify-center">
                        <a className="mb-5 pb-3 inline-block w-full text-center float-right text-white bg-orange-400 hover:bg-brand-orange hover:text-white focus:outline-none focus:shadow-outline font-bold py-2 px-4 rounded sm:m-auto lg:m-0 sm:w-3/5"
                           target="_blank"
                           rel="noopener noreferrer"
                           href={`https://maps.google.com/?q=${storeObject.lat},${storeObject.lon}&z=8`}
                        >
                            <div className="flex justify-center">
                                <svg version="1.1" className="stroke-current fill-current w-6" id="Location_pin"
                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path
                                        d="M10,2.009c-2.762,0-5,2.229-5,4.99c0,4.774,5,11,5,11s5-6.227,5-11C15,4.239,12.762,2.009,10,2.009zM10,9.76c-1.492,0-2.7-1.209-2.7-2.7s1.208-2.7,2.7-2.7c1.49,0,2.699,1.209,2.699,2.7S11.49,9.76,10,9.76z"/>
                                </svg>
                                <span>Ir a mapa</span>
                            </div>
                        </a>
                    </Wrapper>
                </div>
            </MainWrapper>
        </Layout>
  );
}

export default Landing;
