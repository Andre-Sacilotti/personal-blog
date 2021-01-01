import React from "react";
import styled from 'styled-components'

import InputButton from '../CustomInput/InputButton'

const NewsUpperText = styled.p`
        font-size: 20px;
        color: #FFFFFF;
        margin:0;
        padding-bottom: 7px;
    `

const NewsLowerText = styled.p`
        font-size: 13px;
        font-weight:200;
        color: #FFFFFF;
        margin:0;
    `

const Container = styled.div`
      padding-left: 0px;
      padding-right: 100px;
      padding-top: 80px;

      @media only screen and (max-width: 850px) {
        padding-top: 20px;
        padding-right: 0px;
        padding-left: 0px;
        margin: 0px;
      }
    `

const NewsLetter = () => {

    return (
        <Container>
            <NewsUpperText>Subscribe to newsletter</NewsUpperText>
            <NewsLowerText>Get notified on every new article</NewsLowerText>
            <InputButton></InputButton>
        </Container>
    )
}

export default NewsLetter