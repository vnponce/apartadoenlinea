import React from 'react';

export default function Button({ children, onClick, disabled }) {
  return (
    <button
        disabled={disabled}
        onClick={onClick}
        className="flex w-full cursor-pointer justify-center font-bold py-2 px-4 rounded block bg-transparent border border-brand-orange text-brand-orange text-bold hover:bg-brand-orange hover:text-white hover:shadow hover:text-white disabled:opacity-75">
        {children}
    </button>
  );
}
