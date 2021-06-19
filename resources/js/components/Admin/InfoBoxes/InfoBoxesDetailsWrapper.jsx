import React from 'react';

export default function InfoBoxesDetailsWrapper({ children }) {
    return (
        <div id="dash-content"
             className="h-auto bg-gray-200 py-6 lg:py-0 w-full lg:max-w-sm flex flex-wrap content-start">
            <div id="aside-info" className="border-2 border-fuchsia-600 w-full sticky top-0">
                {children}
            </div>
        </div>
    )
};
