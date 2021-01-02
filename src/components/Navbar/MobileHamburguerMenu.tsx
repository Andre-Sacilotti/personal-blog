import React, {useState} from "react";
import NavItem from "./NavItem";
import {IconContext} from "react-icons";
import {FiMenu} from "react-icons/fi";
import {FaSearch} from "react-icons/fa";

import "./Navbar.css"

import styled, {keyframes} from 'styled-components'


const HambDivAnimation = keyframes`
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0;
  }
  50% {
    opacity: 0.3;
  }
  75% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`

const HambDiv = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        animation: 0.6s ${HambDivAnimation};
    `



function MobileHamburguerMenu(props) {

    const [ShowHamb, setShowHamb] = useState(false)

    const toggle_hamburguerMenu = () => {
        setShowHamb(!ShowHamb)
        
        let element = document.getElementsByClassName("mainLayout");
        let element2 = document.getElementsByClassName("Footer-MainLayout");
        console.log(element[0]['style'])

        if (element[0]['className'].includes("HideMainLayout")){
            element[0]['className'] = element[0]['className'].replace(" HideMainLayout", "")
            element2[0]['className'] = element2[0]['className'].replace(" HideMainLayout", "")
            element[0]['className'] = element[0]['className'] + " ShowMainLayout"
            element2[0]['className'] = element2[0]['className'] + " ShowMainLayout"

        }else{

            element[0]['className'] = element[0]['className'].replace(" ShowMainLayout", "")
            element2[0]['className'] = element2[0]['className'].replace(" ShowMainLayout", "")
            element[0]['className'] = element[0]['className'] + " HideMainLayout"
            element2[0]['className'] = element2[0]['className'] + " HideMainLayout"

        }




    }


    return (
        <div>
            <div className={"MobileNavBar-menudiv"}>
                <button className={"HambNavBar-Button"} onClick={toggle_hamburguerMenu}>
                    <NavItem in_page={false} underline={false} page={null}>
                        <IconContext.Provider value={{size: '1.7em'}}>
                            <FiMenu/>
                        </IconContext.Provider>
                    </NavItem>
                </button>
            </div>

            { ShowHamb ? <HambDiv show={ShowHamb} className={"HambDiv-Container showhamb" }>
                <p className={"HambNavbar-CustomP"}>
                    Menu
                </p>
                <NavItem in_page={props.type === "Home"} page={"/"}>
                    Home
                </NavItem>

                <NavItem in_page={props.type === "Topics"} page={"/topics"}>
                    Topics
                </NavItem>

                <NavItem in_page={props.type === "About"} page={"/about"}>
                    About Me
                </NavItem>

                <NavItem in_page={false} underline={false} page={"/search"}>
                    <IconContext.Provider value={{size: '1.3em'}}>
                        <FaSearch/>
                    </IconContext.Provider>
                </NavItem>
            </HambDiv> : null}

        </div>
    )
}

export default MobileHamburguerMenu