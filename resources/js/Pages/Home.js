import React from 'react';
import Layout from '../Shared/Layout';
import MenuIcons from "../components/MenuIcons";
import BreadCard from "../components/BreadCard";

function Home(props) {
    const { products, success_message } = props;
    console.log('succes_message =>', success_message);
    return (
        <Layout title="Panadría La Especial">
            {/* <HeaderDescription title="PANADERíA" description="Bienvenido a Panadería la Especial donde encotnrarás la mejor calidad y servicio"/> */}
            <MenuIcons />
            <hr className="w-1/2 mb-5" />
            <main className="flex flex-wrap w-full p-0 pb-16 sm:px-2">
                {products.map(product => {
                    return <BreadCard product={product}/>
                })}
            </main>
        </Layout>
    );
}

export default Home;
