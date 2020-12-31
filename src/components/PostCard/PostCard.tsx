import React from "react";
import styled from "styled-components"

const Box = styled.div`
  width: 80%;
  height: 380px;
  border: 2px solid #FFFFFF;
  border-radius: 51px;
  
  margin: auto;
  margin-bottom: 30px;
  margin-top: 30px;

  @media only screen and (min-width: 600px) {
    width: 45%;
  
  }
`

const Title = styled.p`
  color: #FFFFFF;
  font-weight: 700;
  font-size: 21px;
  margin-top: 180px;
  margin-left: 20px;
  
`

const Date = styled.p`

`

const Description = styled.p`
  font-size: 14px;
  color: #FFFFFF;
  font-weight: 400;
  margin-left: 20px;
  margin-top: 0px;

`


const PostCard = () => {


    return (
        <div>
            <Box>
                <Title>
                    Titulo do Artigo
                </Title>

                <Description>
                    Descrição lorem ipsum lorem ipsum namatso ipum iquorum
                </Description>

            </Box>

            <Box>
                <Title>
                    Titulo do Artigo
                </Title>

            </Box>
        </div>
    )
}

export default PostCard;