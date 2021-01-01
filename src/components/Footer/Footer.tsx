import React from 'react';
import styled from 'styled-components';

import NewsLetter from "../NewsLetter/NewsLetter";
import SocialNetworks from '../SocialNetworks/SocialNetworks'


const CustomA = styled.a`
      text-decoration: none;
      color: #FFFFFF;
      font-weight:600;
      &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
      }
      
    `

const Copyright = styled.p`
      font-size: 12px;
      color: #FFFFFF;
      padding-top: 105px;

      @media only screen and (max-width: 850px) {
        padding-top: 30px;
        padding-right: 0px;
      }
    `

    const FooterContainer = styled.div`
      height: 261px;
      background-color: #09090988;
      position: relative;
      bottom: 0;
      left: 0;
      width: 100%;
      display: flex;
      justify-content: center;
      vertical-align: middle;

      @media only screen and (max-width: 850px) {
        flex-direction: column;
        height: 330px;
        align-items: center;
        padding-left: 0px;
        margin: 0px;
      }
    `


const Footer = () => {

    let year = new Date().getFullYear();


    return (
        <div className={"Footer-Custom-div"}>
            <FooterContainer>
                <NewsLetter />
                <SocialNetworks />
                <Copyright>{year} © <CustomA href={""}>André Sacilotti</CustomA></Copyright>
            </FooterContainer>
        </div>
    )
}

export default Footer