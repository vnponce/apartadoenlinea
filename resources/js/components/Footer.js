import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-brand-orange flex h-16 absolute bottom-0 w-full">
            <span className="flex-1 m-auto text-center text-white text-xs">Política de Privacidad</span>
            <img src="Logo-Short.svg" className="h-10 flex-1 flex-grow-0 m-auto" alt="" />
            <span className="flex-1 m-auto text-center text-white text-xs">Términos y condiciones</span>
        </footer>
    )
};
