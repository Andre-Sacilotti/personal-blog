import React from "react";
import styled from "styled-components";

const DivTag = styled.span`
  color: #FFFFFF;
  font-size: 15px;
`

const CustomDiv = styled.div`
  border-radius: 29px;
  background-color: #577694;

  width: ${(parseInt(DivTag.width.replace("px", ""))*2).toString()+"px"};
  display: flex;
  justify-content: center;
  align-items: center;
  
`



const PostTag = (props) => {

    return (
        <CustomDiv>
            <DivTag>
                {props.children}
            </DivTag>
        </CustomDiv>
    )
}

export default PostTag;