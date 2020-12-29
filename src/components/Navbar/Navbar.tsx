import React from "react";
import './Navbar.css'
import {FaSearch} from 'react-icons/fa'
import {FiMenu} from 'react-icons/fi'
import {IconContext} from 'react-icons'

import NavItem from './NavItem'


function Navbar(props) {

    const items = {};

    return (
        <div className={"NavContainer"}>

            <div className={"MobileNavBar"}>
                <NavItem in_page={false} underline={false}>
                    <IconContext.Provider value={{size: '1.3em'}}>
                        <FiMenu/>
                    </IconContext.Provider>
                </NavItem>
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
                    <IconContext.Provider value={{className: "NavSearch", size: '1.3em'}}>
                            <FaSearch/>
                    </IconContext.Provider>
                </NavItem>
                </div>

        </div>


    )
}


export default Navbar