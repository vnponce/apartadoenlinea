import React from 'react';

export default function Input({ id, label, type: inputType, value: inputValue, placeholder }) {
    return (
        <div className="font-light text-sm text-gray-600 mt-4 sm:text-center lg:text-justify">
            <label htmlFor={id} className="hover:border-grey-900 italic sm:block">{label ? label : 'Label'}</label>
            <input name={id} type={ inputType ? inputType : 'text' } placeholder={ placeholder ? placeholder : '' }
                   value={ inputValue ? inputValue : '' }
                   className="border border-transparent rounded w-full mt-1 bg-white border-gray-400 hover:border-orange-400 hover:shadow-xl focus:border-orange-400 focus:outline-none px-3 py-1 sm:w-7/12 sm:m-auto lg:w-full" />
        </div>
    );
};
