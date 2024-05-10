
import TransperentHeader5 from "../../../partials/header/transparent_header_v5";
import Breadcrumb from "../../../partials/elements/breadcrumb";
const FacultyMember = ({ image, name, designation, email, phone, speciality }) => {
  return (
   
    
    
    <div className="col-lg-6 col-md-11">
      <div className="single-staff">
        <div className="single-staff__content">
          <div className="staf-image">
            <img src={image} alt="staff-image" />
          </div>
          <div className="staf-info">
            <h5 className="name">{name}</h5>
            <span className="designation">{designation}</span>
            <div className="staf-info__social">
              {/* Add social media links if needed */}
            </div>
            <a href={`mailto:${email}`} className="email-contact">
              <span><i className="fa-light fa-envelope"></i></span>{email}
            </a>
            <a href={`callto:${phone}`} className="phone-contact">
              <span><i className="fa-light fa-phone"></i></span>{phone}
            </a>
            <div className="staf-info__speciality">
              <p>{speciality}</p>
            </div>
            <a href="faculty-details.html" className="rts-theme-btn border-btn">More Details</a>
          </div>
        </div>
      </div>
    </div>
   
  );
};


const FacultyStaff = () => {
  // Array of faculty member information
  const facultyMembers = [
    {
      image: "/assests/images/faculty/01.jpg",
      name: "Jennifer Aarons, PhD",
      designation: "Assistant Professor",
      email: "jenni@Unipixuni.edu",
      phone: "+1 2245 1247 241",
      speciality: "Hospitality, Tourism, Event Management and Esports"
    },
    {
      image: "/assests/images/faculty/02.jpg",
      name: "Barry Palatnik, Ed.D",
      designation: "Associate Professor of History",
      email: "barry@Unipixuni.edu",
      phone: "+1 2245 1247 242",
      speciality: "History, Social Sciences"
    },
    {
      image: "/assests/images/faculty/03.jpg",
      name: "Marc Robinson, MBA",
      designation: "Teaching Specialist of Accounting",
      email: "marc@Unipixuni.edu",
      phone: "+1 2245 1247 243",
      speciality: "Accounting, Finance"
    },
    {
      image: "/assests/images/faculty/04.jpg",
      name: "Chengzhang Wu, Ph.D",
      designation: "Professor of Literature",
      email: "cheng@Unipixuni.edu",
      phone: "+1 2245 1247 244",
      speciality: "Literature, Language Arts"
    },
    {
      image: "/assests/images/faculty/05.jpg",
      name: "Nancy Stempin, DBA",
      designation: "Assistant Professor of Accounting",
      email: "nancy@Unipixuni.edu",
      phone: "+1 2245 1247 245",
      speciality: "Accounting, Finance"
    },
    {
      image: "/assests/images/faculty/06.jpg",
      name: "Michael McGarvey",
      designation: "Professor of Art",
      email: "michael@Unipixuni.edu",
      phone: "+1 2245 1247 246",
      speciality: "Fine Arts, Visual Arts"
    },
    // Add more faculty members as needed
  ];
  
  return (
    <>
    <TransperentHeader5/>  
    <Breadcrumb 
    image="assests/images/banner/breadcrumb.jpg"
    page="Faculty"
    title="Faculty Directory"
    className="breadcrumb-height breadcumb-bg" // Pass @@class here
/>
    <section className="rts-faculty rts-section-padding">
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-lg-12 col-md-11">
                    <div className="rts-section mb--50">
                        <h3 className="rts-section-title">Faculty & Staff Directory</h3>
                    </div>
                </div>
            </div>
    <div className="row justify-content-md-center g-5"></div>
      {/* Map over the facultyMembers array to render multiple FacultyMember components */}
      {facultyMembers.map((facultyMember, index) => (
        <FacultyMember
          key={index}
          image={facultyMember.image}
          name={facultyMember.name}
          designation={facultyMember.designation}
          email={facultyMember.email}
          phone={facultyMember.phone}
          speciality={facultyMember.speciality}
        />
      ))}
    </div>
     <div class="rts-load-more-btn rt-center mt--60">
         <a href="faculty-details.html" class="rts-theme-btn primary lh-100">Load More</a>
     </div>
    </section>
    </>
  );
};



export default FacultyStaff;
