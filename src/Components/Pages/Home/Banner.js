import React from "react";
import Image from "../../../assets/Home/imjg.jpg"
import "./Banner.scss"

function BannerHome(){
return(
    <div className="BannerHome">
        <div className="LeftPart">
       <p>That's a great choice! "Explore Your World: Discover, Learn, Connect" is a compelling banner text that invites visitors to engage with your website. It emphasizes the themes of exploration, discovery, learning, and connection, which are likely central to your website's mission. This banner text sets a welcoming tone and encourages users to dive into the content and resources you offer.</p>



        </div>
        <div className="RightPart">
        <img src={Image}/>
        </div>
    </div>
)
}
export default BannerHome