"use client"
import React from 'react';
import Navigation from '../elements/nav_two';
import Sidebar from '../components/offcanvasmenu';
import { useState } from 'react';
import "../../styles/Mystyles.css"

const TransperentHeader5 = ({ className }) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleToggleSidebar = () => {
      setIsOpen(!isOpen);
      console.log(isOpen);
    };
    return (<>
        <header className={`header v__5 @@class header__sticky`}>
            <div className="container-fluid" id="headbg">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="header__wrapper">
                            <div className="header__logo">
                                <a href="/" className="header__logo--link">
                                <img src="assests/images/logo/nsu-logo.png"  style={{height:"80px", width:"auto", paddingTop:"5px", paddingBottom:"5px"}} alt="north south" />
                                </a>
                            </div>
                            <div className="header__menu">
                              <Navigation/>
                            </div>
                           
                            <div className="header__right">
                                <div className="header__right--item">
                                    <div id="menu-btn" className="menu__trigger" onClick={handleToggleSidebar}>
                                     
                                        <img src="assests/images/icon/menu__bar-2.svg" alt="bar" />
                                    </div>
                           </div>
                   </div>
                   
                        </div>
                    </div>
                </div>
            </div>
        </header>
         <Sidebar isOpen={isOpen} updateVariable={handleToggleSidebar}/>

         </>
    );
};

export default TransperentHeader5;
