
"use client"
import React from "react";
import { useState } from 'react';
import Transparent_header from "../partials/header/transparent_header";

import AboutSection from "../partials/components/about_h1";

import { A11y, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import TransperentHeader5 from "../partials/header/transparent_header_v5";




// or all tools are exported from the "all" file (excluding members-only plugins):
import { MotionPathPlugin } from "gsap/all";

// don't forget to register plugins
//gsap.registerPlugin( TweenMax, Power2, TimelineLite, ScrollTrigger, Draggable, Flip, MotionPathPlugin); 



const programs = [
    {
      imageUrl: "/assests/images/program/program__1.jpg",
      title: "Graduation Program",
      description: "Embark on a journey of knowledge discovery, and growth at North South University.",
      link: "program-single.html"
    },
    {
      imageUrl: "/assests/images/program/program__2.jpg",
      title: "Summer Program",
      description: "Embark on a journey of knowledge discovery, and growth at North South University.",
      link: "program-single.html"
    },
    {
      imageUrl: "/assests/images/program/program__3.jpg",
      title: "Undergraduate",
      description: "Embark on a journey of knowledge discovery, and growth at North South University.",
      link: "program-single.html"
    },
    {
      imageUrl: "/assests/images/program/program__4.jpg",
      title: "Online Program",
      description: "Embark on a journey of knowledge discovery, and growth at North South University.",
      link: "program-single.html"
    }
  ];
  
  const campusLifeItems = [
    {
      imageUrl: "/assests/images/campus/campus__life__bg__1.jpg",
      title: "Student Life",
      description: "Building a vibrant community of creative and accomplished people from around.",
      link: "campus-life.html"
    },
    {
      imageUrl: "/assests/images/campus/campus__life__bg__2.jpg",
      title: "Arts & Culture",
      description: "Building a vibrant community of creative and accomplished people from around.",
      link: "campus-life.html"
    },
    {
      imageUrl: "/assests/images/campus/campus__life__bg__3.jpg",
      title: "Athletics",
      description: "Building a vibrant community of creative and accomplished people from around.",
      link: "athletics.html"
    }
  ];
  const facultyMembers = [
    {
      imageUrl: "/assests/images/speaker/teacher__1.jpg",
      name: "C. Hannah Ueno",
      designation: "Assistant Professor"
    },
    {
      imageUrl: "/assests/images/speaker/teacher__2.jpg",
      name: "Thomas Fred",
      designation: "Associate Professor of History"
    },
    {
      imageUrl: "/assests/images/speaker/teacher__3.jpg",
      name: "Jennifer Aarons",
      designation: "Professor of Art"
    },
    {
      imageUrl: "/assests/images/speaker/teacher__4.jpg",
      name: "Michael McGarvey",
      designation: "Professor of Literature"
    }
  ];
  const researchItems = [
    {
      imageUrl: "/assests/images/research/01.jpg",
      title: "Are Social Networks Beneficial for our Society?",
      excerpt: "The American Journal of Applied Scientific Research (AJASR): A Rigorous Peer-Reviewed Platform.",
      link: "research.html"
    },
    {
      imageUrl: "/assests/images/research/02.jpg",
      title: "Unveiling the Frontiers Discovery and Innovation",
      excerpt: "The American Journal of Applied Scientific Research (AJASR): A Rigorous Peer-Reviewed Platform.",
      link: "research.html"
    },
    {
      imageUrl: "/assests/images/research/03.jpg",
      title: "Exploring Environmental Frontiers Unveiling Insights Labs Research",
      excerpt: "Our commitment extends beyond the confines of the laboratory walls; we aim to bridge the gap.",
      link: "research.html"
    }
  ];
  const testimonials = [
    {
      rating: 4,
      text: "I can't recommend The Gourmet Haven enough. It's a place for special date nights, or whenever you're in the mood for a culinary.",
      author: "Emma Elizabeth",
      designation: "Assistant Teacher"
    },
    {
        rating: 4,
        text: "I can't recommend The Gourmet Haven enough. It's a place for special date nights, or whenever you're in the mood for a culinary.",
        author: "Emma Elizabeth",
        designation: "Assistant Teacher"
      },
      {
        rating: 4,
        text: "I can't recommend The Gourmet Haven enough. It's a place for special date nights, or whenever you're in the mood for a culinary.",
        author: "Emma Elizabeth",
        designation: "Assistant Teacher"
      }
  ];
  const events = [
    {
      imageUrl: "/assests/images/event/01.jpg",
      date: "Nov 11, 2023",
      location: "Yarra Park, UK",
      title: "Edu Fest 2023: Igniting Minds Off on Transforming Lives",
      link: "event-details.html"
    },
    {
      imageUrl: "/assests/images/event/02.jpg",
      date: "Nov 11, 2023",
      location: "Yarra Park, UK",
      title: "Sustainability & Development Showcase: Green Living at North South",
      link: "event-details.html"
    },
    {
      imageUrl: "/assests/images/event/03.jpg",
      date: "Nov 11, 2023",
      location: "Yarra Park, UK",
      title: "Career Carnival: Explore Your Professional Journey",
      link: "event-details.html"
    }
  ];
          

  const Thumbdata ={
    author: "Masum Sakib",
        date: "November 28, 2023",
        title: "Classroom community-building It’s ok to try something new!",
        imageUrl: "/assests/images/blog/big-thumb-1.jpg",
        link: "blog-details.html"

}

const blogData = [
    {
        author: "Masum Sakib",
        date: "November 28, 2023",
        title: "Classroom community-building It’s ok to try something new!",
        imageUrl: "/assests/images/blog/small-thumb-1.jpg",
        link: "blog-details.html"
    },
    {
        author: "Samira Khan",
        date: "November 28, 2023",
        title: "Those inequalities are inequalities that occur within households",
        imageUrl: "/assests/images/blog/small-thumb-1.jpg",
        link: "blog-details.html"
    },
    // Add other blog items here
];

const ProgramItem = ({ imageUrl, title, description, buttonText, buttonLink }) => {
    return (
        <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="rts__program--item" style={{backgroundImage: `url(${imageUrl})`}}>
                <h5 className="rts__program--item--title">{title}</h5>
                <p className="rts__program--item--description">{description}</p>
                <a href={buttonLink} className="rts-nbg-btn btn-arrow">{buttonText}<span><i className="fa-sharp fa-regular fa-arrow-right"></i></span></a>
            </div>
        </div>
    );
}


const CampusLifeItem = ({ imageUrl, title, description, buttonLink }) => {
    return (
        <div className="campus__life--single">
            <div className="campus__life--single--bg">
                <img src={imageUrl} alt="" />
            </div>
            <div className="campus__life--single--flex">
                <div className="campus__life--single--content">
                    <h4 className="campus__life--single--title"><a href={buttonLink}>{title}</a></h4>
                    <p className="campus__life--single--description">{description}</p>
                </div>
                <div className="campus__life--single--button">
                    <a href={buttonLink}><i className="fa-sharp fa-regular fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    );
}

const FacultyMember = ({ imageUrl, name, designation }) => {
    return (
        <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="rts__single--member">
                <div className="rts__single--member--thumb">
                    <a href="faculty-details.html">
                        <img src={imageUrl} alt="" />
                    </a>
                </div>
                <div className="rts__single--member--meta">
                    <h5 className="rts__single--member--meta--title">
                        <a href="faculty-details.html">{name}</a>
                    </h5>
                    <span className="rts__single--member--meta--designation">
                        {designation}
                    </span>
                </div>
            </div>
        </div>
    );
}


const ResearchItem = ({ imageUrl, title, excerpt }) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="rts__research--single">
                <div className="rts__research--single--thumb">
                    <a href="research.html">
                        <img src={imageUrl} alt="" />
                    </a>
                </div>
                <div className="rts__research--single--meta">
                    <a className="rts__research--single--meta--title" href="research.html">{title}</a>
                    <p className="rts__research--single--meta--excerpt">{excerpt}</p>
                </div>
            </div>
        </div>
    );
}




