import { InertiaLink } from "@inertiajs/inertia-react";
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from "../components/Footer";
import { usePage } from "@inertiajs/inertia-react";

export default function Layout({ title, children }) {
    const { flash } = usePage();
     useEffect(() => {
         document.title = title
         console.log('flash =>', flash);
     }, [title]);

    return (
        <>
            <Header />
            <main id="content-wrapper" className="flex flex-wrap w-full p-0">
                {children}
            </main>
            <Footer />
        </>
    );
}
