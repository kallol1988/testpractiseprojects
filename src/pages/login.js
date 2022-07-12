import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
// import Sidebarfile from './sidebarfile/Sidebarfile';

const LoginPage = () => {

  const [emailId, setEmailId] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [loginActive, setLoginActive] = useState(false);
  const [emailErrors, setEmailErrors] = useState(false);
  const [passwordErrors, setPasswordErrors] = useState(false);

  const handleChangeEmail = event => {
    setEmailId(event.target.value);
    console.log('Email value is:', event.target.value);
    console.log('Email length:', emailId.length);
    console.log('Email State:', emailErrors);
    if(emailId.length > 5) {
      if (emailId.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)) {
        // alert("Valid mail Format");
        setEmailErrors(null)
      } else {
        setEmailErrors("Invalid Email Id");
        console.log('Email State:', emailErrors);
      }
    } else {
      setEmailErrors("Invalid Email Id length");
    }
  };

  const handleChangePassword = event => {
    setCheckPassword(event.target.value);
    console.log('Password value is:', event.target.value);
    console.log('Password length:', checkPassword.length);
    console.log('Password State:', passwordErrors);
    if(checkPassword.length > 5) {
      setPasswordErrors(null);  
      console.log('Password State:', passwordErrors);   
    } else {
      setPasswordErrors("Invalid Password");    
    }
  };

// if(emailErrors === null && passwordErrors === null){
//   setLoginActive(true)
// }

 
  return (
  <div className="loginContainer">
    <div className="loginFormArea">
        <h1>Login</h1>  

                        
        <form name="loginform" className="loginform">
        <div className="loginForm">
            <div className="formRow fieldRow">
                <label>Email Address</label>
                <input type="email" className="formControl inputField" name="email" size="30" placeholder="Enter email id" onChange={handleChangeEmail} />
                {emailErrors && <span style={{ color: "red" }}>{emailErrors}</span> }
            </div>
            <div className="formRow fieldRow">
                <label>Password</label>
                <input type="password" className="formControl inputField" name="password"  placeholder="Enter password" onChange={handleChangePassword} />
                {passwordErrors && <span style={{ color: "red" }}>{passwordErrors}</span> }
            </div>
            
            <div className="formRow">
                
                <Link className={loginActive ? "blueBtn" : "blueBtn inactive"} to="/dashboard">Login</Link> 
                {/* <button className="blueBtn" id="submit" value="Submit" disabled>Login</button> */}
            </div>
        </div>

        </form>
        
    </div>

    <div className="loginGraphicArea">
     
    </div>

  </div>
  

  );
}

export default LoginPage;
