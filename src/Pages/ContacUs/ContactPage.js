import React from "react";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import MobileBar from "../../Components/Shared/MobileNav/MobileNav";
import ContactUs from "../../Components/Pages/CntactUs/ContactUs";
import "./ContacUs.scss"


function ContactPage(){
return(
    <div className="ContactPage">
        <Navbar/>
        <MobileBar/>
        <ContactUs/>
    </div>
)
}
export default ContactPage