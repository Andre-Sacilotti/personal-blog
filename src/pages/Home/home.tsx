import React from 'react';
import '../layout.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from "../../components/Footer/Footer"
import PostCard from "../../components/PostCard/PostCard";
import {IconContext} from "react-icons";


function Home() {
    return (
        <div>
            <div className={"Layout"}>
                <div className={'NavBar-MainLayout'}>
                    <Navbar type={"Home"} />
                </div>

                <div className={'mainLayout'} >
                    <PostCard />
                </div>

                <div className={'Footer-MainLayout'}>
                    <Footer/>
                </div>

            </div>
        <div className={"Overlay-Hamburguer"}>

        </div>
        </div>
    )
}

export default Home