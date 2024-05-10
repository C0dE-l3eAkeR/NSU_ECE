
"use client"
import { A11y, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

const EventCard = ({ imageUrl, date, location, title }) => {
   
    return (
        
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
        
    );
}

export default function Pending_req() {

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
      const news = [
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
return(<><section className="rts__section rts-section-padding">
<div className="container">
    <div className="row">
        <div className="rts__section--wrapper">
            <h2 className="rts__section--title"> Event Post Reqs.</h2>
            <div className="rts__section--link">
               
            </div>
        </div>
    </div>
    <Swiper
           modules={[Navigation, A11y]}
         
           spaceBetween={30}
           navigation
          scrollbar={{ draggable: true }}
          slidesPerView="3"
        >
    <div className="row g-5">
    
    <div className="col-lg-4 col-md-6 col-sm-6">
   
        {/* Render EventCard components */}
    {events.map(event => (
       <SwiperSlide key={event.id}> <EventCard
            
            imageUrl={event.imageUrl}
            date={event.date}
            location={event.location}
            title={event.title}
        />
        </SwiperSlide>
    ))}
    
  
    </div>
    
    </div>
    </Swiper>
</div>
</section>
<section className="rts__section rts-section-padding">
<div className="container">
    <div className="row">
        <div className="rts__section--wrapper">
            <h2 className="rts__section--title"> News Post Reqs.</h2>
            <div className="rts__section--link">
                
            </div>
        </div>
    </div>

    <div className="row g-5">
    <Swiper
           modules={[Navigation, A11y]}
           spaceBetween={30}
           navigation
          scrollbar={{ draggable: true }}
          slidesPerView="3"
        > 
    <div className="col-lg-4 col-md-6 col-sm-6">
   
        {/* Render EventCard components */}
    {news.map(event => (
       <SwiperSlide key={event.id}> <EventCard
            
            imageUrl={event.imageUrl}
            date={event.date}
            location={event.location}
            title={event.title}
        />
        </SwiperSlide>
    ))}
    
  
    </div>
    </Swiper>
    </div>
</div>
</section>

</>)
}