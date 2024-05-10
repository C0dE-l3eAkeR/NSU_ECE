import React from 'react';

const events = [
    {
        id: 1,
        image: "assests/images/campus/event/01.jpg",
        date: "November 28, 2023",
        time: "10:30 am",
        title: "Edu Fest 2023: Igniting Minds Off on Transforming Lives",
        location: "Yarra Park, UK"
    },
    {
        id: 2,
        image: "assests/images/campus/event/02.jpg",
        date: "November 28, 2023",
        time: "10:30 am",
        title: "Edu Fest 2023: Igniting Minds Off on Transforming Lives",
        location: "Yarra Park, UK"
    },
    {
        id: 1,
        image: "assests/images/campus/event/01.jpg",
        date: "November 28, 2023",
        time: "10:30 am",
        title: "Edu Fest 2023: Igniting Minds Off on Transforming Lives",
        location: "Yarra Park, UK"
    },
    {
        id: 2,
        image: "assests/images/campus/event/02.jpg",
        date: "November 28, 2023",
        time: "10:30 am",
        title: "Edu Fest 2023: Igniting Minds Off on Transforming Lives",
        location: "Yarra Park, UK"
    },
    {
        id: 1,
        image: "assests/images/campus/event/01.jpg",
        date: "November 28, 2023",
        time: "10:30 am",
        title: "Edu Fest 2023: Igniting Minds Off on Transforming Lives",
        location: "Yarra Park, UK"
    },
    {
        id: 2,
        image: "assests/images/campus/event/02.jpg",
        date: "November 28, 2023",
        time: "10:30 am",
        title: "Edu Fest 2023: Igniting Minds Off on Transforming Lives",
        location: "Yarra Park, UK"
    }
    // Add more events as needed
];

const EventList = () => {
    return (
        <>
        <div className="rts-event rts-section-padding">
            <div className="container">
                <div className="row justify-content-sm-center justify-content-md-start g-5">
                    {events.map(event => (
                        <div key={event.id} className="col-lg-4 col-md-6 col-sm-10">
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
                                        <span>{event.location}</span>
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

export default EventList;
