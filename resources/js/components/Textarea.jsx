import React from 'react';

export default function Textarea({
  id, label, value: inputValue, placeholder, onChange, onKeyDown = () => false, error = [], extraProps = {},
}) {
  return (
        <>
            <div className="font-light text-sm text-gray-600 mt-4 sm:text-center lg:text-justify">
                <label htmlFor={id} className="hover:border-grey-900 italic sm:block">{label || 'Label'}</label>
                <textarea
                   id={id}
                   name={id}
                   placeholder={ placeholder || '' }
                   value={ inputValue || '' }
                   onChange={onChange}
                   className="border border-transparent rounded w-full mt-1 bg-white border-gray-400 hover:border-orange-400 hover:shadow-xl focus:border-orange-400 focus:outline-none px-3 py-1 sm:w-7/12 sm:m-auto lg:w-full disabled:bg-brand-grayOpt disabled:cursor-not-allowed"
                   onKeyDown={onKeyDown}
                   rows="4"
                   {...extraProps}
                />
            </div>
            {error && error[0] && <p className={`text-sm m-auto text-red-500 error ${error}`}>{error[0]}</p>}
        </>
  );
}
