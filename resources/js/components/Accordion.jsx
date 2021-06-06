import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useWindowSize} from "../hooks/useWindowSize";

const ElementStyled = styled.section`
  .item {
    transition: ${({ isLessThanSM }) => isLessThanSM ? 'ease-out all .2s' : ''};
    overflow: hidden;
    // transform: scaleX(0);
    transform: translateX(-400px);
    height: 0;
    &.active {
      overflow: unset;
      transform: none;
      height: auto;
    }
  }
`;

export default function Accordion({ children, text }) {
    const [isOpen, setIsOpen] = useState(false);
    const { isLessThanSM } = useWindowSize();

    useEffect(() => {
        setIsOpen(true);
        if(isLessThanSM) {
            setIsOpen(false);
        }
    }, [isLessThanSM])

    const toggle = () => setIsOpen(!isOpen);

    return (
        <ElementStyled id="accordion" isLessThanSM={isLessThanSM} className="w-full">
            <div id="accordion-close" className={`item flex flex-col ${!isOpen ? 'active' : ''}`}>
                {text}
                <span className="cursor-pointer pb-2 text-center hover:bg-gray-200 mt-2 border-t-2" onClick={toggle}>
                    Filtros
                    <svg xmlns="http://www.w3.org/2000/svg" className="m-auto h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"/>
                    </svg>
                </span>
            </div>
            <div id="accordion-open" className={`item flex flex-col ${isOpen ? 'active' : ''}`}>
                {children}
                {isLessThanSM && (
                    <span className="cursor-pointer pb-2 text-center hover:bg-gray-200 mt-2 border-t-2" onClick={toggle}>
                        Ocultar filtros
                        <svg xmlns="http://www.w3.org/2000/svg" className="m-auto h-6 w-6" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"/>
                        </svg>
                    </span>
                )}
            </div>
        </ElementStyled>
    )
};
