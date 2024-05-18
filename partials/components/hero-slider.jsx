"use client"
import { useState, useEffect } from 'react';

import { A11y, Autoplay, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import next from 'next';


const HeroSlider = () => {
    // Set up state for controlling the slider
   
    return (
        <div className="rts-hero-slider rt-relative v_2">
            <div className="swiper-container">
                <div className="rts-hero-slider-active swiper swiper-data">
                 <Swiper
                  modules={[Navigation, A11y, EffectFade, Autoplay]}
                  navigation={{
                    prevEl: ".rt-prev",
                    nextEl: ".rt-next",
                  }}
                  slidesPerView={1}
                  effect="fade"
                  loop =  {true}
                  speed= {1000}
                  autoplay={{
                    delay: 7000,
                    disableOnInteraction: false,
                  }}
                  
               >       
                    <div className="swiper-wrapper">
                        {/* Slide 1 */}
                        <SwiperSlide>
                            <div className="rts-slider-height rts-slider-overlay rt-relative @@cslider">
                                <div className="rts-slider-bg" data-background="assests/images/banner/slider__4.jpg" style={{backgroundImage: "url(assests/images/banner/slider__4.jpg)"}}></div>
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-6 col-xl-6 col-md-8 col-sm-9">
                                            <div className="rts-slider">
                                                <div className="rts-slider-content">
                                                    <h6 className="rts-subtitle"><img src="assests/images/icon/e-cap.svg" alt="education hat"/> knowledge meets innovation</h6>
                                                    <h1 className="rts-slider-title">
                                                        Inspiring Minds
                                                        Shaping Futures
                                                    </h1>
                                                    <p className="rts-slider-desc">
                                                        Remember to tailor the section names to fit the specific needs and structure of your university website.
                                                    </p>
                                                    <div className="rts-slider-btn">
                                                       
                                                            <a className="rts-theme-btn btn-arrow">View Our Program <span><i className="fa-thin fa-arrow-right"></i></span></a>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Slide 2 */}
                       <SwiperSlide>
                            <div className="rts-slider-height rts-slider-overlay rt-relative @@cslider">
                                <div className="rts-slider-bg" data-background="assests/images/banner/slider__5.jpg" style={{backgroundImage: "url(assests/images/banner/slider__5.jpg)"}}></div>
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-6 col-xl-6 col-md-8 col-sm-9">
                                            <div className="rts-slider">
                                                <div className="rts-slider-content">
                                                    <h6 className="rts-subtitle"><img src="assests/images/icon/e-cap.svg" alt="education hat"/> knowledge meets innovation</h6>
                                                    <h1 className="rts-slider-title">
                                                        Inspiring Minds
                                                        Shaping Futures
                                                    </h1>
                                                    <p className="rts-slider-desc">
                                                        Remember to tailor the section names to fit the specific needs and structure of your university website.
                                                    </p>
                                                    <div className="rts-slider-btn">
                                                       
                                                            <a className="rts-theme-btn btn-arrow">View Our Program <span><i className="fa-thin fa-arrow-right"></i></span></a>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                       
                    
                    </SwiperSlide>
                    </div>
                    
                    {/* Slider arrows */}
                    <div className="rts-slider-arrow">
                        <div className="rt-slider-btn rt-next">
                            <i className="fa-regular fa-arrow-left"></i>
                        </div>
                        <div className="rt-slider-btn rt-prev">
                            <i className="fa-regular fa-arrow-right"></i>
                        </div>
                    </div>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default HeroSlider;