const TestimonialSlide = ({ rating, text, authorName, authorDesignation, authorImage }) => {
    return (
        <div className="swiper-slide">
            <div className="rts__single--testimonial">
                <div className="rts__rating--star">
                    {Array.from({ length: rating }, (_, index) => (
                        <i key={index} className="fa-sharp fa-solid fa-star"></i>
                    ))}
                    {Array.from({ length: 5 - rating }, (_, index) => (
                        <i key={index} className="fa-sharp fa-light fa-star"></i>
                    ))}
                </div>
                <p className="rts__single--testimonial--text">{text}</p>
                <div className="rts__single--testimonial--author">
                    <div className="rts__single--testimonial--author--meta">
                        <div className="rts__author--img">
                            <img src={authorImage} alt="author" />
                        </div>
                        <div className="rts__author--info">
                            <h5 className="mb-0">{authorName}</h5>
                            <span className="designation">{authorDesignation}</span>
                        </div>
                    </div>
                    <div className="rts__single--testimonial--quote">
                        <img src="/assests/images/testimonial/quote.svg" alt="quote" />
                    </div>
                </div>
            </div>
        </div>
    );
}


const EventCard = ({ imageUrl, date, location, title }) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="rts__single--event">
                <div className="rts__single--event--thumb">
                    <a href="event-details.html">
                        <img src={imageUrl} alt="event" />
                    </a>
                </div>
                <div className="rts__single--event--meta">
                    <div className="rts__single--event--meta--dl">
                        <span className="date">
                            <img src="/assests/images/icon/calendar.svg" alt="" />
                            <span>{date}</span>
                        </span>
                        <span className="location">
                            <i className="fa-sharp fa-light fa-location-dot"></i>
                            <span>{location}</span>
                        </span>
                    </div>
                    <h5 className="rts__single--event--meta--title">
                        <a href="event-details.html">{title}</a>
                    </h5>
                    <a href="event-details.html" className="rts__round--btn">
                        <i className="fa-light fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}
