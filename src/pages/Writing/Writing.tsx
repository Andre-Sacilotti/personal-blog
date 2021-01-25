import React from 'react';
import TextEditor from '../../components/TextEditor/TextEditor'
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Writing = () => {


    return (

        <div>
            <div className={"Layout"}>
                <div className={'NavBar-MainLayout'}>
                    <Navbar type={""} />
                </div>

                <div className={'mainLayout'} >
                    <TextEditor/>
                </div>



            </div>

        </div>

    )
}

export default Writing
