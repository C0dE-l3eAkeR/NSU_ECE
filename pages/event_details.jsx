"use client"
import React from 'react';
import { useState,useEffect } from 'react';

const Countdown = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft]);

    const formatTime = (time) => {
        return time < 10 ? `0${time}` : time;
    };

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <div className="event-count-down">
                <div className="count-item">
                    <p><span id="day">{formatTime(timeLeft.days)}</span>day</p>
                </div>
                <div className="count-item">
                    <p><span id="hour">{formatTime(timeLeft.hours)}</span>hours</p>
                </div>
                <div className="count-item">
                    <p><span id="minute">{formatTime(timeLeft.minutes)}</span>minute</p>
                </div>
                <div className="count-item">
                    <p><span id="second">{formatTime(timeLeft.seconds)}</span>second</p>
                </div>
            </div>
            <div className="event-timeout rt-center mt--20">
                {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0 ? (
                    <div id="timeout">Event has ended!</div>
                ) : (
                    <div id="timeout"> Left Until Event</div>
                )}
            </div>
        </>
    );
};





const EventDetails = () => {

    const targetDate = '2024-12-31T23:59:59';
    // Event details
    const aboutEvent = "Join us for the Future Minds Symposium, a thought-provoking educational event designed to inspire and empower individuals to navigate the challenges and opportunities of tomorrow's world. This symposium brings together leading experts, visionaries, and innovators from various fields to explore cutting-edge ideas and share insights on shaping the future.";

    const workshopsFeature = {
        heading: "Interactive Workshops:",
        description: "Connect with like-minded individuals, professionals, and mentors. Build a network that will support your personal and professional growth, fostering collaboration and idea exchange."
    };

    const networkingFeature = {
        heading: "Networking Opportunities:",
        description: "Hear from renowned thought leaders who will delve into topics such as artificial intelligence, sustainability, and the future of work. Gain valuable perspectives to help you thrive."
    };

    const registrationFeature = {
        heading: "Registration:",
        description: "Secure your spot today and be part of the Future Minds Symposium. Early bird registration is now open at www.Unipix Don't miss this opportunity to gain valuable insights."
    };
    const eventInformation = [
        { label: "Cost:", value: "$86.00" },
        { label: "Date:", value: "December 26, 2023" },
        { label: "Total Slot:", value: "54" },
        { label: "Booked Slot:", value: "0" }
    ];

    const eventVenueInformation = [
        { label: "Venue:", value: "Starry Haven Events Center" },
        { label: "Location:", value: "Pinecrest Golf Club,123 Fairway Lane, Anytown, USA" },
        { label: "Phone Number:", value: "(+1) 0 221 457 441" },
        { label: "Web Site:", value: "www.Unipix.com" }
    ];
    const speakers = [
        { 
            name: "Rick Zonson",
            image: "assests/images/speaker/01.jpg",
            designation: "Assistant Teacher"
        },
        { 
            name: "Thomas Fred",
            image: "assests/images/speaker/02.jpg",
            designation: "Teacher"
        },
        { 
            name: "Albert Mack",
            image: "assests/images/speaker/03.jpg",
            designation: "Head Teacher"
        },
        { 
            name: "Micheal Alfred",
            image: "assests/images/speaker/04.jpg",
            designation: "Assistant Teacher"
        }
    ];

    const events = [
        { 
            image: "assests/images/campus/event/01.jpg",
            date: "November 28, 2023",
            time: "10:30 am",
            title: "Edu Fest 2023: Igniting Minds Off on Transforming Lives",
            place: "Yarra Park, UK"
        },
        { 
            image: "assests/images/campus/event/02.jpg",
            date: "November 30, 2023",
            time: "10:30 am",
            title: "Edu Fest 2023: Igniting Minds Off on Transforming Lives",
            place: "Yarra Park, UK"
        },
        { 
            image: "assests/images/campus/event/03.jpg",
            date: "December 03, 2023",
            time: "10:30 am",
            title: "Edu Fest 2023: Igniting Minds Off on Transforming Lives",
            place: "Yarra Park, UK"
        }
    ];



    return (
        <>
        <div className="rts-event-details pt--120">
            <div className="container">
              <div className="row justify-content-md-center justify-content-start">
              <div className="col-lg-7 col-md-10">
            <div className="event-details">
                <div className="event-details__content">
                    <div className="event-details__content--thumb">
                        <img src="assests/images/campus/event/event-details.jpg" alt="event details" />
                    </div>
                    <div className="event-details__content--text">
                        <div className="rts-section">
                            <h4 className="rts-section-title">About The Event</h4>
                            <p className="description">{aboutEvent}</p>
                        </div>
                    </div>
                    <div className="event-details__content--feature">
                        {/* Single feature: Interactive Workshops */}
                        <div className="single-feature">
                            <p className="feature-heading">{workshopsFeature.heading}</p>
                            <p className="feature-description">{workshopsFeature.description}</p>
                        </div>
                        {/* Single feature: Networking Opportunities */}
                        <div className="single-feature">
                            <p className="feature-heading">{networkingFeature.heading}</p>
                            <p className="feature-description">{networkingFeature.description}</p>
                        </div>
                        {/* Single feature: Registration */}
                        <div className="single-feature">
                            <p className="feature-heading">{registrationFeature.heading}</p>
                            <p className="feature-description">{registrationFeature.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 col-md-10">
            <div className="event-sidebar">
                {/* Event information */}
                <div className="event-information">
                    <h5 className="rts-section-title">Event Information</h5>
                    <div className="single-info">
                        {/* Single repeat item: Event Information */}
                        {eventInformation.map((info, index) => (
                            <div className="info-repeat" key={index}>
                                <div className="left-side">
                                    <span><i className="fa-light fa-money-check-dollar"></i></span>
                                    {info.label}
                                </div>
                                <div className="right-side">
                                    <span className="desc">{info.value}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Book button */}
                    <div className="book-button">
                        <a href="#" className="rts-theme-btn primary">Book Now</a>
                    </div>
                    {/* Countdown */}
                    
                    <Countdown targetDate={targetDate}/>          



                </div>
                {/* Event venue */}
                <div className="event-venue mt--50">
                    <h5 className="rts-section-title">Event Venue</h5>
                    <div className="event-venu-information">
                        <div className="single-info">
                            {/* Single repeat item: Event Venue */}
                            {eventVenueInformation.map((info, index) => (
                                <div className="info-repeat" key={index}>
                                    <div className="left-side bold">{info.label}</div>
                                    <div className="right-side">
                                        <span className="desc">{info.value}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Book button */}
                    </div>
                </div>
            </div>
        </div>
     </div>
     <div className="row">
            <div className="event-location mt--60">
                <div className="rts-section">
                    <h3 className="rts-section-title">
                        The Event Location
                    </h3>
                </div>
            </div>
            <div className="col-12">
                <div className="event-location-map">
                    <iframe
                        className="event-location-map-iframe"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14602.288851207937!2d90.47855065!3d23.798243149999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1663151706353!5m2!1sen!2sbd"
                        style={{ border: '0' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>


        </div>
      </div>
      <div className="rts-event-speaker mt--40">
      <div className="container">
          <div className="row">
              <div className="rts-section">
                  <h3 className="rts-section-title">Event Speakers</h3>
              </div>
          </div>
          {/* Event speaker list */}
          <div className="row g-5">
              {/* Map through speakers array and render each speaker */}
              {speakers.map((speaker, index) => (
                  <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                      <div className="event-speaker">
                          <div className="event-speaker__details">
                              <div className="speaker-thumb">
                                  <img src={speaker.image} alt="speaker-thumb" />
                                  <div className="speaker-social-link">
                                      {/* Add social links if needed */}
                                      {/* Example: 
                                          <a href="#"><i className="fa-brands fa-skype"></i></a>
                                          <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                                          <a href="#"><i className="fa-brands fa-facebook"></i></a>
                                      */}
                                  </div>
                              </div>
                              <div className="speaker-meta">
                                  <h5 className="speaker__name"><a href="faculty-details.html">{speaker.name}</a></h5>
                                  <span className="designation">{speaker.designation}</span>
                              </div>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  </div>
  <div className="rts-event rts-section-padding">
            <div className="container">
                <div className="row">
                    <div className="rts-section mb--40">
                        <h3 className="rts-section-title">Related Event</h3>
                    </div>
                </div>
                <div className="row justify-content-center justify-content-md-start g-5">
                    {/* Map through events array and render each related event */}
                    {events.map((event, index) => (
                        <div className="col-lg-4 col-md-6 col-sm-10" key={index}>
                            <div className="single-event">
                                <div className="event single-event__content">
                                    <div className="event__thumb">
                                        <img src={event.image} alt="event thumbnail" />
                                    </div>
                                    <div className="event__meta">
                                        <div className="event__meta--da">
                                            <div className="event-date">
                                                <span><i className="fal fa-calendar"></i></span>
                                                <span>{event.date}</span>
                                            </div>
                                            <div className="event-time">
                                                <span><i className="fa-sharp fa-thin fa-clock"></i></span>
                                                <span>{event.time}</span>
                                            </div>
                                        </div>
                                        <h5 className="event__title"> <a href="#">{event.title}</a></h5>
                                    </div>
                                    <div className="event-place">
                                        <span><i className="fa-sharp fa-thin fa-location-dot"></i></span>
                                        <span>{event.place}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

</>
    );
};

export default EventDetails;
