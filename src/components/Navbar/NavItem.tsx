import React from "react";
import styled, { css } from 'styled-components'


function NavItem(props) {


    const Line = styled.div`
      margin: 0;
      padding-top: 7px;
      border-bottom: ${props => props.underline===false ? "0px" : "1px"} solid ${props => props.in_page===true ? "#ffffff" : "#ffffff34"};

      @media only screen and (max-width: 600px) {
        display: none;
      }

    `

    const Item = styled.p`
      margin: 0;
      
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      color: ${props => props.in_page===true ? "#ffffff" : "#ffffff71"};
      
      &:hover {
        color: #ffffff;
        
      }
      &:hover + ${Line}{
        border-bottom: ${props => props.underline===false ? "0px" : "1px"} solid #ffffff;
      }
    `

    const ItemDiv = styled.div`
      padding-left: 10px;
      padding-right: 10px;
      padding-bottom: 30px;

     
    `

    return (
        <ItemDiv>
            <Item in_page={props.in_page} underline={props.underline}>
                {props.children}
            </Item>
            <Line in_page={props.in_page} underline={props.underline}/>
        </ItemDiv>
    )
}

export default NavItem