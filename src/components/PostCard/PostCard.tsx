import React from "react";
import styled from "styled-components"

import RoundPhoto from "../RoundPhoto/RoundPhoto";
import PostTag from "../PostTag/PostTag";

const Box = styled.div`
  width: 80%;
  height: 380px;
  border-radius: 38px;
  
  
  border: 3px solid #16151F;
  
  background-image: linear-gradient(
          rgba(16, 17, 30, 0.3),
          rgba(16, 17, 30, 0.9)
  ), url("https://robocrop.realpython.net/?url=https%3A//files.realpython.com/media/Cool-New-Features-in-Python-3.8_Watermarked.cab411b93786.jpg&w=960&sig=884f1278fa8a960fb67f5d0f8b0a0858d58843e2");
  margin: auto;
  margin-bottom: 30px;
  padding-top: 30px;
  
  

  @media only screen and (min-width: 600px) {
    width: 45%;
  
  }
`

const Title = styled.p`
  color: #FFFFFF;
  font-weight: 700;
  font-size: 21px;
  margin-top: 0;
  margin-left: 20px;
`

const Date = styled.p`
  padding-left: 4px;
  color: #AEAEAE;
  font-size: 11px;
  font-weight: 400;
  margin-bottom: 0;
`

const ReadTime = styled.p`
  font-size: 11px;
  font-weight: 400;
  color: #FFFFFF;
  margin-bottom: 0;
`

const Description = styled.p`
  font-size: 14px;
  color: #FFFFFF;
  font-weight: 400;
  margin-left: 20px;
  margin-top: 0;

`

const CustomDateDiv = styled.div`
  display: flex;
  
  margin-left: 20px;
  margin-bottom: 0;

`

const ProfilePhotoContainer = styled.div`
  margin-left: 20px;
  height: ${props => props.height ? props.height : '34px'};
  padding-top: 10px;
  display: flex;
  
  
`

const AuthorNameContainer = styled.div`
  padding-left: 10px;
  margin: auto 0;
  color: #FFFFFF;
  font-weight: 500;
  font-size: 13px;
`

const TagsContainer = styled.div`
  margin: auto 0;
  vertical-align: middle;
  padding-left:  10px;
  display: flex;
  
  
`

const CustomSection = styled.div`
  display: inline-block;
  height: 100%;
  vertical-align: bottom;
  display:flex;
  align-items:flex-end;
`

const SectionAlign = styled.div`
margin-bottom: 17px;
  
  
`


const PostCard = () => {


    return (
        <div>

                <Box>
                    <CustomSection>

                        <SectionAlign>
                            <TagsContainer>

                                <PostTag>
                                    Tech
                                </PostTag>


                                <PostTag>
                                    Programming
                                </PostTag>

                            </TagsContainer>
                            <CustomDateDiv>
                                <ReadTime>
                                    2 min read
                                </ReadTime>
                                <Date>
                                    Dez 5, 2020
                                </Date>
                            </CustomDateDiv>

                            <Title>
                                Titulo do Artigo
                            </Title>

                            <Description>
                                Lorem ipsum dolor sit amet, ipsum nulla, interdum euismod mauris eleifend ut. Fusce neque risus, scelerisque sit amet
                            </Description>
                            <ProfilePhotoContainer>
                                <RoundPhoto
                                    width={"32px"}
                                    height={"32px"}
                                    post_author_img={
                                        "http://trackwalkins.com/wp-content/uploads/2019/02/default-profile-picture.jpg"
                                    }/>
                                <AuthorNameContainer>

                                            André Sacilotti

                                </AuthorNameContainer>




                            </ProfilePhotoContainer>
                        </SectionAlign>
                    </CustomSection>
                </Box>

        </div>
    )
}

export default PostCard;