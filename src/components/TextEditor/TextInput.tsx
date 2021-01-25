import React, {useState} from 'react';
import styled from 'styled-components'

const Aux = styled.div`
  width:100%;
  max-width: 100%;
  max-height:200px;
  overflow:auto;
  resize: none;
  word-wrap: break-word;
  font-size: 26px;
  font-weight: 400;
  
`

const Container = styled.div`
width: 100%;
`


const TextInput = () => {

    const [showSide, setShowSide] = useState(false)

    const handlerFocuses = (object_) => {
        console.log("a")
        console.log(object_)
    }

    return (
        <Container>
            <Aux onFocus={handlerFocuses} contentEditable='true' placeholder="text">a</Aux>
        </Container>
    )

}

export default TextInput
