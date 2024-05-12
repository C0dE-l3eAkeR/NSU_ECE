
"use client"
import React from 'react';
import TransperentHeader5 from '../../../../partials/header/transparent_header_v5';
import Breadcrumb from '../../../../partials/elements/breadcrumb';
import { A11y, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
const ResearchItem = ({ imageUrl, title, excerpt }) => {
    return (
        
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
       
    );
}


const FacultyDetails = () => {
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
        },
        {
            imageUrl: "/assests/images/research/03.jpg",
            title: "Exploring Environmental Frontiers Unveiling Insights Labs Research",
            excerpt: "Our commitment extends beyond the confines of the laboratory walls; we aim to bridge the gap.",
            link: "research.html"
          }
      ];

    // Define variables with the information
    const name = "Jennifer Aarons, PhD";
    const designation = "Assistant Professor";
    const email = "jenni@Unipixuni.edu";
    const phone = "+122451247241";
    const biography = "Katherine Panagakos earned her M.A. in Classics from Tulane University and her Ph.D. in Greek and Latin from The Ohio State University. During her graduate work, she was a student at The American School of Classical Studies at Athens (ASCSA) and was a field walker and camp manager at the Eastern Korinthia Archaeogical Survey (EKAS). Katherine spent three years in a rotating position at schools in the Associated Colleges of the South (Southwestern University in Georgetown, TX; Furman University in Greenville, SC; and Rhodes College in Memphis, TN). She began teaching primarily Latin and Classics-related courses at Unipix in January of 2008. Katherine serves as the advisor for the Classics National Honor Society (ΗΣΦ) and OGRE (Order of Greco-Roman Enthusiasts), as well as being an active member of the Interdisciplinary Center of Hellenic Studies (ICHS) and the Friends of Hellenic Studies (FHS). Her research focuses on the ancient Greek and Roman novels. Katherine is currently working on three manuscripts. The first focuses on the role of pirates and robbers in the ancient novels and the other two are in collaboration with former students: one is an intermediate Greek text on Aesop’s Fables; the other is a collection of essays on suicide in the ancient Greco-Roman world.";
    const education = "Ph.D., The Ohio State University";
    const expertise = "Latin language and literature, Ancient Greek and Roman novels, Augustan Age, Classical mythology, Greco-Romans in film, zombies in popular culture";
    const courses = [
        "LANG 1220/1221 Beginning Latin I & II",
        "LANG 3760/3761 Advanced Greek I and II (Lucian, Longus, and Homer)",
        "GAH 1038 Reacting to the Past",
        "GAH 1401 Classical Myth and Legend"
    ];
    const publications = "Review of Stefan Tilg’s Chariton of Aphrodisias and the invention of the Greek Love Novel (Oxford UP, 2010). Bryn Mawr Classical Review. Bryn Mawr, PA: BMCR, 2011.";

    return (
       
        <section className="rts-faculty-details rts-section-padding">
            <div className="container">
                <div className="row sticky-coloum-wrap justify-content-sm-center g-5">
                    <div className="col-lg-4 col-md-10 col-sm-10 sticky-coloum-item" style={{position:"sticky"}}>
                        <div className="faculty-member">
                            <div className="faculty-member__details rt-center">
                                <div className="faculty-member__image" style={{position:"sticky"}}>
                                    <img src="assests/images/faculty/mem-1.jpg" style={{position:"sticky"}} alt="member image" />
                                </div>
                                <div className="faculty-member__info">
                                    <div className="faculty-member__info--social">
                                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                        <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                        <a href="#"><i className="fa-brands fa-medium"></i></a>
                                        <a href="#"><i className="fa-brands fa-youtube"></i></a>
                                    </div>
                                    <a href={`mailto:${email}`} className="email-contact"><span><i className="fa-light fa-envelope"></i></span>{email}</a>
                                    <a href={`callto:${phone}`} className="phone-contact"><span><i className="fa-light fa-phone"></i></span>{phone}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-10 col-sm-10">
                        <div className="member-info">
                            <div className="member-info__details">
                                <div className="short-info">
                                    <h4 className="rts-section-title mb--15">{name}</h4>
                                    <span className="designation">{designation}</span>
                                    <p className="description">{biography}</p>
                                </div>
                                <div className="short-info">
                                    <h5 className="rts-section-title">Biography</h5>
                                    <p className="description">{biography}</p>
                                    <h5 className="rts-section-title">Education</h5>
                                    <p className="description">{education}</p>
                                    <h5 className="rts-section-title">AREAS OF EXPERTISE</h5>
                                    <p className="description">{expertise}</p>
                                </div>
                                <div className="short-info">
                                    <h5 className="rts-section-title">COURSES</h5>
                                    <div className="course__single">
                                        <ul className="list-unstyled">
                                            {courses.map((course, index) => (
                                                <li key={index}><i className="far fa-check-circle px-2"></i><a href="#">{course}</a></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="short-info">
                                    <h5 className="rts-section-title">PUBLICATIONS</h5>
                                    <Swiper
           modules={[Navigation, A11y]}
           navigation
           spaceBetween={30}
          scrollbar={{ draggable: true }}
          slidesPerView="3"
        >
    <div className="row g-5">
    
    <div className="col-lg-4">
   
        {/* Render EventCard components */}
    {researchItems.map(item => (
       <SwiperSlide key={item.id}> <ResearchItem
       key={item.id}
       imageUrl={item.imageUrl}
       title={item.title}
       excerpt={item.excerpt}
             />
        </SwiperSlide>
    ))}
    
  
    </div>
    
    </div>
    </Swiper>
                            
                
        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};






const FacultyDetailsPage = () => {
    // Faculty data stored in an array of objects

    return (
        <>
          <TransperentHeader5/>  
    <Breadcrumb 
    image="assests/images/banner/breadcrumb.jpg"
    page="Faculty"
    title="Faculty Details"
    className="breadcrumb-height breadcumb-bg" // Pass @@class here
/>
          <FacultyDetails/>
        </>
    );
};

export default FacultyDetailsPage;

