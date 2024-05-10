// Navigation.js
"use client"
import React from 'react';
import NotificationButton from './notification_button';
import { useState } from 'react';

const Navigation = () => {
    const [notificationCount, setNotificationCount] = useState(3); 
    
    return (
        <div className="navigation">
            <nav className="navigation__menu">
                <ul>
                    <li className="navigation__menu--item has-child has-arrow">
                        <a href="/" className="navigation__menu--item__link">Home</a>
                        <ul className="submenu sub__style">
                            <li><a href="/index">Home Style One</a></li>
                            <li><a href="/index-two">Home Style Two</a></li>
                            <li><a href="/index-three">Home Style three</a></li>
                            <li><a href="/index-four">Home Style four</a></li>
                            <li><a href="/index-five">Home Style five</a></li>
                        </ul>
                    </li>

                    <li className="navigation__menu--item has-child has-arrow">
                        <a href="/about" className="navigation__menu--item__link">Pages</a>
                        <ul className="submenu sub__style">
                            <li><a href="/about">About</a></li>
                            <li><a href="/athletics">Athletics</a></li>
                            <li className="has-child has-arrow">
                                <a href="/People/Faculty">Faculty</a>
                                <ul className="sub__style">
                                    <li><a href="/People/Faculty">Faculty Staff</a></li>
                                    <li className="has-child"><a href="/People/Faculty/Faculty_Details">Faculty details</a></li>
                                </ul>
                            </li>
                            <li><a href="/research">Research</a></li>
                        </ul>
                    </li>
                    <li className="navigation__menu--item has-child has-arrow">
                        <a href="/academic" className="navigation__menu--item__link">Academics</a>
                        <ul className="submenu sub__style">
                            <li><a href="/academic">Academic</a></li>
                            <li><a href="/admission">Admission</a></li>
                            <li><a href="/academic-area">Academic Area</a></li>
                            <li><a href="/campus-life">Campus Life</a></li>
                            <li><a href="/scholarship">Scholarship</a></li>
                            <li><a href="/tution-fee">Tution Fee</a></li>
                            <li><a href="/alumni">Alumni</a></li>
                            <li><a href="/program-single">Program Single</a></li>
                        </ul>
                    </li>
                    <li className="navigation__menu--item has-child has-arrow">
                        <a href="/Events" className="navigation__menu--item__link">Event</a>
                        <ul className="submenu sub__style">
                            <li><a href="/Events">Event</a></li>
                            <li><a href="/Events/Event_Details">Event Details</a></li>
                        </ul>
                    </li>
                    <li className="navigation__menu--item has-child has-arrow">
                        <a href="/blog" className="navigation__menu--item__link">News</a>
                        <ul className="submenu sub__style">
                            <li><a href="/News">News</a></li>
                            <li><a href="/blog-grid">Blog Grid</a></li>
                            <li><a href="/blog-list">Blog List</a></li>
                            <li><a href="/News/News_Details">News Details</a></li>
                        </ul>
                    </li>
                    <li className="navigation__menu--item">
                        <a href="/contact" className="navigation__menu--item__link">Contact</a>
                    </li>
                    <li className="navigation__menu--item" style={{paddingLeft:"50px"}}>
                        <a href="/Login" className="navigation__menu--item__link">Login</a>
                    </li>
                    <li className="navigation__menu--ite" style={{marginTop:"25px"}}>
                    <a href="/Pending_Req" > <NotificationButton count={notificationCount} /></a>
               </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;
