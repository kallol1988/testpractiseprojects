import React from "react";
import logo from "../assets/images/final_logo.png";
import { Link } from "react-router-dom";


// import Sidebarfile from './sidebarfile/Sidebarfile';


const Header = (props) => {
  

  return (
 
    <header className="header">
        <div className="leftSec">
          <img src={logo} className="logoImg" />
        </div>
        <div className="rightSec">
          <ul className="navbarUl">
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/">Logout</Link></li>
          </ul>
          <p>Hi, <b>Kallol</b></p>
        </div>
    </header>

 
  );
}

export default Header;