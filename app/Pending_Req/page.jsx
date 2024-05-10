import Pending_req from "../../pages/pending_req";
import TransperentHeader5 from "../../partials/header/transparent_header_v5";
import Breadcrumb from "../../partials/elements/breadcrumb";
export default function News () {

    return(
        <> <TransperentHeader5/>  
        <Breadcrumb 
        image="assests/images/banner/breadcrumb.jpg"
        page="Pending Requests"
        title="Request List"
        className="breadcrumb-height breadcumb-bg" // Pass @@class here
    />
        <Pending_req/>
        </>
    );
}