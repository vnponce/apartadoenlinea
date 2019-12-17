import React from 'react';
import {InertiaLink, usePage} from "@inertiajs/inertia-react";

export default function MenuIcons() {
    const { categories } = usePage();
    console.log('categories =>', categories);
    return (
        <section className="flex m-auto container pt-12">
            <div className="w-full icons p-4">
                <InertiaLink href="/category/1"
                   className="text-brand-icons inline-block p-4 h-40 w-1/2 float-left md:w-1/4 md:float-left opacity-75 hover:opacity-100">
                    <svg className="fill-current stroke-current h-20 m-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                        <title>Pan-dulce</title>
                        <g id="Layer_2" data-name="Layer 2">
                            <g id="Layer_1-2" data-name="Layer 1">
                                <path d="M50,0A50,50,0,0,0,5.56,27.07a5.41,5.41,0,0,0,2.77.71c3.49,0,5.34-2.67,8.06-7s6-9.64,12.76-9.64,10.1,5.35,12.78,9.64,4.57,7,8.06,7,5.34-2.67,8.07-7,6-9.64,12.76-9.64,10.1,5.35,12.78,9.64,4.57,7,8.07,7a5.41,5.41,0,0,0,2.77-.71A50,50,0,0,0,50,0ZM96.72,32.15a10.88,10.88,0,0,1-5,1.18c-6.75,0-10.1-5.34-12.78-9.64s-4.57-7-8.07-7-5.33,2.66-8.06,7-6,9.64-12.77,9.64S39.9,28,37.22,23.69s-4.57-7-8.07-7-5.33,2.66-8,7-6,9.64-12.77,9.64a10.88,10.88,0,0,1-5.05-1.18,50,50,0,1,0,93.44,0ZM50,68.06a12.5,12.5,0,1,1,12.5-12.5A12.5,12.5,0,0,1,50,68.06Z"/>
                            </g>
                        </g>
                    </svg>
                    <div className="icon-menu-category-text first-letter-bigger">Pan de Dulce</div>
                </InertiaLink>
                <InertiaLink href="/category/2"
                   className="text-brand-icons inline-block p-4 h-40 w-1/2 float-right md:w-1/4 md:float-left opacity-75 hover:opacity-100">
                    <svg className="fill-current stroke-current h-20 m-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 133.53 100">
                        <title>Pan-sal</title>
                        <g id="Layer_2" data-name="Layer 2">
                            <g id="Layer_1-2" data-name="Layer 1">
                                <path id="Bread" className="cls-1"
                                      d="M131.29,79.46a27.89,27.89,0,0,0-1.84-2.24,97.75,97.75,0,0,0-29.71-22.3V67.08a6.59,6.59,0,0,1-13.17,0V49.94a76.65,76.65,0,0,0-13.22-2.17V67.08a6.59,6.59,0,0,1-13.17,0V47.77A76.23,76.23,0,0,0,47,49.93V67.08a6.59,6.59,0,0,1-13.17,0V54.89A97.81,97.81,0,0,0,4.08,77.22a27.89,27.89,0,0,0-1.84,2.24A12.81,12.81,0,0,0,0,86.83,13.21,13.21,0,0,0,13.17,100H120.36a13.21,13.21,0,0,0,13.17-13.17A12.81,12.81,0,0,0,131.29,79.46Z"/>
                                <circle className="cls-1" cx="66.86" cy="29.17" r="4.17"/>
                                <circle className="cls-1" cx="58.53" cy="16.67" r="4.17"/>
                                <circle className="cls-1" cx="66.86" cy="4.17" r="4.17"/>
                            </g>
                        </g>
                    </svg>
                    <div className="icon-menu-category-text">Pan de sal</div>
                </InertiaLink>
                <InertiaLink href="/category/3"
                   className="text-brand-icons inline-block p-4 h-40 w-1/2 float-left md:w-1/4 md:float-left opacity-75 hover:opacity-100">
                    <svg className="fill-current stroke-current h-20 m-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94.55 103.35">
                        <title>Bocadillos</title>
                        <g id="Layer_2" data-name="Layer 2">
                            <g id="Layer_1-2" data-name="Layer 1">
                                <path className="cls-1"
                                      d="M0,101.35a2,2,0,0,0,2,2H74.84A2,2,0,0,0,76.3,100L3.46,22.2A2,2,0,0,0,0,23.56Z"/>
                                <path className="cls-1"
                                      d="M83,99.64a2,2,0,0,1-1.45.54,2,2,0,0,1-1.41-.66A65.84,65.84,0,0,1,69.63,84.35a60.12,60.12,0,0,0-10.8-15.18A60.18,60.18,0,0,0,44.39,57.4,67.22,67.22,0,0,1,28.52,44.46,67.12,67.12,0,0,1,16.66,27.79,58.78,58.78,0,0,0,7.18,14.05a2,2,0,0,1,.12-2.8l2.18-2a2,2,0,0,1,2.85.13A65.74,65.74,0,0,1,22.82,24.51a60.12,60.12,0,0,0,10.8,15.18A60.18,60.18,0,0,0,48.06,51.46,67.22,67.22,0,0,1,63.93,64.4,67.31,67.31,0,0,1,75.79,81.07a59,59,0,0,0,9.47,13.74,2,2,0,0,1-.12,2.8Z"/>
                                <path className="cls-1"
                                      d="M94.07,86.08a2,2,0,0,1-.15,2.76l-2.23,2.08a2,2,0,0,1-2.85-.12A66,66,0,0,1,78.35,75.63a60.12,60.12,0,0,0-10.8-15.18A60.08,60.08,0,0,0,53.11,48.67,66.85,66.85,0,0,1,37.25,35.74,67.23,67.23,0,0,1,25.38,19.06,59.41,59.41,0,0,0,15.91,5.32,2,2,0,0,1,16,2.53l2.12-2A2,2,0,0,1,19.63,0,2,2,0,0,1,21,.7Z"/>
                            </g>
                        </g>
                    </svg>
                    <div className="icon-menu-category-text">Bocadillos</div>
                </InertiaLink>
                <InertiaLink href="/category/4"
                   className="text-brand-icons inline-block p-4 h-40 w-1/2 float-right md:w-1/4 md:float-left opacity-75 hover:opacity-100">
                    <svg className="fill-current stroke-current h-20 m-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 89.99 100">
                        <title>Repostería</title>
                        <g id="Layer_2" data-name="Layer 2">
                            <g id="Layer_1-2" data-name="Layer 1">
                                <path className="cls-1"
                                      d="M45,57.46c-7.82,0-14.9-3.73-18.06-9.52l-2.57-4.72-4.93,2.14a16,16,0,0,1-6.4,1.31c-4.54,0-7.95-1.13-10.14-3.35C.51,40.86,0,37.43,0,35,0,20.68,16,0,45,0S90,20.6,90,34.84c0,2.48-.51,6-3,8.46-2.18,2.23-5.56,3.37-10,3.37a15.9,15.9,0,0,1-6.4-1.31l-4.94-2.14-2.57,4.72C59.94,53.73,52.85,57.46,45,57.46Z"/>
                                <path className="cls-1"
                                      d="M77,52.36a22.13,22.13,0,0,1-8.75-1.79C64.21,58,55.35,63.16,45,63.16S25.86,58,21.82,50.57a22.08,22.08,0,0,1-8.74,1.79,22.86,22.86,0,0,1-10-2,1.46,1.46,0,0,0-2,1.88L18.76,96.3a5.87,5.87,0,0,0,5.46,3.7H65.85a5.87,5.87,0,0,0,5.46-3.7L89,52.15a1.46,1.46,0,0,0-2-1.87A22.42,22.42,0,0,1,77,52.36Z"/>
                            </g>
                        </g>
                    </svg>
                    <div className="icon-menu-category-text">Repostería</div>
                </InertiaLink>
            </div>
        </section>
    )
};
