import React from "react";
import { Link } from "react-router-dom";
// import Sidebarfile from './sidebarfile/Sidebarfile';

const LoginPage = () => {
 
  return (
  <div className="loginContainer">
    <div className="loginFormArea">
        <h1>Login</h1>  

                        
        
        <div className="loginForm">
            <div className="formRow fieldRow">
                <label>Email Address</label>
                <input type="text" className="formControl inputField" value="" name="email" id="loginEmail" placeholder="Enter email id" />
            </div>
            <div className="formRow fieldRow">
                <label>Password</label>
                <input type="password" className="formControl inputField" name="password" id="loginPassword" placeholder="Enter password" />
            </div>
            
            <div className="formRow">
                
                <Link className="blueBtn" to="/dashboard">Login</Link>
            </div>
        </div>
        
    </div>

    <div class="loginGraphicArea">
     
    </div>

  </div>
  

  );
}

export default LoginPage;
