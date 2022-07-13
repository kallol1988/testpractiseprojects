import React, { useEffect, useState } from "react"

const DashboardContent = () => {
  const [infos, setInfos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  // const fetchData = async () => {
  //   const response = await fetch("https://api.publicapis.org/entries");
  //   const datas = await response.json();
  //   console.log('The Basic entries',datas.entries);
  //   setInfos(datas.entries)
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])



  const fetchData = () => {
    setIsLoading(true)
    fetch('https://api.publicapis.org/entries')
      .then(response => {
        return response.json()
      })
      .then(data => {
        setIsLoading(false)
        setInfos(data.entries)
      })
  }

 useEffect(() => {
    fetchData()
  }, [])


  return (
    <div className="dashboardContentWraper">
      <p>Welcome to the Dashboard, <b>Kallol</b></p>
      {/* <Link className="blueBtn"  to="/contact">Go to Contact page</Link> */}
      <div className="wraperClass">
        <div className="rightSecDash">
          <input className="searchBars" onChange={event => {setSearchTerm(event.target.value)}} label="Search User" placeholder="Search API...." />
        </div>
      </div>
  {isLoading && <p className="loader">Page is Loading...</p>}

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
                
          {infos.filter((information) => {
            if(searchTerm == "") {
              return information
            } else if (information.API.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
              return information
            }
          }).map((information, index) => {
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
