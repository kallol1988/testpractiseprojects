import React from "react";
import logo from "../assets/images/final_logo.png";


// import Sidebarfile from './sidebarfile/Sidebarfile';


const Header = (props) => {
  

  return (
 
    <header className="header">
        <div className="leftSec">
          <img src={logo} className="logoImg" />
        </div>
        <div className="rightSec">
          <p>Hi, <b>Kallol</b></p>
        </div>
    </header>

 
  );
}

export default Header;