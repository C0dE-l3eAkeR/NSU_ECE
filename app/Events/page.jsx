import EventList from "../../pages/event_list"
import TransperentHeader5 from "../../partials/header/transparent_header_v5";
import Breadcrumb from "../../partials/elements/breadcrumb";
export default function Events (updateVariable={updateVariable}) {

    return(
        <> <TransperentHeader5 updateVariable={updateVariable}/>  
        <Breadcrumb 
        image="assests/images/banner/breadcrumb.jpg"
        page="Events"
        title="Upcomming Events"
        className="breadcrumb-height breadcumb-bg" // Pass @@class here
    />
        <EventList/>
        </>
    );
}