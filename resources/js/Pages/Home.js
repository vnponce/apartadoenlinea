import React from 'react';
import Layout from '../Shared/Layout';
import MenuIcons from "../components/MenuIcons";
import BreadCard from "../components/BreadCard";
import {Inertia} from "@inertiajs/inertia";
import HeaderDescription from "../components/HeaderDescription";
import Pagination from "../components/Pagination";


function Home(props) {
    const { products, success_message, category = null, search } = props;
    const getData = data => Inertia.visit(`?page=${data.page}`);
    return (
        <Layout title="Panadría La Especial">
            {category &&
                <>
                    <HeaderDescription title={category.name} description=""/>
                    {/* <div className="mb-16 w-full"></div> */}
                </>
            }
            {!(category || search) && <MenuIcons />}
            {search &&
            <>
                <HeaderDescription title={`Buscando por '${search}'`} description=""/>
            </>
            }            <hr className="w-1/2 mb-5" />
            <main className="flex flex-wrap w-full p-0 pb-16 sm:px-2">
                {products.data.map(product => {
                    return <BreadCard product={product}/>
                })}
                <Pagination items={products} />
            </main>
        </Layout>
    );
}

export default Home;
