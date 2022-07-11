import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
const DashboardContent = () => {
  const [infos, setInfos] = useState([])
  
  const fetchData = async () => {
    const response = await fetch("https://api.publicapis.org/entries");
    const datas = await response.json();
    console.log('The Basic entries',datas.entries);
    setInfos(datas.entries)
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div className="dashboardContentWraper">
      <p>This is the Dashboard text section</p>
      <Link className="blueBtn"  to="/contact">Go to Contact page</Link>



      {infos.length > 0 && (
                 <table>
                   <tr>
                    <th>API</th>
                    <th>Description</th>
                    <th>Auth</th>
                    <th>HTTPS</th>
                    <th>Cors</th>
                    <th>Link</th>
                    <th>Category</th>
                  </tr>
                
          {infos.map((information, index) => {
            return(
              
             <tr key={information.API}>
               <td>{information.API}</td>
                <td>{information.Description}</td>
                <td>{information.Auth}</td>
                <td className={information.HTTPS ? 'true' : 'false' }>{information.HTTPS ? 'True' : 'False' }</td>
                <td>{information.Cors}</td>
                <td>{information.Link}</td>
                <td>{information.Category}</td>
                </tr>
             
              
            )
          }
          )}
       
</table>
      )}





      
      
    </div>
    
  );
}

export default DashboardContent;
