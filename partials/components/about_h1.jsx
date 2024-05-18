// AboutSection.js
"use client"
import React from 'react';

const AboutSection = () => {
    return (
        <section className="about  rts__padding--120-100 v__1">
            <div className="container">
                <div className="row justify-content-md-center align-items-center">
                    <div className="col-lg-6 col-md-10">
                        <div className="about__images">
                            <div className="about__images--wrapper">
                                <div className="about__images--wrapper--left">
                                    <img src="/assests/images/about/about__h1.png" alt="" />
                                </div>
                                <div className="about__images--wrapper--center">
                                    <div className="rts__circle v__1">
                                        <svg className="spinner" viewBox="0 0 100 100">
                                            <defs>
                                                <path id="circle-2" d="M50,50 m-37,0a37,37 0 1,1 74,0a37,37 0 1,1 -74,0"></path>
                                            </defs>
                                            <text>
                                                <textPath xlinkHref="#circle-2">North South University * Estd. 1971 * Explore Future *</textPath>
                                            </text>
                                        </svg>
                                        <div className="rts__circle--icon">
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="about__images--wrapper--right">
                                    <img src="/assests/images/about/about__h2.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-10">
                        <div className="about__content">
                            <h2 className="rts__title">About Our University North South</h2>
                            <p className="rts__description">At University North South, we believe in the transformative power of education and the boundless potential within every individual. Established in 1971, we have been dedicated to fostering intellectual curiosity, academic excellence, and a vibrant campus community.</p>
                            <div className="stroke__text v__1">EST. 1971</div>
                            <a href="program-single.html" className="rts-nbg-btn btn-arrow">University Overview <span><i className="fa-sharp fa-regular fa-arrow-right"></i></span></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* funfact */}
            <div className="container rts__pt100">
                <div className="row justify-content-center">
                    <div className="col-lg-10 rts-funfact v__1">
                        <div className="rts-funfact-wrapper">
                            <div className="single-cta-item">
                                <h2 className="single-cta-item__title">16,214</h2>
                                <p>North South University Faculty & Staff</p>
                            </div>
                            <div className="single-cta-item ms-10">
                                <h2 className="single-cta-item__title">No. 1</h2>
                                <p>Private University in Bangladesh</p>
                            </div>
                            <div className="single-cta-item">
                                <h2 className="single-cta-item__title">20,000</h2>
                                <p>undergraduate & graduate students</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
