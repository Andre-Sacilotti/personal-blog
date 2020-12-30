import React from 'react';
import styled from 'styled-components';

import NewsLetter from "../NewsLetter/NewsLetter";

const Footer = () => {

    const FooterContainer = styled.div`
      height: 261px;
      background-color: #09090988;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
    `

    return (
        <FooterContainer>
            <NewsLetter />
        </FooterContainer>
    )
}

export default Footer