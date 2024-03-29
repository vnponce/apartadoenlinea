import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';
import { usePage, useRememberedState } from '@inertiajs/inertia-react';
import styled from 'styled-components';
import Layout from '../../Shared/Layout';
import Map from '../../components/Map';
import Stores from '../../components/Select/Stores';
// import Geolocalated from "../components/Geolocalated";

const MainWrapper = styled.div`
    font-family: 'Press Start 2P', cursive;
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
            <MainWrapper className="h-full bg-brand-orange w-full flex items-center flex-col px-8">
                <div className="pt-20 text-4xl text-center md:text-6xl">
                    <div className="flex">
                        <RotateWrapper>
                            <img className="levitate h-10 md:h-16" src="/images/landings/christmas/christmas-tree.png" alt=""/>
                        </RotateWrapper>
                        <span className="text-orange-200">¡Felices</span>
                        <img className="levitate-delayed h-10 md:h-16" src="/images/landings/christmas/rodolfo.png" alt=""/>
                    </div>
                    <div className="text-orange-200 -mt-4 md:-mt-8">Fiestas!</div>
                </div>
                {/* precios */}
                {/*<div className="w-4/5 text-orange-200 text-center mt-6 flex justify-around md:text-3xl">*/}
                {/*    <div>*/}
                {/*        <p className="text-brand-orange">Pequeño</p>*/}
                {/*        <p>$25.00</p>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <p className="text-brand-orange">Mediano</p>*/}
                {/*        <p>$45.00</p>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <p className="text-brand-orange">Grande</p>*/}
                {/*        <p>$75.00</p>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/* pan */}
                {/* -mt-20 */}
                <img
                    className="drop-shadow h-56 md:m-auto w-full sm:w-1/2icon 6.png object-scale-down align-middle sm:h-full sm:object-cover sm:h-64 lg:h-full"
                    src="/images/landings/christmas/rosca_reyes.jpeg"
                    alt="Rosca de reyes"
                />
                <div className="text-white mt-8 font-bold italic text-lg  md:text-3xl">
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
                        <a className="flex justify-center items-center mb-5 pb-3 inline-block w-full text-center float-right text-white bg-orange-400 hover:bg-brand-orange hover:text-white focus:outline-none focus:shadow-outline font-bold py-2 px-4 rounded sm:m-auto lg:m-0 sm:w-3/5"
                           target="_blank"
                           rel="noopener noreferrer"
                           href={`https://maps.google.com/?q=${storeObject.lat},${storeObject.lon}&z=8`}
                        >
                            Ir a mapa <img className="levitate h-8 ml-3" src="/images/landings/christmas/trinero.svg" alt=""/>
                        </a>
                    </Wrapper>
                </div>
            </MainWrapper>
        </Layout>
    );
}

export default Landing;
