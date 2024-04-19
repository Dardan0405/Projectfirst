import React from "react";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import MobileBar from "../../Components/Shared/MobileNav/MobileNav";
import BannerHome from "../../Components/Pages/Home/Banner";
import "./HomePage.scss"

function HomePage(){
    return(
        <div className="Home-Page">
        <Navbar/>
        <MobileBar/>
        <BannerHome/>
        </div>

    )

}
export default HomePage