import React from 'react';

export default function ListItemValue({ items }) {
    return (
        items.filter(item => item.value).map(({ filter, value }) => (
            <div>
                {filter}
                <span className="ml-2 font-bold">{value}</span>
            </div>
        ))
    );
};
