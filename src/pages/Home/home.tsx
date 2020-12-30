import React from 'react';
import './layout.css'
import Navbar from '../../components/Navbar/Navbar'
import {IconContext} from "react-icons";

function Home() {
    return (
        <div className={'mainLayout'} >
            <Navbar type={"Home"} />
        </div>
    )
}

export default Home