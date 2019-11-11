import React from 'react';
import ReactDOM from 'react-dom';
import Layout from "../Shared/Layout";
import styled from "styled-components";

const TwoColumns = styled.div `
    column-count: 2;
`


function TermsConditions(props) {
    return (
        <Layout title="Terminos y Condiciones">
            <div className="flex items-center flex-col mt-12 sm:mt-16 px-8">
                <img className="h-64 mb-10" src="/images/ConchaJuez.png" alt=""/>
                <TwoColumns className="text-justify">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                    in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis
                    dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil
                    imperdiet doming id quod mazim placerat facer possim assum.
                </TwoColumns>
            </div>
        </Layout>
    );
}

export default TermsConditions;
