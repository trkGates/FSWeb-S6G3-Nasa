import "./reset.css";

import React from 'react'
import Navbar from '../components/Navbar';
import Veri from "../components/veri";
import "./Main.css";

const Main = () => {

    return (
        <div id='main-container'>
 <div id='container'> 
 <div className="header-container">
    <div className='header'>
        <div className='navbar'> <Navbar/>   </div>
    </div>
    </div>

    <div className="content-container">
        <div className="content">
        <Veri/>
        </div>
    </div>
    <div className='footer'>

    </div> 
 </div>
 </div>
    );
};

export default Main;

/*
For additional support, please contact us. When contacting us, please tell us what API you're accessing and provide the following account details so we can quickly find you:

Account Email: yusuf21706@gmail.com
Account ID: ca817173-8bd4-4732-b60b-2851aa0f4b71

*/