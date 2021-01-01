import React from 'react';
import '../layout.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from "../../components/Footer/Footer"

function Home() {
    return (
        <div>
            <div className={"Layout"}>
                <div className={'mainLayout'} >
                    <Navbar type={"Home"} />
                </div>
                <Footer/>
            </div>

            <div className={"Overlay-Hamburguer"}>
            </div>
        </div>
    )
}

export default Home