import React, { useEffect, useState } from "react"

const ContactContent = () => {
  const [users, setUsers] = useState([])
  
  const fetchData = async () => {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    console.log(data.results);
    setUsers(data.results)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="dashboardContentWraper">
      <p>This is the Contact text section</p>
      {/* <Link  className="blueBtn"  to="/dashboard">Dashboard</Link> */}
      {/* {console.log("users",users)} */}
      {users.length > 0 && (
              
                <div className="contactContent">
          {users.map((user, index) => {
            return(
             
            //  <tr key={user.gender}>
            //     <td>{user.name.title} {user.name.first} {user.name.last}</td>
            //     <td>{user.gender}</td>
            //     <td>{user.location.street.number} {user.location.street.name}</td>
            //     <td>{user.location.city}</td>
            //     <td>{user.location.state}</td>
            //     <td>{user.location.country}</td>
            //     <td>{user.location.postcode}</td>
            //     <td>{user.email}</td>
            //     <td>{user.phone}</td>
            //     <td>{user.cell}</td>
            //     </tr>

            <div className="contentWraper">

              <div className="leftSecContact">
                <h2>Personal Info</h2>
                <h4>Name</h4>
                <p>{user.name.title} {user.name.first} {user.name.last}</p>

                <h4>Gender</h4>
                <p>{user.gender}</p>

                <h4>Email</h4>
                <p>{user.email}</p>

                <h4>Phone</h4>
                <p>{user.phone}</p>

                <h4>Cell</h4>
                <p>{user.cell}</p>

                <h4>Age</h4>
                <p>{user.dob.age}</p>

                

              </div>

              <div className="rightSecContact">
                <h2>Other Info</h2>
                <h4> Address</h4>
                <p>{user.location.street.number} {user.location.street.name}</p>

                <h4>City</h4>
                <p>{user.location.city}</p>

                <h4>State</h4>
                <p>{user.location.state}</p>

                <h4>Post Code</h4>
                <p>{user.location.postcode}</p>

                <h4>Country</h4>
                <p>{user.location.country}</p>

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