const BlogArea = () => {
    
    return (
        <div className="rts-blog @@class">
            <div className="container">
              
                <div className="row">
                <div className="rts-section rts-border-bottom-1 mb--40 pb--0">
                <div className="rts__section--wrapper">
                
                    <h2 className="rts__section--title ">Latest NEWS</h2>
                    <h5 class="rts__section--title mt--10">Delve into the world of NSU</h5>
                    

                    <div className="rts__section--link">
                        <a href="event.html" className="rts-nbg-btn btn-arrow">View All<span><i className="fa-sharp fa-regular fa-arrow-right"></i>
                        </span></a>
                    </div>
                   
                </div>
               </div>
            </div>
                            
                  

                
                {/* blog content */}
                <div className="row g-5 justify-content-md-center">
                    <div className="col-md-11 col-lg-6">
                        <div className="rts-blog-post blog-v-full">
                            <div className="single-blog-post">
                                <a href="blog-details.html" className="blog-thumb">
                                    <img src={Thumbdata.imageUrl} alt="blog-thumb" />
                                </a>
                                <div className="blog-content">
                                    <div className="post-meta">
                                        <div className="rt-author">
                                            <span>
                                                <i className="fa-light fa-user"></i>
                                            </span>
                                            <a href="#">{Thumbdata.author}</a>
                                        </div>
                                        <div className="rt-date">
                                            <span><i className="fal fa-calendar"></i></span>
                                            <span>{Thumbdata.date}</span>
                                        </div>
                                    </div>
                                    <a href="blog-details.html" className="post-title">
                                        {Thumbdata.title}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-11 col-lg-6">
                        <div className="rts-blog-post">
                            {/* single blog */}
                    {blogData.map((blog, index) => (
                                <div  key={index} className="single-blog-post">
                                    <div className="blog-thumb">
                                        <a href={blog.link}>
                                            <img src={blog.imageUrl} alt="post-thumbnail" />
                                        </a>
                                    </div>
                                    <div className="blog-content">
                                        <div className="post-meta">
                                            <div className="rt-author">
                                                <span>
                                                    <i className="fa-light fa-user"></i>
                                                </span>
                                                <a href="#">{blog.author}</a>
                                            </div>
                                            <div className="rt-date">
                                                <span><i className="fal fa-calendar"></i></span>
                                                <span>{blog.date}</span>
                                            </div>
                                        </div>
                                        <a href={blog.link} className="post-title">
                                            {blog.title}
                                        </a>
                                    </div>
                                </div>
                    ))}
                </div>
            </div>
        </div>
                          
                            {/* single blog */}
                            {/* Add other single blog items here */}
                        </div>
                    </div>
               
    );
}


