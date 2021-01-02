import React, {useState} from "react";
import styled, {keyframes} from 'styled-components'
import {IconContext} from "react-icons";
import {BiShow, BiHide} from "react-icons/all";

import "./PasswordInput.css";


const CustomInput = styled.input`

  border-radius: 7px 7px 7px 7px;
  height: 30px;
  border: 0px;
  width: 250px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #e5e5e5;
`

const CustomContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  
  padding-top: 2px;
  padding-left: 10px;
  
`


const UpperTitle = styled.div`
    color: #FFFFFF;
    font-size: 13px;
    font-weight: 300;
    padding-top: 10px;
   padding-left: 10px;
`



const LoginInput = () => {

    const [Username, SetUsername] = useState("");



    const HandleInputChange = (e) => {
        SetUsername(e.target.value);
    }

    return (
        <div>
            <UpperTitle>
                Username
            </UpperTitle>
            <CustomContainer>
                <div>
                        <CustomInput onChange={HandleInputChange} type={'text'}></CustomInput>
                </div>
            </CustomContainer>
        </div>
    )
}

export default LoginInput;