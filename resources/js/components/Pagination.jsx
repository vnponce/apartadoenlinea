import React from 'react';
import Styled from "styled-components";
import {InertiaLink} from "@inertiajs/inertia-react";

/* To handle checked state this component requires a single of css */
const Wrapper = Styled.div``;

export default function Pagination({ items }) {
    return (
        <Wrapper className="py-10 block w-full flex justify-center">
            {items && items.data && items.data.length > 0 && (
                <div className="pagination mt-6 -mb-1 flex flex-wrap">
                    {items.links && items.links.map((link, key) => {
                        if (link.url === null) {
                            return <div key={key}
                                        className={`page-link mr-1 mb-1 px-4 py-3 text-sm border rounded text-gray-400 ${link.label === 'Next' ? 'ml-auto' : ''}`}>{link.label}</div>;
                        }
                        return <InertiaLink
                            key={key}
                            class={`page-link mr-1 mb-1 px-4 py-3 text-sm border rounded hover:bg-white focus:border-indigo-500 focus:text-indigo-500 ${link.active ? 'border-brand-orange bg-orange-400 text-white hover:text-gray-600' : ''} ${link.label === 'Next' ? 'ml-auto' : ''}`}
                            // :class="{ 'bg-white': link.active, 'ml-auto': link.label === 'Next' }"
                            href={link.url}>
                            {link.label}
                        </InertiaLink>;
                    })}
                </div>
            )}
        </Wrapper>
    );
};
