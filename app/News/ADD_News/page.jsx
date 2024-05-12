import Add_News from "../../../pages/add_news";
import TransperentHeader5 from "../../../partials/header/transparent_header_v5";
import Breadcrumb from "../../../partials/elements/breadcrumb";
export default function News () {

    return(
        <> <TransperentHeader5/>  
        <Breadcrumb 
        image="assests/images/banner/breadcrumb.jpg"
        page="News"
        title="Add News"
        className="breadcrumb-height breadcumb-bg" // Pass @@class here
    />
        <Add_News/>
        </>
    );
}