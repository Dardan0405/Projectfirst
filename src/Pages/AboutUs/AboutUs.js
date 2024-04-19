import React from "react";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import MobileBar from "../../Components/Shared/MobileNav/MobileNav";
import AboutPage from "../../Components/Pages/AboutUs/AboutUsPage";

function AboutUs() {
return(
    <div className="AboutUs-Page">
    <Navbar/>
    <MobileBar/>
    <AboutPage/>
    </div>
)
}
export default AboutUs