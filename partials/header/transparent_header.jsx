
"use client"
import React from 'react';
import Navigation from '../elements/nav_two.jsx'

import { useState } from 'react';
import Sidebar from '../components/offcanvasmenu.jsx';

const  Transparent_header = ()=>{
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleSidebar = () => {
      setIsOpen(!isOpen);
      console.log(isOpen);
    };
   return (
 <>
<header className="header header__sticky v__1">
    <div className="container-fluid" >
        <div className="row">
            <div className="col-xl-12">
                <div className="header__wrapper">
                    <div className="header__logo">
                        <a href="index.html" className="header__logo--link">
                         <img src="assests/images/logo/logo__white.svg" alt="unipix"/>
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
 <Sidebar isOpen={isOpen} updateVariable={handleToggleSidebar}/></>
   )
}
export default Transparent_header;