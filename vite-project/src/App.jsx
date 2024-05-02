import { useEffect, useState } from 'react'
import VerticalNav from './components/VerticalNav'
import Titlebar from './components/Titlebar'
import './App.css'
import Job from './components/Job'

export default function App() {

  const [data, setData] = useState([{}])
 

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  const body = JSON.stringify({
   "limit": 10,
   "offset": 0
  });
  
  const requestOptions = {
   method: "POST",
   headers: myHeaders,
   body
  }
  

  useEffect(()=>{

    fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
    .then((response) => (response.json()))
    .then((result) => (setData(result["jdList"])))
    .catch((error) => console.error(error))
    
  },[])



  return (

    <div className='app-main'>
      <VerticalNav />
      <div className="main">
        <Titlebar></Titlebar>
        <div className='job-grid'>
          {
              data.length>0 &&  data.map(ele=>{return <Job  details={ele}/> })
          }
        </div>
      </div>
    </div>



  )
}
