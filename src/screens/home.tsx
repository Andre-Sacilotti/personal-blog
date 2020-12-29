import React from 'react';
import './layout.css'
import Navbar from '../components/Navbar/Navbar'

function Home() {


    return (
        <div className={'mainLayout'} >
            <Navbar type={'Home'} />
        </div>
    )
}

export default Home