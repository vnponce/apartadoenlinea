import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';

import { InertiaLink, usePage, useRememberedState } from '@inertiajs/inertia-react';
import ProductListElement from '../ProductListElement';
import Header from './Header';

const PanelWrapper = styled.aside`
  .panel {
    transition: transform 0.3s 0.3s;
    transform: translate3d(100%, 0, 0);
    z-index: 100;
  }

  ${(props) => props.show && css`
    visibility: visible;
    transition: visibility 0s 0s;
    .panel {
      transform: translate3d(0, 0, 0);
      transition-delay: 0s;
    }
    .panel {
      transition: transform 0.3s 0.3s;
      transform: translateY(0px);
    }
  `};
  .overlay {
    z-index: 10;
    visibility: hidden;
    transition: transform 0.3s 0.3s;
    transform: translate3d(100%, 0, 0);
    ${(props) => props.show && css`
      visibility: visible;
      transition-delay: 0s;
      transition: transform 0.3s 0.3s;
      transform: translateY(0px);
    `};
  }

  .list-wrapper {
    height: calc(100vh - 300px);
  }
`;
export default function Panel(props) {
  const { flash: { show_panel = false }, cart: { content: products }, subtotal } = usePage();
  const [localShow, setLocalShow] = useRememberedState(show_panel);
  const { show, setShowPanel } = props;
  { /* <PanelWrapper show={showPanel}> */ }
  const cartIsEmpty = products && (products.length === 0 || Object.keys(products).filter(product => products[product].id !== 'orderDetailsId').length === 0);

  useEffect(() => {
    // this is a hack, because we need to keep open panel when go to remove or update *ep* and return the page
    // so when detects show_panel from flash backend message
    if (localShow) {
      setShowPanel(true);
      setLocalShow(false);
    }
  }, [localShow]);

  return (
        <PanelWrapper show={show} className="product-side-panel">
            <div className="overlay top-0 bg-brand-orange h-full fixed overflow-x-hidden p-0 w-full opacity-25" onClick={() => setShowPanel(false)}>.</div>
            <div className="panel fixed h-full top-0 right-0 bg-white w-full md:w-4/5 lg:w-1/2 p-8">
                <div className="flex flex-col h-full content-between justify-between">
                    <div>
                        <Header setShowPanel={setShowPanel} />
                        <div id="header-lines"></div>
                        <div className="list-wrapper mt-16 overflow-auto">
                            {cartIsEmpty &&
                            <div className="flex flex-col justify-end h-64 text-center text-brand-orange m-auto">
                                <div className="text-regularText">No hay pan en la charola</div>
                                <svg className="mx-auto w-24 h-24 fill-current stroke-current cursor-not-allowed"
                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 44.83">
                                    <g id="Empty_Tray">
                                        <polygon id="Tray" points="0 34.83 100 34.83 89.37 44.83 10.59 44.83 0 34.83"/>
                                        <g id="Empty">
                                            <path
                                                d="M27.33,10.15a2.51,2.51,0,0,1,3.21,1.5L35.78,26a2.42,2.42,0,0,1-1.41,3.17,2.57,2.57,0,0,1-3.29-1.46L25.84,13.36A2.51,2.51,0,0,1,27.33,10.15Z"/>
                                            <path
                                                d="M72.64,10.15a2.51,2.51,0,0,1,1.49,3.21L68.92,27.75a2.43,2.43,0,0,1-3.12,1.53A2.58,2.58,0,0,1,64.22,26l5.21-14.39A2.51,2.51,0,0,1,72.64,10.15Z"/>
                                            <path
                                                d="M50,0a2.5,2.5,0,0,1,2.5,2.5v25A2.43,2.43,0,0,1,50.1,30a2.58,2.58,0,0,1-2.59-2.5V2.5A2.5,2.5,0,0,1,50,0Z"/>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            }
                            { Object.keys(products).sort((a, b) => {
                              if (products[a].id > products[b].id) {
                                return 1;
                              }
                              if (products[a].id < products[b].id) {
                                return -1;
                              }
                              // a must be equal to b
                              return 0;
                            }).filter((product) => products[product].id !== 'orderDetailsId').map((product) => <ProductListElement key={products[product].id} product={products[product]} isEditable={true}/>)}
                        </div>
                    </div>
                    {!cartIsEmpty && (
                        <div>
                            <div className="w-full text-center text-regularText text-normal">Total:</div>
                            <div className="w-full text-center text-regularText text-2xl">${subtotal}</div>
                            <InertiaLink
                                href="/pedido"
                                role='button'
                                className="flex cursor-pointer justify-center font-bold py-2 px-4 rounded w-1/2 m-auto mt-4 block bg-transparent border border-brand-orange text-brand-orange text-bold hover:bg-brand-orange hover:text-white hover:shadow hover:text-white">
                                <span>Agregar datos</span>
                            </InertiaLink>
                        </div>
                    )}
                </div>
            </div>
        </PanelWrapper>
  );
}
