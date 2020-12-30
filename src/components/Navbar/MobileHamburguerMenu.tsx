import React, {useState} from "react";
import NavItem from "./NavItem";
import {IconContext} from "react-icons";
import {FiMenu} from "react-icons/fi";
import {FaSearch} from "react-icons/fa";

import styled from 'styled-components'

function MobileHamburguerMenu() {

    const [ShowHamb, setShowHamb] = useState(false)

    const toggle_hamburguerMenu = () => {
        setShowHamb(!ShowHamb)
    }

    const HambMenu = styled.button`
        background-color: #16151F;
        border: 0px;
    `

    const HambDiv = styled.div`
        display: ${props => props.show ? "flex" : "none"};
        flex-direction: column;
        align-items: center;
    `


    return (
        <div>
            <div className={"MobileNavBar-menudiv"}>
                <HambMenu onClick={toggle_hamburguerMenu}>
                    <NavItem in_page={false} underline={false}>
                        <IconContext.Provider value={{size: '1.7em'}}>
                            <FiMenu/>
                        </IconContext.Provider>
                    </NavItem>
                </HambMenu>
            </div>

            <HambDiv show={ShowHamb}>
                <NavItem in_page={true} page={"/"}>
                    Home
                </NavItem>

                <NavItem in_page={false} page={"/topics"}>
                    Topics
                </NavItem>

                <NavItem in_page={false} page={"/about"}>
                    About Me
                </NavItem>

                <NavItem in_page={false} underline={false} page={"/search"}>
                    <IconContext.Provider value={{size: '1.3em'}}>
                        <FaSearch/>
                    </IconContext.Provider>
                </NavItem>
            </HambDiv>
        </div>
    )
}

export default MobileHamburguerMenu