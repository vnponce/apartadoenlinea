import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  min-height: calc(100% - 5rem);
`;

export default function Content({ children }) {
    return (
        <div id="main-contents" className="w-1/2 flex-1">
            <Section className="flex flex-1 flex-wrap">

                <div className="w-full xl:max-w-6xl">

                    {/*"Container" for the graphs"*/}
                    <div className="h-full max-w-full lg:max-w-3xl xl:max-w-5xl">

                        {/*Table orders*/}
                        <div className="h-full border-b overflow-auto p-3">
                            {children}
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    )
};
