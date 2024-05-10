"use client"
import React from 'react';

const Default_footer = () => {
  return (
    <footer className="footer @@class">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="footer__widget">
              <div className="footer__widget--logo">
                <a href="index"><img src="/assests/images/logo/logo__white.svg" alt="logo" /></a>
              </div>
              <p className="footer__widget--description">
                We are passionate education dedicated to providing high-quality resources learners
                all backgrounds.
              </p>
              <div className="footer__widget--social">
                <ul className="social">
                  <li className="social__link"><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                  <li className="social__link"><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                  <li className="social__link"><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                  <li className="social__link"><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer__widget">
              <h6 className="footer__widget--title">Our Campus</h6>
              <div className="footer__widget--menu">
                <ul>
                  <li><a href="academic.html">Academic</a></li>
                  <li><a href="athletics.html">Athletics</a></li>
                  <li><a href="campus-life.html">Campus life</a></li>
                  <li><a href="reasearch.html">Research</a></li>
                  <li><a href="academic-area.html">Academic Area</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="footer__widget">
              <h6 className="footer__widget--title">Our Campus</h6>
              <div className="footer__widget--menu">
                <ul>
                  <li><a href="about.html">About </a></li>
                  <li><a href="tution-fee.html">Tuition Fee</a></li>
                  <li><a href="alumni.html">Alumni</a></li>
                  <li><a href="faculty.html">Faculty Staff</a></li>
                  <li><a href="event.html">Event</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer__widget">
              <h6 className="footer__widget--title">Quick Button</h6>
              <div className="footer__widget--button">
                <a href="admission.html" className="cta__button active">Applying</a>
                <a href="scholarship.html" className="cta__button">Scholarship</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Default_footer;
