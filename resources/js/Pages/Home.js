import React from 'react';
import Layout from '../Shared/Layout';
import HeaderDescription from "../components/HeaderDescription";
import MenuIcons from "../components/MenuIcons";
import BreadCard from "../components/BreadCard";

function Home(props) {
    return (
        <Layout title="Panadría La Especial">
            {/* <HeaderDescription title="PANADERíA" description="Bienvenido a Panadería la Especial donde encotnrarás la mejor calidad y servicio"/> */}
            <MenuIcons />
            <hr className="w-1/2 mb-5" />
            <main className="flex flex-wrap w-full p-0 pb-16 sm:px-2">
                {[...Array(10)].map((_, i) => <BreadCard />)}
            </main>
        </Layout>
    );
}

export default Home;
