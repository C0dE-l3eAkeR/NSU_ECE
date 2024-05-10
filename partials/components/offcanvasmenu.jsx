"use client"
import React from 'react';
import '../../styles/global.css'
import MetisMenu from "@metismenu/react";
import 'metismenujs/style';



export default function Sidebar({isOpen,updateVariable}) {


    return (
        <>
        <div id="side-bar" className={`side-bar ${isOpen ? 'show' : ''}`}>


            <button className="close-icon-menu" onClick={updateVariable}>
                <i className="far fa-times"></i>
            </button>
            <div className="inner-main-wrapper-desk">
                <div className="thumbnail">
                    <img src="/assests/images/logo/logo__five.svg" alt="Unipix-university" />
                </div>
                <div className="inner-content">
                    <p className="disc">
                        A modern HTML template for education, offering intuitive design & essential features for seamless learning experiences.
                    </p>
                    {/* offcanvase banner */}
                    <div className="offcanvase__banner mt--50">
                        <div className="offcanvase__banner--content">
                            <img src="/assests/images/offcanvase.jpg" alt="offcanvase" />
                            <a href="admission.html" className="rts-theme-btn">Apply Now</a>
                        </div>
                    </div>
                    <div className="offcanvase__info">
                        <div className="offcanvase__info--content">
                            <a href="tel:+61485826710"><span><i className="fa-sharp fa-light fa-phone"></i></span>+(61) 485-826-710</a>
                            <a href="#"><span><i className="fa-sharp fa-light fa-location-dot"></i></span>Yarra Park, Melbourne, Australia</a>
                            <div className="offcanvase__info--content--social">
                                <p className="title">Follow Us:</p>
                                <div className="social__links">
                                    <a href="#"><i className="fa-brands fa-facebook"></i></a>
                                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                    <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                                    <a href="#"><i className="fa-brands fa-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile-menu-main">
            <nav className="nav-main mainmenu-nav mt--30">

                <ul className="mainmenu metismenu" id="mobile-menu-active">
                    <MetisMenu>
                    <li className="has-droupdown">
                        <a href="#" className="main
                        
                        ">Homepages</a>
                        <ul className="submenu mm-collapse ">
                            <li><a className="mobile-menu-link" href="index.html">Home Style One</a></li>
                            <li><a className="mobile-menu-link" href="index-two.html">Home Style Two</a></li>
                            <li><a className="mobile-menu-link" href="index-three.html">Home Style Three</a></li>
                            <li><a className="mobile-menu-link" href="index-four.html">Home Style Four</a></li>
                            <li><a className="mobile-menu-link" href="index-five.html">Home Style Five</a></li>
                        </ul>
                    </li>
                    <li className="has-droupdown">
                        <a href="#" className="main">Pages</a>
                        <ul className="submenu mm-collapse">
                            <li><a className="mobile-menu-link" href="about.html">About Us</a></li>
                            <li><a className="mobile-menu-link" href="athletics.html">Athletics</a></li>
                            <li className="has-dropdown third-lvl">
                                <a href="javascript:void(0);">Faculty</a>
                                <ul className="submenu third-lvl base">
                                    <li><a className="mobile-menu-link" href="faculty.html">Faculty</a></li>
                                    <li><a className="mobile-menu-link" href="faculty-details.html">Faculty details</a></li>
                                </ul>
                            </li>
                            <li><a className="mobile-menu-link" href="research.html">Research</a></li>
                        </ul>
                    </li>
                    <li className="has-droupdown">
                        <a href="#" className="main">Academics</a>
                        <ul className="submenu mm-collapse">
                            <li><a className="mobile-menu-link" href="academic.html">Academic</a></li>
                            <li><a className="mobile-menu-link" href="admission.html">Admission</a></li>
                            <li><a className="mobile-menu-link" href="academic-area.html">Academic Area</a></li>
                            <li><a className="mobile-menu-link" href="campus-life.html">Campus Life</a></li>
                            <li><a className="mobile-menu-link" href="scholarship.html">Scholarship</a></li>
                            <li><a className="mobile-menu-link" href="tution-fee.html">Tution Fee</a></li>
                            <li><a className="mobile-menu-link" href="alumni.html">Alumni</a></li>
                            <li><a className="mobile-menu-link" href="program-single.html">Program Single</a></li>
                        </ul>
                    </li>

                    <li className="has-droupdown">
                        <a href="#" className="main">Events</a>
                        <ul className="submenu mm-collapse">
                            <li><a className="mobile-menu-link" href="event.html">Event</a></li>
                            <li><a className="mobile-menu-link" href="event-details.html">Event Details</a></li>
                        </ul>
                    </li>
                    <li className="has-droupdown">
                        <a href="#" className="main">Blog</a>
                        <ul className="submenu mm-collapse">
                            <li><a className="mobile-menu-link" href="blog.html">Blog</a></li>
                            <li><a className="mobile-menu-link" href="blog-grid.html">Blog Grid</a></li>
                            <li><a className="mobile-menu-link" href="blog-list.html">Blog List</a></li>
                            <li><a className="mobile-menu-link" href="blog-details.html">Blog Details</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="contact.html" className="main">Contact Us</a>
                    </li>
                    </MetisMenu>
                </ul>
                
            </nav>
            
            <div className="offcanvase__info--content mt--30">
                <a href="tel:+61485826710"><span><i className="fa-sharp fa-light fa-phone"></i></span>+(61) 485-826-710</a>
                <a href="#"><span><i className="fa-sharp fa-light fa-location-dot"></i></span>Yarra Park, Melbourne, Australia</a>
                <div className="offcanvase__info--content--social">
                    <p className="title">Follow Us:</p>
                    <div className="social__links">
                        <a href="#"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                        <a href="#"><i className="fa-brands fa-youtube"></i></a>
                    </div>
                </div>
            </div>
        </div>
         
    </div>
    
     {/* Back to top button */}
     <div className="progress-wrap">
     <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
       <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style={{transition: 'stroke-dashoffset 10ms linear 0s', strokeDasharray: '307.919, 307.919', strokeDashoffset: '307.919'}}></path>
     </svg>
   </div>

   {/* Your content goes here */}
   <div id="anywhere-home" className={`${isOpen ? 'bgshow' : ''}`}>
     {/* Content here */}
   </div></>
    );
}

