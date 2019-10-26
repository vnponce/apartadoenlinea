import { InertiaLink } from "@inertiajs/inertia-react";
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from "../components/Footer";

export default function Layout({ title, children }) {
     useEffect(() => {
         document.title = title
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
