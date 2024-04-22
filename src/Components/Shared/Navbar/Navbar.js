import "./Navbar.scss"
import MobileBar from "../MobileNav/MobileNav";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom"
import Google from "../../../assets/Navbar/Google.jpg"

function Navbar(){
return(
    <div className="Navbar">
        <div className="Logo">
            <Link to={"/"}>
             <img src={Google}/>
             </Link>
    

        </div>
        <div className="Navbar-Links">
            <Link to={"/AboutUs"}> About Us</Link>
          <Link to={"/ContactUs"}>Contact US</Link>
            <Link to={"/Blog"}>Blog</Link>

        </div>
        <div className="Login-SignUp">
        <Link to={"/"}>Login</Link>
        <Link to={"/SignUp"}>SignUp</Link>
        </div>
      
    </div>
  
)
}
export default Navbar