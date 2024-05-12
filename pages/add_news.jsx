"use client"
import { useState } from "react";
const Add_News = () => {


    const [inputValue, setInputValue] = useState('');
  const [headings, setHeadings] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [showimg, setShowImg] = useState(false);
  const [id, setId] = useState(null)

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleInputKeyPress = (e) => {
   
    if (e.key === 'Enter') {
     
      addHeading();
      
      e.preventDefault();
    }
  };

  const addHeading = () => {
    if (inputValue.trim() !== '' && id=="h3") {
       let inputValue2 = "<h3>"+ inputValue + "</h3>"
      setHeadings([...headings, inputValue2]);
      setInputValue('');
      setShowInput(!showInput);
    }
    else if (inputValue.trim() !== '' && id=="h5") {
        let inputValue2 = "<h5>"+ inputValue + "</h5>"
       setHeadings([...headings, inputValue2]);
       setInputValue('');
       setShowInput(!showInput);
     }
     else if (inputValue.trim() !== '' && id=="p") {
        let inputValue2 = "<p>"+ inputValue + "</p>"
       setHeadings([...headings, inputValue2]);
       setInputValue('');
       setShowInput(!showInput);
     }
     else if (selectedImage && id=="img") {
        let inputValue2 = `<div class="row mb-5">
        <div class="col-md-6">
            <div class="post-image">
                <img src="assests/images/blog/blog-recent-1.jpg" alt="">
            </div>
        </div>
        <div class="col-md-6">
            <div class="post-image">
                <img src="assests/images/blog/blog-recent-1.jpg" alt="">
            </div>
        </div>
    </div>"`
       setHeadings([...headings, inputValue2]);
       setSelectedImage(null);
       setShowImg(!showimg);

     }
     else if (inputValue.trim() !== '' && id=="h5") {
        let inputValue2 = "<h5>"+ inputValue + "</h5>"
       setHeadings([...headings, inputValue2]);
       setInputValue('');
       setShowInput(!showInput);
     }
  };

  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      setSelectedImage(file);
    };

  const toggleInput = (e) => {
    setId(e.target.id); 

    if(e.target.id=="h3" ||e.target.id=="h5" ||e.target.id== "p")
    setShowInput(!showInput);
    else if(e.target.id=="img")
    setShowImg(!showimg);
    
    
    console.log(id);
  };

  
    const [selectedImage, setSelectedImage] = useState(null);
  
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
    <div>
         <div dangerouslySetInnerHTML={{ __html: headings }} />
      
      {showInput && (
        <div className="blog-comment mb-5 mb-lg-0">
        <div className="blog-comment__template">
        <form action="#" className="comment-template">
        <div className="input-area-full">
        <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyPress}
            placeholder="Press Enter to add heading"
          /> 
          </div> 

        </form>
                                                
        </div>
        </div>
      )}

      {showimg && (
       <div>
       <input type="file" onChange={handleImageChange} />
       {selectedImage && (
         <div>
           <h2>Selected Image:</h2>
           <img className="mb-3" src={URL.createObjectURL(selectedImage)} alt="Selected" width="200" />
           <button className="mb-3" onClick={addHeading}>Add image</button>
         </div>
        
       )}
     </div>

      )}

      <div className="row mb-3 justify-content-center">
       <div className="col-md-4"> 
      <button id="h3" onClick={toggleInput}>Add Heading</button>
      </div>
      <div  className="col-md-4"> 
      <button  id="h5" onClick={toggleInput}>Add Sub Heading</button>
      </div>
      <div className="col-md-4"> 
      <button id="p" onClick={toggleInput}>Add Paragraph</button>
      </div>

      </div>

      <div className="row mb-3 justify-content-center">
       <div className="col-md-4"> 
      <button id="img" onClick={toggleInput}>Add Image</button>
      </div>
      <div className="col-md-4"> 
      <button  id="ip" onClick={toggleInput}>Add Image-Points</button>
      </div>
      <div className="col-md-4"> 
      <button id="bp" onClick={toggleInput}>Add Bullet Points</button>
      </div>

      </div>
    </div>
    {/*
    <div className="blog-comment mb-5 mb-lg-0">
    <div className="blog-comment__template">
                            <h4>Share your opinion here !</h4>
                            <form action="#" className="comment-template">
                            <div className="input-area">
                                    <input type="text" placeholder="Enter your name" required=""/>
                                    <input type="text" placeholder="Enter your email" required=""/>
                                </div>
                                <div className="input-area-full">
                                    <input type="text" placeholder="Enter your Subject" required=""/>
                                </div>
                                <textarea name="msg" className="input-area-full w-full" placeholder="Enter Your Message"></textarea>
                                <button className="rts-theme-btn with-arrow" type="submit">Submit Review 
                                    <span><i className="fa-sharp fa-regular fa-arrow-right"></i></span></button>
                            </form>
                            
                </div>
                      
    </div>
                       */}     






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
                                    <a href={`mailto:${info.contactEmail}`}>{info.contactEmail}</a>
                                    <a href={`callto:${info.contactPhone}`}>{info.contactPhone}</a>
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

export default Add_News;
