import React from 'react';
import Layout from '../Shared/Layout';

function Home(props) {
    return (
        <Layout title="Panadría La Especial">
            <main className="flex flex-wrap w-full p-0 pb-16 sm:px-2">
                <div className="container bread-card">
                    <div className="flex-1 flex sm:bg-brand-gray">
                        <img className="m-auto w-full object-cover align-middle sm:h-64" src="/breads/Cuernito.png" alt="Banderilla mini" />
                    </div>
                    <div className="flex-1 flex flex-col h-32 overflow-hidden sm:mt-4 sm:h-24">
                        <div className="flex-1 sm:text-center text-gray-600 font-medium uppercase">
                            <div className="first-letter-bigger">Banderilla mini</div>
                            <div className="text-lg">
                                <span>$11.50</span>
                                <span className="text-xs align-top">p/p</span>
                            </div>
                        </div>
                        <div className="flex-1 truncate text-gray-500 text-base">Pan de pasta hojaldrada, con forma de
                            una barra larga y aplanada barnizada con clara de huevo y azúcar. ¡Buenísimas para remojar
                            en chocolate!
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default Home;
