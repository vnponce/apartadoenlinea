import React from 'react';
import styled from 'styled-components';

const InfoBoxWrapper = styled.div`
    height: calc( 100vh - 80px );
    min-height: unset;
    overflow: scroll;
`

export default function InfoBoxesDetailsWrapper({ children }) {
    return (
        <div id="dash-content"
             className="h-auto bg-gray-200 py-6 lg:py-0 w-full lg:max-w-sm flex flex-wrap content-start">
            <InfoBoxWrapper id="aside-info" className="border-fuchsia-600 w-full sticky top-0">
                {children}
            </InfoBoxWrapper>
        </div>
    )
};
