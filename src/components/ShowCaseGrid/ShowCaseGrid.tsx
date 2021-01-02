import React from "react";
import styled from "styled-components"

const Responsive = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  align-items: center;
  margin: auto;
  justify-content: center;
`

const ShowCaseGrid = (props) => {

    return (
        <Responsive>
                {props.children}
        </Responsive>
    )
}

export default ShowCaseGrid;