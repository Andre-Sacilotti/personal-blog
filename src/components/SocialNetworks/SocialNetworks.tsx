import React from "react";
import {FaLinkedin, FaMedium, FaGithub, FaKaggle, FaDev} from 'react-icons/fa';
import {IconContext} from "react-icons";
import styled from 'styled-components'

const Container = styled.div`
      padding-left: 0px;
      padding-right: 100px;
      padding-top: 110px;

      @media only screen and (max-width: 850px) {
        padding-top: 50px;
        padding-right: 0px;
        padding-left: 0px;
        margin: 0px;
      }
    `

const CustomA = styled.a`
      padding-left: 5px;
      padding-right: 5px;
    `

const SocialNetworks = () => {

    return (
        <Container>
            <CustomA href={"https://www.linkedin.com/in/andre-sacilotti/"}>
                <IconContext.Provider value={{size: '1.9em', color:"#FFFFFF87"}}>
                    <FaLinkedin/>
                </IconContext.Provider>
            </CustomA>

            <CustomA href={"https://medium.com/@andre.sacilotti"}>
                <IconContext.Provider value={{size: '1.9em', color:"#FFFFFF87"}}>
                    <FaMedium/>
                </IconContext.Provider>
            </CustomA>

            <CustomA href={"https://github.com/Andre-Sacilotti"}>
                <IconContext.Provider value={{size: '1.9em', color:"#FFFFFF87"}}>
                    <FaGithub/>
                </IconContext.Provider>
            </CustomA>

            <CustomA href={"https://www.kaggle.com/andresacilotti"}>
                <IconContext.Provider value={{size: '1.9em', color:"#FFFFFF87"}}>
                    <FaKaggle/>
                </IconContext.Provider>
            </CustomA>

            <CustomA href={"https://dev.to/andresacilotti"}>
                <IconContext.Provider value={{size: '1.9em', color:"#FFFFFF87"}}>
                    <FaDev/>
                </IconContext.Provider>
            </CustomA>

        </Container>
    )
}

export default SocialNetworks