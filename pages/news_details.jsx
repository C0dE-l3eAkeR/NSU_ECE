// BlogDetailsComponent.js

const NewsDetailsComponent = () => {
    // Variables to store information
    const info = {
     imgsrc : "assests/images/blog/blog-details.jpg",
     author : "Amir Nisi",
     date : "20 Jan 2024, 10:30 pm",
     link : "#" ,
     link_text: "Study Abraod",
     Title : "10 Effective Study Tips for College Success",
     department : "B.A. in Africana Studies",
     contactEmail : "barry.Unipix@info.com",
     contactPhone :"664-254-251",
    }
    const socialLinks = [
        { icon: "fa-facebook", link: "#" },
        { icon: "fa-instagram", link: "#" },
        { icon: "fa-linkedin", link: "#" },
        { icon: "fa-pinterest", link: "#" },
        { icon: "fa-youtube", link: "#" }
    ];
    const event = {
        title: "B.A. in Africana Studies",
        time: "10:30 am",
        place: "Yarra Park, UK",
        date: "November 28, 2023",
        link: "#"
    };

    return (
        <div className="rts-blog-details rts-section-padding">
            <div className="container">
                <div className="row sticky-coloum-wrap justify-content-center g-5">
                    <div className="col-lg-8 col-md-10">
                        <article className="blog-details">
                            <div className="blog-details__featured-image">
                                <img src={info.imgsrc} alt="blog post" />
                            </div>
                            <div className="blog-details__article-meta mt--40">
                                <a href="#"><span><i className="fa-light fa-user"></i></span>{info.author}</a>
                                <span><span><i className="fa-light fa-clock"></i></span>{info.date}</span>
                                <a href="#"><span><i className="fa-sharp fa-light fa-tags"></i></span>{info.link_text}</a>
                            </div>
                            <h3 className="blog-title">{info.Title}</h3>
                            {/* Content goes here */}
                        </article>
                        {/* Other content goes here */}
                    </div>
                    <div className="col-lg-4 col-md-10 sticky-coloum-item">
                        <div className="program-sidebar">
                            <div className="program-curriculum">
                                <h6 className="heading-title">Category</h6>
                                <div className="program-menu">
                                    <ul className="list-unstyled">
                                        <li><a href="#"><span><i className="fa-light fa-arrow-right"></i></span>Course Curriculum</a></li>
                                        <li><a href="#"><span><i className="fa-light fa-arrow-right"></i></span>Program Faculty</a></li>
                                        <li><a href="#"><span><i className="fa-light fa-arrow-right"></i></span>Study Aboard</a></li>
                                        <li><a href="#"><span><i className="fa-light fa-arrow-right"></i></span>Scholarship</a></li>
                                        <li><a href="#"><span><i className="fa-light fa-arrow-right"></i></span>Education Expo</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="program-info">
                                <h5>Department Contact Info</h5>
                                <p>{info.department}</p>
                                <div className="contact-info">
                                    <h5>Contact:</h5>
                                    <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
                                    <a href={`callto:${contactPhone}`}>{contactPhone}</a>
                                </div>
                                <div className="social-info">
                                    <h5>Social Info:</h5>
                                    <div className="social-info-link">
                                        {socialLinks.map((link, index) => (
                                            <a key={index} href={link.link}><i className={`fa-brands ${link.icon}`}></i></a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="program-event">
                                <div className="program-event-content">
                                    <p>Joint New Event About African History</p>
                                    <h4 className="event-title">{event.title}</h4>
                                    <div className="single-event-content-meta">
                                        <div className="event-time">
                                            <span><i className="fa-sharp fa-thin fa-clock"></i></span>
                                            <span>{event.time}</span>
                                        </div>
                                        <div className="event-place">
                                            <span><i className="fa-sharp fa-thin fa-location-dot"></i></span>
                                            <span>{event.place}</span>
                                        </div>
                                        <div className="event-date">
                                            <span><i className="fal fa-calendar"></i></span>
                                            <span>{event.date}</span>
                                        </div>
                                    </div>
                                    <a href={event.link} className="rts-theme-btn with-arrow btn-white lh-100">Joint Now <span><i className="fa-thin fa-arrow-right"></i></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetailsComponent;
