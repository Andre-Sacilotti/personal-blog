import React from "react";
import './Navbar.css'
import {FaSearch} from 'react-icons/fa'
import {IconContext} from 'react-icons'

import NavItem from './NavItem'
import MobileHamburguerMenu from "./MobileHamburguerMenu";

function Navbar(props) {

    return (
        <div className={"NavContainer"}>

            <div className={"MobileNavBar"}>
                <MobileHamburguerMenu></MobileHamburguerMenu>
            </div>

            <div className={"Navbar"}>

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
                </div>

        </div>


    )
}


export default Navbar