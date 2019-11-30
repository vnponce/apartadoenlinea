import React from 'react';
import Layout from '../Shared/Layout';
import MenuIcons from "../components/MenuIcons";
import BreadCard from "../components/BreadCard";
import {Pagination} from 'react-laravel-paginex'
import {Inertia} from "@inertiajs/inertia";
import HeaderDescription from "../components/HeaderDescription";


function Home(props) {
    const { products, success_message, category = null } = props;
    console.log('succes_message =>', success_message);
    const getData = data => Inertia.visit(`?page=${data.page}`);
    return (
        <Layout title="Panadría La Especial">
            {category &&
                <>
                    <HeaderDescription title={category.name} description=""/>
                    {/* <div className="mb-16 w-full"></div> */}
                </>
            }
            {!category && <MenuIcons />}
            <hr className="w-1/2 mb-5" />
            <main className="flex flex-wrap w-full p-0 pb-16 sm:px-2">
                {products.data.map(product => {
                    return <BreadCard product={product}/>
                })}
                <div className="py-10 block w-full flex justify-center">
                    {products && products.length > 0 && (
                        <Pagination
                            containerClass="flex flex-wrap h-12"
                            numberButtonClass="mr-1 mb-1 px-4 py-3 text-sm border rounded hover:bg-white focus:border-indigo focus:text-indigo"
                            // numberClass="mr-1 mb-1 px-4 py-3 text-sm border rounded hover:bg-white focus:border-indigo focus:text-indigo"
                            activeClass="border-brand-orange bg-orange-400 text-white hover:text-gray-600"
                            changePage={getData}
                            nextButtonText="Siguiente"
                            buttonIcons
                            prevButtonClass="mr-1 mb-1 px-4 py-3 text-sm border rounded hover:bg-white focus:border-indigo focus:text-indigo"
                            nextButtonClass="mr-1 mb-1 px-4 py-3 text-sm border rounded hover:bg-white focus:border-indigo focus:text-indigo"
                            // prevButtonText="Anterior"
                            // prevButtonIcon="fa fa-chevron-left"
                            data={products}/>
                    )}
                </div>
            </main>
        </Layout>
    );
}

export default Home;
