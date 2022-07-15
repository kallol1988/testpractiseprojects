import React, { useEffect, useState } from "react"

const ContactContent = () => {
  const [users, setUsers] = useState([])
  
  const fetchData = async () => {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    console.log(data.results);
    setUsers(data.results)
  }

  // useEffect(() => {
  //   const lodedData =  window.localStorage.getItem('Contact_Values');
  //   if (lodedData !== null) setUsers(JSON.parse(users))
  // } , []);

useEffect(() => {
  window.localStorage.setItem('Contact_Values', JSON.stringify(users))
} , [users]);


  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="dashboardContentWraper">
      
      {/* <Link  className="blueBtn"  to="/dashboard">Dashboard</Link> */}
      {/* {console.log("users",users)} */}
      {users.length > 0 && (
              
                <div className="contactContent">
          {users.map((user, index) => {
            return(
           
            <div className="contentWraper">
              <div className="leftSecContact">
                <h2 >Personal Info</h2>
                <img className="profileImg" src={user.picture.large} alt="" />
                <h4 className="nameInfos">{user.name.title} {user.name.first} {user.name.last}</h4>   
                <h4>Email</h4>
                <p>{user.email}</p>
                <h4>Phone</h4>
                <p>{user.phone}</p>
                <h4>Cell</h4>
                <p>{user.cell}</p> 
              </div>

              <div className="rightSecContact">
                <h2>Other Info</h2>
                <h4>Gender</h4>
                <p>{user.gender}</p>
                <h4>Age</h4>
                <p>{user.dob.age}</p>
                <h4> Address</h4>
                <p>{user.location.street.number} {user.location.street.name} , {user.location.city} , {user.location.state}
                <br />
                {user.location.postcode}
                <br />
                {user.location.country}</p>

              </div>
            </div>
              
            )
          }


          
          )}
       </div>




      )}
    </div>
    
  );
}

export default ContactContent;
