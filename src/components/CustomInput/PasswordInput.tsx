import React, {useState} from "react";
import styled, {keyframes} from 'styled-components'
import {IconContext} from "react-icons";
import {BiShow, BiHide} from "react-icons/all";

import "./PasswordInput.css";


const CustomInput = styled.input`

  border-radius: 7px 0px 0px 7px;
  height: 30px;
  width: 210px;
  border: 0px;
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



const ShowPassword = styled.div`
  background-color: #e5e5e5;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 10px;
  padding-left: 7px;
  border-radius: 0px 7px 7px 0px;
  border-left: 1px solid #000000;
  
  &:hover{
    background-color: #e5e5e5;
  }
`

const UpperTitle = styled.div`
    color: #FFFFFF;
    font-size: 13px;
    font-weight: 300;
    padding-top: 10px;
   padding-left: 10px;
`



const PasswordInput = () => {

    const [ShowPassState, SetShowPassState] = useState(false);
    const [Password, SetPassword] = useState("");

    const HandleShowState = () => {

        SetShowPassState(!ShowPassState)
    }

    const HandleInputChange = (e) => {
        console.log(e.target.value)
        SetPassword(e.target.value);
    }

    return (
        <div>
            <UpperTitle>
                Password
            </UpperTitle>
            <CustomContainer>
                <div>
                    { ShowPassState ?
                        <CustomInput onChange={HandleInputChange} type={'text'}></CustomInput> :
                        <CustomInput onChange={HandleInputChange} type={'password'}></CustomInput>
                    }

                </div>
                <div>
                    <ShowPassword onClick={HandleShowState}>
                        <IconContext.Provider value={{size: '25px'}} >
                            { ShowPassState ? <BiHide className={'HidePassShow'}/> : <BiShow className={'HidePassShow'}/> }
                        </IconContext.Provider>

                    </ShowPassword>
                </div>

            </CustomContainer>
        </div>
    )
}

export default PasswordInput;