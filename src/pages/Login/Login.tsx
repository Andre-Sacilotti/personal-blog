import React from "react";
import styled from 'styled-components'

import PasswordInput from "../../components/CustomInput/PasswordInput";
import LoginInput from "../../components/CustomInput/LoginInput";

import {change_lang} from "../../action/langAction"

const LoginContainer = styled.div`
  //border: 1px solid #FFFFFF;
  background: #09090988;
  border-radius: 10px;
  width: 400px;
  height: 400px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  
`

const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  
`

const CustomP = styled.p`
  color: #FFFFFF;
  font-size:24px;
  font-weight: 200;

`

const SubmitButton = styled.button`
  margin-top: 30px;
  height: 30px;
  border: 0;
  border-radius: 3px;
  width: 55%;
  background-color: #e5e5e5;

  &:active {
    background-color: #cecece;
    color: #16151F;
  }

`

const ForgotPass = styled.div`
  color: #FFFFFF;
  font-size: 12px;
  padding-top: 5px;
  font-weight: 200;

  &:hover {
    color: #e2e2e2;
    cursor: default;
  }

  &:active {
    color: #cecece;
  }
`

const Login = () => {

    change_lang("teste")

    return (
        <Container>

            <LoginContainer>
                <CustomP>
                    Login
                </CustomP>
                <LoginInput></LoginInput>
                <PasswordInput></PasswordInput>
                <SubmitButton>Log-in</SubmitButton>
                <ForgotPass>
                    Forgot the password?
                </ForgotPass>
            </LoginContainer>
        </Container>

    )
}

export default Login;