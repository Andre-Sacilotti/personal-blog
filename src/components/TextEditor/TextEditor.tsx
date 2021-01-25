import React from 'react';
import styled from 'styled-components'

import TextInput from "./TextInput";

const Box = styled.div`
  border: 1px solid green;
  border-radius: 5px;
  //background-color: #FFFFFF;
  height: 60vh;
  color: #FFFFFF;

`

const TitleContainer = styled.div`
  display: flex;
  padding-top: 10px;
  width: 100%;
  
  
`

const VerticalLine = styled.div`
  border-left: 2px solid #B8B8B8;
  padding-left: 5px;
  padding-right: 5px;
`

const HorizontalLine = styled.div`
  border-bottom: 1px solid #b8b8b8;
  width: 90%;
  padding-top: 5px;
  padding-bottom: 5px;
`

const VerticalOptions = styled.div`
  padding-left: 5px;
  padding-right: 5px;
  font-size: 18px;
  
`




const CenterAlign = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  
`

const BottomAlign = styled.div`

  vertical-align: bottom;
  
`

const TextEditor = () => {




    return (



        <Box>
            <TitleContainer>
                <BottomAlign>

                    <VerticalOptions>
                        Title
                    </VerticalOptions>

                </BottomAlign>

                <VerticalLine />
                <TextInput />

            </TitleContainer>
            <CenterAlign>
                <HorizontalLine/>
            </CenterAlign>


        </Box>

    )
}

export default TextEditor
