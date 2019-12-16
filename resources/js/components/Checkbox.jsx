import React from 'react';
import Styled from "styled-components";

/* To handle checked state this component requires a single of css */
const Wrapper = Styled.div`
    .custom-label input:checked + svg {
        display: block !important;
`;

// export default function Checkbox({ id, label, type: inputType, value: inputValue, placeholder, onChange, onKeyDown = () => false, error = [] }) {
export default function Checkbox({ error }) {
    return (
        <Wrapper>
            <label className="custom-label flex">
                <div className="bg-white shadow w-6 h-6 p-1 flex justify-center items-center mr-2">
                    <input type="checkbox" className="hidden" checked />
                    <svg className="hidden w-4 h-4 text-green-600 pointer-events-none" viewBox="0 0 172 172">
                        <g fill="none" strokeWidth="none" strokeMiterlimit="10" fontFamily="none" fontWeight="none"
                           fontSize="none" textAnchor="none" style="mix-blend-mode:normal">
                            <path d="M0 172V0h172v172z"/>
                            <path
                                d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z"
                                fill="currentColor" strokeWidth="1"/>
                        </g>
                    </svg>
                </div>
                <span className="select-none"> This is a sample checkbox. All the text will toggle the state</span>
            </label>
            {error && error[0] && <p className={`text-sm m-auto text-red-500 error ${error}`}>{error[0]}</p>}
        </Wrapper>
    );
};
