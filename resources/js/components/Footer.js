import React from 'react';
import { InertiaLink } from "@inertiajs/inertia-react";

export default function Footer() {
    return (
        <footer className="bg-brand-orange flex h-16 absolute bottom-0 w-full">
            <InertiaLink href="/politicas" className="flex-1 m-auto text-center text-white text-xs">Política de Privacidad</InertiaLink>
            <img src="/Logo-Short.svg" className="h-10 flex-1 flex-grow-0 m-auto" alt="" />
            <div className="flex-1 m-auto flex align-content-center justify-center">
                <InertiaLink href="/tyc" className="text-center text-white text-xs">Términos y condiciones</InertiaLink>
                <a href="https://www.facebook.com/panaderialaespecial/" className="ml-5">
                    <i className="fab fa-facebook-square text-white"></i>
                </a>
            </div>
        </footer>
    )
};
