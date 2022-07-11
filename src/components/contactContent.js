import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
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
      <Link  className="blueBtn"  to="/dashboard">Dashboard</Link>
      {/* {console.log("users",users)} */}
      {users.length > 0 && (
                 <table>
                   <tr>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Location</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Country</th>
                    <th>Postal Code</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Cell</th>
                  </tr>
                
          {users.map((user, index) => {
            return(
              
             <tr key={user.gender}>
                <td>{user.name.title} {user.name.first} {user.name.last}</td>
                <td>{user.gender}</td>
                <td>{user.location.street.number} {user.location.street.name}</td>
                <td>{user.location.city}</td>
                <td>{user.location.state}</td>
                <td>{user.location.country}</td>
                <td>{user.location.postcode}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.cell}</td>
                </tr>
             
              
            )
          }


          
          )}
       
</table>



      )}
    </div>
    
  );
}

export default ContactContent;
