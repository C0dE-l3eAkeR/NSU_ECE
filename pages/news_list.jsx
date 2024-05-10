// BlogComponent.js

const NewsComponent = () => {
    // Variables to store blog information
    const blogItems = [
        {
            imageUrl: "assests/images/blog/blog-big-1.jpg",
            date: "Dec 28, 2023",
            author: "Maria coli",
            category: "Study Aboard",
            title: "Unlocking Potential: Harnessing the Transformative Power of Education for Lifelong Learning.",
            excerpt: "Harnessing the Transformative Power of Education for Lifelong Learning" +
                " explores the profound impact of education as a catalyst for personal and societal transformation." +
                " This insightful work delves into the dynamic relationship between education and lifelong learning," +
                " emphasizing the boundless possibilities it creates.",
            link: "blog-details.html"
        },
        {
            imageUrl: "assests/images/blog/blog-big-2.jpg",
            date: "Dec 28, 2023",
            author: "Maria coli",
            category: "Study Aboard",
            title: "Empowering Minds: Unleashing the Revolutionary Force of Education for Lifelong Growth.",
            excerpt: "Empowering Minds: Unleashing the Revolutionary Force of Education for Lifelong Growth" +
                " stands as a beacon of enlightenment, beckoning individuals to embark on a transformative journey" +
                " through the boundless realm of knowledge.",
            link: "blog-details.html"
        },
        {
            imageUrl: "assests/images/blog/blog-big-3.jpg",
            date: "Dec 28, 2023",
            author: "Maria coli",
            category: "Study Aboard",
            title: "Unlocking Potential: Harnessing the Transformative Power of Education for Lifelong Learning.",
            excerpt: "Harnessing the Transformative Power of Education for Lifelong Learning" +
                " explores the profound impact of education as a catalyst for personal and societal transformation." +
                " This insightful work delves into the dynamic relationship between education and lifelong learning," +
                " emphasizing the boundless possibilities it creates.",
            link: "blog-details.html"
        }
    ];

    return (
        <div className="rts-blog v_5 rts-section-padding">
            <div className="container">
                <div className="row sticky-coloum-wrap g-5">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-12">
                                {blogItems.map((blog, index) => (
                                    <div key={index} className="single-blog">
                                        <div className="blog single-blog__content">
                                            <div className="blog__thumb">
                                                <a href={blog.link}>
                                                    <img src={blog.imageUrl} alt="blog thumbnail" />
                                                </a>
                                            </div>
                                            <div className="blog__meta">
                                                <div className="blog__meta--da">
                                                    <div className="blog-date">
                                                        <span><i className="fal fa-calendar"></i></span>
                                                        <span>{blog.date}</span>
                                                    </div>
                                                    <div className="blog-author">
                                                        <span><i className="far fa-user"></i></span>
                                                        <span><a href="#">{blog.author}</a></span>
                                                    </div>
                                                    <div className="blog-cat">
                                                        <span><i className="fa-light fa-tags"></i></span>
                                                        <span><a href="#">{blog.category}</a></span>
                                                    </div>
                                                </div>
                                                <h5 className="blog__title"><a href={blog.link}>{blog.title}</a></h5>
                                                <p className="excerpt">{blog.excerpt}</p>
                                                <a href={blog.link} className="rts-theme-btn primary">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
             <div className="col-lg-4 sticky-coloum-item">
                <div className="theiaStickySidebar">
            <div className="rt__sidebar">
                <div className="program-sidebar">
                    {/* Curriculum */}
                    <div className="program-curriculum">
                        <h6 className="heading-title">Category</h6>
                        <div className="program-menu">
                            <ul className="list-unstyled">
                                <li><a href="#"><span><i className="fa-light fa-arrow-right"></i></span>Course Curriculum</a></li>
                                <li><a href="#"><span><i className="fa-light fa-arrow-right"></i></span>Program Faculty</a></li>
                                <li><a href="#"><span><i className="fa-light fa-arrow-right"></i></span>Study Aboard</a></li>
                                <li><a href="#"><span><i className="fa-light fa-arrow-right"></i></span>Scholarship </a></li>
                                <li><a href="#"><span><i className="fa-light fa-arrow-right"></i></span>Education Expo</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* Contact info */}
                    <div className="program-info">
                        <h5>Department Contact Info</h5>
                        <p>B.A. in Africana Studies</p>
                        <div className="contact-info">
                            <h5>Contact:</h5>
                            <a href="mailto:barry.Unipix@info.com">barry.Unipix@info.com</a>
                            <a href="callto:121">664-254-251</a>
                        </div>
                        <div className="social-info">
                            <h5>Social Info:</h5>
                            <div className="social-info-link">
                                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                                <a href="#"><i className="fa-brands fa-pinterest"></i></a>
                                <a href="#"><i className="fa-brands fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                    {/* Join event */}
                    <div className="program-event">
                        <div className="program-event-content">
                            <p>Joint New Event About African History</p>
                            <h4 className="event-title">B.A. in Africana Studies</h4>
                            <div className="single-event-content-meta">
                                <div className="event-time">
                                    <span><i className="fa-sharp fa-thin fa-clock"></i></span>
                                    <span>10:30 am</span>
                                </div>
                                <div className="event-place">
                                    <span><i className="fa-sharp fa-thin fa-location-dot"></i></span>
                                    <span>Yarra Park, UK</span>
                                </div>
                                <div className="event-date">
                                    <span><i className="fal fa-calendar"></i></span>
                                    <span>November 28, 2023</span>
                                </div>
                            </div>
                            <a href="#" className="rts-theme-btn with-arrow btn-white lh-100">Joint Now <span><i className="fa-thin fa-arrow-right"></i></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
                </div>
                <div className="rts-load-more-btn rt-center mt--60">
                <a href="#" class="rts-theme-btn primary primary lh-100">Load More</a>
            </div>
            </div>
        </div>
    );
};

export default NewsComponent;
