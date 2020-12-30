import React from 'react';
import '../layout.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from "../../components/Footer/Footer"
import {IconContext} from "react-icons";

function Home() {
    return (
        <div className={'mainLayout'} >
            <Navbar type={"Home"} />
            <Footer />
        </div>
    )
}

export default Home