import React from "react";
import styled from "styled-components";



const CustomDiv = styled.div`
  border-radius: 29px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #577694;
  color: #FFFFFF;
  height: 20px;
  padding: 0 20px 0 23px;
  -webkit-transition: background 0.5s;
  font-size: 11px;
  margin-left: 3px;

  &:hover {
    background: #2c3e50;
  }
  

`



const PostTag = (props) => {

    return (
        <CustomDiv>
            {props.children}
        </CustomDiv>
    )
}

export default PostTag;