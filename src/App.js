import "./App.scss"
import Navbar from "./Components/Shared/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import BlogPage from "./Pages/Blog/BlogPage";
import ContactPage from "./Pages/ContacUs/ContactPage";

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/AboutUs" element={<AboutUs/>}/>
      <Route path="/Blog" element={<BlogPage/>}/>
      <Route path="/ContactUs" element={<ContactPage/>}/>
    </Routes>
   </Router>
  );
}

export default App;
