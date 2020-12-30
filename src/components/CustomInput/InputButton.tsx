import React from "react";
import styled from "styled-components"

const InputButton = () => {

    const Container = styled.div`
      display: inline-flex;
      padding-top: 10px;
    `

    const CustomButton = styled.button`
      height: 100%;
      background-color: #A34949;
      position:relative;
      border: 0px;
      border-top-right-radius: 26px;
      border-bottom-right-radius: 26px;
    `

    const CustomInput = styled.input`
      height: 30px;
      border: 0px;
      border-top-left-radius: 26px;
      border-bottom-left-radius: 26px;

      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    `

    const CustomText = styled.p`
      font-size: 10px;
      font-weight:500;
      color: #FFFFFF;
      margin:0;
    `

    return (
        <Container>
            <CustomInput />
            <div>
                <CustomButton>
                    <CustomText>
                        Subscribe
                    </CustomText>
                </CustomButton>
            </div>
        </Container>
    )
}

export default InputButton;