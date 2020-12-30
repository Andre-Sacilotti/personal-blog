import React from "react";
import styled from 'styled-components'

import InputButton from '../CustomInput/InputButton'

const NewsLetter = () => {

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

    return (
        <div>
            <NewsUpperText>Subscribe to newsletter</NewsUpperText>
            <NewsLowerText>Get notified on every new article</NewsLowerText>
            <InputButton></InputButton>
        </div>
    )
}

export default NewsLetter