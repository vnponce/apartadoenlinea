import React from 'react';
import Styled from "styled-components";

/* To handle checked state this component requires a single of css */
const Wrapper = Styled.div`
    .custom-label input:checked + svg {
        display: block !important;
`;

// export default function Checkbox({ id, label, type: inputType, value: inputValue, placeholder, onChange, onKeyDown = () => false, error = [] }) {
export default function Checkbox({ label, checked = false, setChecked, error }) {
    return (
        <Wrapper className="mt-10">
            <label className="custom-label flex cursor-pointer">
                <span className="select-none">{label}</span>
                <div className="bg-white shadow w-6 h-6 p-1 flex justify-center items-center ml-2">
                    <input type="checkbox" className="hidden" checked={checked} onClick={setChecked}/>
                    <svg className="hidden w-4 h-4 text-green-600 pointer-events-none" viewBox="0 0 172 172">
                        <g fill="none" strokeWidth="none" strokeMiterlimit="10" fontFamily="none" fontWeight="none"
                           fontSize="none" textAnchor="none">
                            <path d="M0 172V0h172v172z"/>
                            <path
                                d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z"
                                fill="currentColor" strokeWidth="1"/>
                        </g>
                    </svg>
                </div>
            </label>
            {error && error[0] && <p className={`text-sm m-auto text-red-500 error ${error}`}>{error[0]}</p>}
        </Wrapper>
    );
};
