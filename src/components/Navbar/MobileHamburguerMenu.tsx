import React, {useState} from "react";
import NavItem from "./NavItem";
import {IconContext} from "react-icons";
import {FiMenu} from "react-icons/fi";
import {FaSearch} from "react-icons/fa";

import "./Navbar.css"

import styled from 'styled-components'

const HambDiv = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
    `

function MobileHamburguerMenu(props) {

    const [ShowHamb, setShowHamb] = useState(false)

    const toggle_hamburguerMenu = () => {
        setShowHamb(!ShowHamb)
        
        let element = document.getElementsByClassName("mainLayout");
        let element2 = document.getElementsByClassName("Footer-MainLayout");

        if (element[0]['style'].display===""){
            element[0]['style'].display = "none";
            element2[0]['style'].display = "none";
        }else{
            element[0]['style'].display = "";
            element2[0]['style'].display = "";
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

            { ShowHamb ? <HambDiv show={ShowHamb} className={"HambDiv-Container"}>
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