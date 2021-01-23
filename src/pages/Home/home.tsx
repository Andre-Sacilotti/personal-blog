import React from 'react';
import '../layout.css'
import Navbar from '../../components/Navbar/Navbar'
import PostCard from "../../components/PostCard/PostCard";
import ShowCaseGrid from '../../components/ShowCaseGrid/ShowCaseGrid'
import {IconContext} from "react-icons";


function Home() {
    return (
        <div>
            <div className={"Layout"}>
                <div className={'NavBar-MainLayout'}>
                    <Navbar type={"Home"} />
                </div>

                <div className={'mainLayout'} >
                    <ShowCaseGrid>
                        <PostCard />
                        <PostCard />
                        <PostCard />
                        <PostCard />
                    </ShowCaseGrid>

                </div>



            </div>

        </div>
    )
}

export default Home