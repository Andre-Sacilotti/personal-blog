import React, {useState} from "react";
import './Navbar.css'
import {FiMenu} from 'react-icons/fi'
import {FaSearch} from 'react-icons/fa'
import {IconContext} from 'react-icons'

import NavItem from './NavItem'
import MobileHamburguerMenu from "./MobileHamburguerMenu";
import styled from 'styled-components'


function Navbar(props) {

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
    `



    return (
        <div className={"NavContainer"}>

            <div className={"MobileNavBar"}>

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
                    <NavItem in_page={true}>
                        Home
                    </NavItem>

                    <NavItem in_page={false}>
                        Topics
                    </NavItem>

                    <NavItem in_page={false} >
                        About Me
                    </NavItem>

                    <NavItem in_page={false} underline={false}>
                        <IconContext.Provider value={{size: '1.3em'}}>
                            <FaSearch/>
                        </IconContext.Provider>
                    </NavItem>
                </HambDiv>
            </div>

            <div className={"Navbar"}>

                <NavItem in_page={true}>
                    Home
                </NavItem>

                <NavItem in_page={false}>
                    Topics
                </NavItem>

                <NavItem in_page={false} >
                    About Me
                </NavItem>

                <NavItem in_page={false} underline={false}>
                    <IconContext.Provider value={{size: '1.3em'}}>
                            <FaSearch/>
                    </IconContext.Provider>
                </NavItem>
                </div>

        </div>


    )
}


export default Navbar