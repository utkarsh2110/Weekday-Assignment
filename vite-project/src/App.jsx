import { useEffect, useState } from 'react'
import VerticalNav from './components/VerticalNav'
import Titlebar from './components/Titlebar'
import './App.css'
import Job from './components/Job'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function App() {




  const [data, setData] = useState([{}])
  const [isLoading, setIsLoading] = useState(false);

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


  const fetchData = ()=>{
    setIsLoading(true)
    fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
    .then((response) => (response.json()))
    .then((result) => (setData(prev=> [...prev, ...result["jdList"]])))
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData();
  }, [])

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
      return;
    }
    fetchData();
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);



  return (

      <div className='app-main'>
      <div className="verticalNav"><VerticalNav /></div>

      <div className="main">
        <div className="tbar"><Titlebar /></div>
        <div className='filters'>
          <div className="experience">
            <span><input type="text" placeholder='Experience' /></span>
            <span><KeyboardArrowDownIcon /></span>
          </div>
        </div>
        <div className='job-grid'>
          {data.length > 0 && data.map(ele => { return <Job details={ele} /> })}
          {isLoading && <p>Loading...</p>}
        </div>
      </div>
    </div>



  )
}
