import React from 'react';

export default function HeaderDescription(props) {
    const { title, description } = props;
    return (
        <section className="mt-24 w-full">
            <span className="block text-4xl text-center font-title font-semibold">{title}</span>
            <span className="block p-2 text-gray-500 text-base text-center max-w-xl m-auto">{description}</span>
        </section>
    )
};
