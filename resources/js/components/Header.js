import React, { useState } from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import Autocomplete from './Autocomplete';
import styled from "styled-components";
// import 'sweetalert2/src/sweetalert2.scss'

const OverlayStyled = styled.div`
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 2;
`;

export default function Header({ setShowPanel, showPanel }) {
  const [showSearch, setShowSearch] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { categories, cart: { content }, auth } = usePage();

  const removeItems = () => {
    Swal.fire({
      title: '¿Seguro?',
      text: 'Eliminar artículos de la charola',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí eliminar',
      cancelButtonText: 'No, mantener pan en la charola',
    }).then((result) => {
      if (result.value) {
        Inertia.visit('/empty');
        //     Swal.fire(
        //         'Deleted!',
        //         'Your file has been deleted.',
        //         'success'
        //     )
      }
    });
  };

  return <header className="md:px-12 bg-brand-orange">
      {auth && auth.user ? (
          <div>
              <div className="flex p-5">
                  <InertiaLink href="/" className="flex-2 m-auto h-20 hidden lg:block">
                      <img src="/svg/Logo-Full.svg" className="my-auto h-full" alt=""/>
                  </InertiaLink>
                  <div className="flex flex-row lg:flex-col flex-1">
                      <nav className="flex-1">
                          {!showMobileMenu && (
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                   stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                   className="cursor-pointer stroke-current text-white lg:hidden feather feather-menu"
                                   onClick={() => setShowMobileMenu(true)}
                              >
                                  <line x1="3" y1="12" x2="21" y2="12"></line>
                                  <line x1="3" y1="6" x2="21" y2="6"></line>
                                  <line x1="3" y1="18" x2="21" y2="18"></line>
                              </svg>
                          )}
                          {showMobileMenu && <span className="cursor-pointer text-white text-xl" onClick={() => setShowMobileMenu(false)}>X</span>}
                          <ul className="hidden lg:flex items-center justify-end text-white">
                              {categories.map((category) => (
                                  <li className="md:ml-5">
                                      <InertiaLink className="block md:inline"
                                                   href={`/category/${category.id}`}>{category.name}</InertiaLink>
                                  </li>
                              ))}
                              {auth && auth.user && (
                                  <li className="md:ml-5">
                                      <InertiaLink className="block md:inline"
                                                   href={'/admin'}>Panel</InertiaLink>
                                  </li>
                              )}
                          </ul>
                      </nav>
                      <InertiaLink href="/">
                          <img src="/Logo-Short.svg" className="lg:hidden pt-2 h-20 flex-1 flex-grow-0 m-auto" alt=""/>
                      </InertiaLink>
                      <div className="flex-1 flex justify-end lg:items-end">
                          {showSearch
                          && (
                              <div
                                  className="hidden lg:block mr-3 w-1/3 bg-brand-orange"
                              >
                                  <Autocomplete
                                      onBlur={() => setShowSearch(false)}
                                  />
                              </div>
                          )
                          }
                          {!showSearch
                          && <svg onClick={() => setShowSearch(true)}
                                  className="h-4 mr-3 fill-current stroke-current text-white cursor-pointer" fill="none"
                                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                              <g id="Empty_Tray">
                                  <path
                                      d="M71.22,62.86H66.67L65,61.43a37.85,37.85,0,0,0,8.83-24.29A36.89,36.89,0,1,0,37,74.27a38.3,38.3,0,0,0,24.22-8.85L63,66.85v4.58L91.46,100,100,91.43ZM37,62.86a25.7,25.7,0,1,1,25.65-25.7A25.58,25.58,0,0,1,37,62.86Z"/>
                              </g>
                          </svg>
                          }
                          {/* Charola icon */}
                          <span className="cursor-pointer" onClick={() => {
                            window.location.pathname !== '/charola' ? setShowPanel(true) : false;
                          }} id="charola">
                        {content && (content.length === 0 || Object.keys(content).filter((product) => content[product].id !== 'orderDetailsId').length === 0)
                        && <svg className="h-4 fill-current stroke-current text-white"
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
                        }
                              {content && Object.keys(content).filter((product) => content[product].id !== 'orderDetailsId').length > 0
                              && <svg xmlns="http://www.w3.org/2000/svg" className="h-4 fill-current stroke-current text-white"
                                      viewBox="0 0 100 34.83">
                                  <title>Con Pan</title>
                                  <path
                                      d="M0 24.83h100l-10.63 10H10.59L0 24.83zM74.48 12a10.47 10.47 0 0 0-.7-.85A37 37 0 0 0 62.5 2.71v4.62a2.5 2.5 0 0 1-5 0V.82a29.39 29.39 0 0 0-5-.82v7.33a2.5 2.5 0 0 1-5 0V0a29.32 29.32 0 0 0-5 .82v6.51a2.5 2.5 0 0 1-5 0V2.71a37.12 37.12 0 0 0-11.3 8.47 10.47 10.47 0 0 0-.7.85 4.88 4.88 0 0 0-.85 2.8 5 5 0 0 0 5 5h40.7a5 5 0 0 0 5-5 4.88 4.88 0 0 0-.87-2.83z"/>
                              </svg>
                              }
                    </span>
                          {/* trash */}
                          {content && Object.keys(content).filter((product) => content[product].id !== 'orderDetailsId').length > 0
                          && <span>
                            <i
                                tabIndex="0"
                                className="ml-2 inline fa fa-trash fa-fw fill-current stroke-current text-white cursor-pointer hover:text-orange-900"
                                onClick={removeItems}
                                onKeyDown={ (e) => {
                                  e.stopPropagation();
                                  if (e.key === 'Enter') {
                                    setTimeout(removeItems, 500);
                                  }
                                }}
                            />
                        </span>
                          }
                      </div>
                  </div>
              </div>
              {/* Mobile menu */}
              {showMobileMenu && (
                  <ul className="flex flex-col w-full items-center justify-end text-white">
                      {categories.map((category) => (
                          <li className="md:ml-5">
                              <InertiaLink className="block md:inline"
                                           href={`/category/${category.id}`}>{category.name}</InertiaLink>
                          </li>
                      ))}
                      {auth && auth.user && (
                          <li className="md:ml-5">
                              <InertiaLink className="block md:inline"
                                           href={'/admin'}>Panel</InertiaLink>
                          </li>
                      )}
                  </ul>
              )}
          </div>
      ) : (
          <div className="flex p-5">
              <InertiaLink href="/" className="flex-2 m-auto h-20">
              {/* tempo */}
              <img src="/svg/Logo-Full.svg" className="my-auto h-full" alt=""/>
              </InertiaLink>
          </div>
      )}
        <div id="header-lines"></div>
      {showSearch
      && (<OverlayStyled className="absolute top-0 right-0 h-full w-full lg:hidden">
          <div className="mt-5 max-w-md mx-auto px-2">
              <Autocomplete
                  onBlur={() => setShowSearch(false)}
              />
          </div>
      </OverlayStyled>)
      }
    </header>;
}
