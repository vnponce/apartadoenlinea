import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);

  > div {
    width: 100%;
    height: 100%;
    display: flex;

    img {
      width: 200px;
      height: 200px;
      display: flex;
      align-self: center;
      margin: 0 auto;
    }
  }
`;

const Loading = () => (
    <Wrapper>
        <div>
            <img src="/static/loading.gif" alt="cargando" />
        </div>
    </Wrapper>
);

export default Loading;
