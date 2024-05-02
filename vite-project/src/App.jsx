import { useState } from 'react'
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
  

  fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
   .then((response) => (response.text()))
   .then((result) => (setData(JSON.parse(result)["jdList"])))
   .catch((error) => console.error(error))


  console.log(data) 
  const mapping = ()=>{
    data && data.map(ele=>{
        return <Job details={ele}/>
    })
  }



  return (

    <div className='app-main'>
      <VerticalNav />
      <div className="main">
        <Titlebar></Titlebar>
        <div className='job-grid'>
          {
            mapping()
          }
        </div>
      </div>
    </div>



  )
}
