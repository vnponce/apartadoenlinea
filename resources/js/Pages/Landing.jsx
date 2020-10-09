import React from 'react';
// import ReactDOM from 'react-dom';
import Layout from "../Shared/Layout";
import Map from "../components/Map";
import Stores from "../components/Select/Stores";
import {usePage, useRememberedState} from "@inertiajs/inertia-react";

// import styled from "styled-components";

// const TwoColumns = styled.div `
//     column-count: 2;
// `


function TermsConditions(props) {
    const { stores } = usePage();
    const [store, setStore] = useRememberedState(1);
    return (
        <Layout title="Terminos y Condiciones">
            <div className="w-full flex items-center flex-col mt-12 sm:mt-16 px-8">
                <img className="h-56 m-auto w-full object-scale-down align-middle sm:h-full sm:object-cover md:h-64 lg:h-full" src="/breads/Cuernito.png" alt=""/>
                <div className="text-center m-8">
                    <h2>Aviso de Privacidad</h2>
                    <h3>Pagina web panadería la especial</h3>
                </div>
                <div className="w-full text-justify pb-16">
                    {console.log('stores =>', stores)}
                    <Map store={store && stores.filter(s => s.id === store)[0]} />
                </div>
            </div>
        </Layout>
    );
}

export default TermsConditions;
