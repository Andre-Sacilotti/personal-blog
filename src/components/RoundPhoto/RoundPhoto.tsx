import React from "react";
import styled from 'styled-components';

const RoundDiv = styled.div`
    max-width: ${props => props.width ? props.width : '32px'};
    max-height: ${props => props.height ? props.height : '32px'};

    width: ${props => props.width ? props.width : '32px'};
    height: ${props => props.height ? props.height : '32px'};
  
    border-radius: 50%;
  
  border: 1px solid #AB4444;
  
  background-color: #ff0026;
`

const CustomImg = styled.img`
  overflow: hidden;
  border-radius: 50%;

  max-width: ${props => props.width ? props.width : '32px'};
  max-height: ${props => props.height ? props.height : '32px'};

  width: ${props => props.width ? props.width : '32px'};
  height: ${props => props.height ? props.height : '32px'};
`

const RoundPhoto = (props) => {


    return (
        <RoundDiv width={props.width} height={props.height}>
            <CustomImg width={props.width} height={props.height} src={props.post_author_img}>
            </CustomImg>
        </RoundDiv>
    )
};

export default RoundPhoto;