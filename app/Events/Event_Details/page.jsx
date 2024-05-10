"use client"
import TransperentHeader5 from "../../../partials/header/transparent_header_v5";
import Breadcrumb from "../../../partials/elements/breadcrumb";
import EventDetails from "../../../pages/event_details";
export default function Event_Details (updateVariable={updateVariable}) {

    return(
        <> <TransperentHeader5 updateVariable={updateVariable}/>  
        <Breadcrumb 
        image="assests/images/banner/breadcrumb.jpg"
        page="Events"
        title="Upcomming Events"
        className="breadcrumb-height breadcumb-bg" // Pass @@class here
        
    />
    <EventDetails/>
    </>);
    }