const Index = ()=>{

    const [isOpen, setIsOpen] = useState(false);

   

    const updateVariable = () => {
        setIsOpen(!isOpen);
    };
   
    return(
    

    
<div className="page">
<TransperentHeader5 />
<Transparent_header updateVariable={updateVariable}/>
<title>Home</title>
    <div className="banner v__1">
        <div className="container">
            <div className="col-sm-12">
                <div className="banner__wrapper">
                    <div className="banner__wrapper--left">
                        <img src="/assests/images/banner/image__1.jpg" alt=""/>
                    </div>
                    <div className="banner__wrapper--middle">
                        <div className="banner__content">
                            <h6 className="banner__content--sub">
                               <img src="/assests/images/icon/e-cap.svg" alt="cap"/> knowledge meets innovation
                            </h6>
                            <h1 className="banner__content--title">
                                     Dept.
                                <span> of ECE </span>
                            </h1>
                            <div className="banner__content--circle rts__circle v__2">
                                <svg className="spinner" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <path id="circle" d="M50,50 m-37,0a37,37 0 1,1 74,0a37,37 0 1,1 -74,0"></path>
    </defs>
    <text>
        <textPath href="#circle">North South University * Estd. 1971 * Explore Future *</textPath>
    </text>
</svg>
                                <div className="rts__circle--icon save-from-hidden">
                                    <a href="https://www.youtube.com/watch?v=7ahgosTZJHg" className="video-play  rts-video-btn popup-video">
                                        <i className="fa-sharp fa-solid fa-play"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="banner__content--description">
                                <p>Remember to tailor the section names to fit the specific needs and
                                    structure of your university website.
                                </p>
                                <a href="program-single.html" className="rts-theme-btn btn-arrow">View Our Program 
                                    <span><i className="fa-regular fa-arrow-right"></i></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="banner__wrapper--right">
                        <img src="/assests/images/banner/image__2.jpg" alt="banner right"/>
                    </div>
                </div>
          
                <div className="banner__wrapper--shape">
                    <img src="/assests/images/banner/banner-svg.svg" alt="banner"/>
                </div>
            </div>
        </div>
        <div className="grid-line">
            <div className="grid-lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
    </div>
    <div className="v_1 rts__light rts-section-padding">
       <BlogArea/>
    </div>
    
    <section className="rts__section rts-section-padding">
        <div className="container">
            <div className="row">
                <div className="rts__section--wrapper">
                    <h2 className="rts__section--title">Upcoming event</h2>
                    <div className="rts__section--link">
                        <a href="event.html" className="rts-nbg-btn btn-arrow">View All<span><i className="fa-sharp fa-regular fa-arrow-right"></i>
                        </span></a>
                    </div>
                </div>
            </div>
      
            <div className="row g-5">
           
                {/* Render EventCard components */}
            {events.map(event => (
                <EventCard
                    key={event.id}
                    imageUrl={event.imageUrl}
                    date={event.date}
                    location={event.location}
                    title={event.title}
                />
            ))}
            
            </div>
        </div>
    </section>
   

  

    <section className="rts__section rts__light rts-section-padding">
        <div className="container">
            <div className="row">
                <div className="rts__section--wrapper">
                    <h2 className="rts__section--title">Meet your Professors</h2>
                    <div className="rts__section--link">
                        <a href="faculty.html" className="rts-nbg-btn btn-arrow">Find More Professor<span><i className="fa-sharp fa-regular fa-arrow-right"></i>
                        </span></a>
                    </div>
                </div>
            </div>
            
            <div className="row g-5">
            
                {/* Render FacultyMember components */}
                {facultyMembers.map(member => (
                    <FacultyMember
                        key={member.id}
                        imageUrl={member.imageUrl}
                        name={member.name}
                        designation={member.designation}
                    />
                ))}
        
              
            </div>
        
        </div>
    </section>

    <section className="rts__section rts-section-padding">
        <div className="container">
            <div className="row">
                <div className="rts__section--wrapper v__3">
                    <h2 className="rts__section--title">PUBLICATION & <br/>
                        RESEARCH </h2>
                    <div className="rts__section--details">
                        <p className="rts__description">
                            Dive into the vast array of courses offered at our university, spanning across 10+ specializations. Embrace an educational journey that ignites intellectual curiosity and nurtures intuitive learning among our students.
                        </p>
                        <a href="research.html" className="rts-nbg-btn btn-arrow">Learn More<span><i className="fa-sharp fa-regular fa-arrow-right"></i>
                        </span></a>
                    </div>
                </div>
            </div>
         
            <div className="row g-5">
            
            {researchItems.map(item => (
                    <ResearchItem
                        key={item.id}
                        imageUrl={item.imageUrl}
                        title={item.title}
                        excerpt={item.excerpt}
                    />
                ))}
        
            </div>
        </div>
    </section>

    <section className="rts__section rts__light rts-section-padding">
        <div className="container">
            <div className="row">
                <div className="rts__section--wrapper">
                    <h2 className="rts__section--title">Programs</h2>
                    <div className="rts__section--link">
                        <a href="program-single.html" className="rts-nbg-btn btn-arrow">more program<span><i className="fa-sharp fa-regular fa-arrow-right"></i>
                        </span></a>
                    </div>
                </div>
           
                <div className="row g-5">
                    {programs.map(program => (
                        <ProgramItem
                            key={program.id}
                            imageUrl={program.imageUrl}
                            title={program.title}
                            description={program.description}
                            buttonText="Learn More"
                            buttonLink={`program-single/${program.id}`}
                        />
                    ))}
                </div>
            </div>
            </div>
    </section>
 
    <section className="rts__section rts-section-padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-md-6">
                    <div className="rts__section--wrapper v__2">
                        <h2 className="rts__section--title">Campus Life</h2>
                        <p className="rts__section--description">Embark on a journey of knowledge, discovery, and growth at  North South University. Our admissions process is designed identify bright, motivated individuals who are eager contribute to our dynamic academic community.</p>
                        <div className="campus__vector">
                            <img src="/assests/images/campus/campus__vector.svg" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 col-md-6">
                    <div className="campus__life">

                   
                    {/* Render CampusLifeItem components */}
                    {campusLifeItems.map(item => (
                        <CampusLifeItem
                            key={item.id}
                            imageUrl={item.imageUrl}
                            title={item.title}
                            description={item.description}
                            buttonLink={item.buttonLink}
                        />
                    ))}
             
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="rts__section rts-section-padding rts__primary__bg">
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <div className="rts__section--wrapper v__4">
                        <h2 className="rts__section--title">Student Feedback</h2>
                        <p className="rts__section--description">Your opinion matters, and by providing feedback, you contribute to the continuous enhancement of our academic programs, support services, and campus life</p>
                        <div className="rts__slider--arrow">
                            <div className="rts__prev slider__btn"><i className="fa-light fa-arrow-left"></i></div>
                            <div className="rts__next slider__btn"><i className="fa-light fa-arrow-right"></i></div>
                        </div>
                    </div>
                </div>
              
                <div className="col-lg-7">
            <Swiper
          modules={[Navigation, A11y]}
         
          spaceBetween={30}
          navigation
        
          scrollbar={{ draggable: true }}
          slidesPerView="auto"
        >       
            {/* Render TestimonialSlide components */}
            {testimonials.map(testimonial => (
               <SwiperSlide  key={testimonial.id}> <TestimonialSlide   
                    rating={testimonial.rating}
                    text={testimonial.text}
                    authorName={testimonial.authorName}
                    authorDesignation={testimonial.authorDesignation}
                    authorImage={testimonial.authorImage}
                /></SwiperSlide>
            ))}
            </Swiper>
            </div>
            </div>
            </div>
    </section>


    <AboutSection />
 
    
</div>

    );
}
export default Index;