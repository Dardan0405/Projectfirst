
import React from "react";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import MobileBar from "../../Components/Shared/MobileNav/MobileNav";
import "./BlogPage.scss"
import PopUp from "../../Components/Pages/Blog/PopUp";

function BlogPage () {
    return(
    <div className="Blog-Page">
     <Navbar/>
     <MobileBar/>
     <PopUp/>
    </div>
    )
}
export default BlogPage