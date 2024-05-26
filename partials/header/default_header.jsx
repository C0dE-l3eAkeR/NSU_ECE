"use client"
import React, { useState, useEffect } from 'react';

const Default_header = () => {
  const [contactInfo, setContactInfo] = useState({ email: '', phone: '' });

  useEffect(() => {
    // Fetch contact information from API
    fetchContactInfo();
  }, []);

  const fetchContactInfo = async () => {
    try {
      const response = await fetch('API_URL_HERE');
      if (!response.ok) {
        throw new Error('Failed to fetch contact information');
      }
      const data = await response.json();
      // Update state with fetched contact information
      setContactInfo({ email: data.email, phone: data.phone });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header id="rt-header" className="header-one header--sticky">
      <div className="header-top-one-wrapper rt-primary-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-top-one">
                <div className="left-information">
                  <a href={`mailto:${contactInfo.email}`} className="email"><i className="fa-light fa-envelope"></i>{contactInfo.email}</a>
                  <a href={`tel:${contactInfo.phone}`} className="email"><i className="fa-light fa-phone"></i>{contactInfo.phone}</a>
                </div>
                {/* right area */}
                <div className="right-information">
                  <ul className="rts-dropdown-menu language-switch">
                    <li className="has-child-menu">
                      <a href="#">
                        <span className="menu-item">English</span>
                        <i className="fa-regular fa-chevron-down"></i>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="#">
                            <span className="menu-item">Deutsch</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="menu-item">Portuguese</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="menu-item">Russian</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="rts-dropdown-menu switcher-currency">
                    <li className="has-child-menu">
                      <a href="#">
                        <span className="menu-item">USD</span>
                        <i className="fa-regular fa-chevron-down"></i>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="#">
                            <span className="menu-item">Euro</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="menu-item">Real</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="menu-item">Ruble</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="header-one-wrapper">
              <div className="left-side-header">
                <a href="index.html" className="logo-area">
                <img src="assests/images/logo/nsu-logo.png"  style={{height:"80px", width:"auto", paddingTop:"5px", paddingBottom:"5px"}} alt="north south" />
                </a>
              </div>
              {/* Navigation */}
              <div className="header-right-area-one">
                <div className="header-right-content">
                  <div className="search-form">
                    <form action="#">
                      <input type="text" name="s" id="search-site" placeholder="Search..." />
                      <button type="submit"><i className="fa-light fa-magnifying-glass"></i></button>
                    </form>
                  </div>
                  <div className="menu-bar" id="menu-btn">
                    <img src="/assests/images/icon/bar.svg" alt="menu-bar" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Default_header;
