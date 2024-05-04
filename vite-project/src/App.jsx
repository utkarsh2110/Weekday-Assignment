import { useEffect, useState } from 'react'
import VerticalNav from './components/VerticalNav'
import Titlebar from './components/Titlebar'
import './App.css'
import Job from './components/Job'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function App() {
  const [data, setData] = useState([{}]) // data fetched from API to be stored here
  const [isLoading, setIsLoading] = useState(false); //

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



  const fetchData = () => {
    setIsLoading(true);
    fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
      .then((response) => (response.json()))
      .then((result) => (setData(prev => [...prev, ...result["jdList"]])))
    setIsLoading(false);
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






  const [openExp, setOpenExp] = useState("none");
  const [openSalary, setOpenMinSalary] = useState("none");
  const [exp, setExp] = useState(null);
  const [minSalary,setMinSalary]=useState(null);
  const [companyName, setCompanyName] = useState('');

  const [openlocation, setOpenLocation] = useState("none");
  const [location, setlocation] = useState("");

  const [openNoOfEmployees, setOpenNoOfEmployees] = useState("none");
  const [NoOfEmployees, setNoOfEmployees] = useState(null);


  return (

    <div className='app-main'>
      <div className="verticalNav"><VerticalNav /></div>

      <div className="main">
        <div className="tbar"><Titlebar /></div>


        {/* Filters */}
        <div className='filters'>



          
          <div className="filterBox exp-filter-box" style={{ position: "relative" }}>
            <div className="experience" >
              <span id='span-1'><input type="text" placeholder='Experience' className='exp-filter-box' value={exp} />
              </span>
              <span id='span-2' onClick={() => { setOpenExp(prev => prev == "block" ? "none" : "block") }}>
                {openExp == "none" ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}</span>
            </div>
            <div className="dropdown-data" style={{ display: openExp, position: "absolute", top: "2.7rem" }} onClick={(e) => {setExp(e.target.innerText), setOpenExp("none") }}>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
              <div>7</div>
              <div>8</div>
              <div>9</div>
              <div>10</div>
            </div>
          </div>


        
          <div className="filterBox minSalary-filterBox" style={{ position: "relative" }}>
            <div className="minSalary" >
              <span id='span-1'><input type="text" placeholder='Number Of Employees' className='minSalary-filterBox' value={NoOfEmployees} />
              </span>
              <span id='span-2' onClick={() => {setOpenNoOfEmployees(prev => prev == "block" ? "none" : "block") }}>
                {openNoOfEmployees == "none" ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}</span>
            </div>

            <div className="dropdown-data" style={{ display: openNoOfEmployees, position: "absolute", top: "2.7rem" }} onClick={(e) => {setNoOfEmployees(e.target.innerText), setOpenNoOfEmployees("none") }}>
              <div>1-10</div>
              <div>11-20</div> 
              <div>21-50</div>
              <div>51-100</div>
              <div>101-200</div>
              <div>201-500</div>
              <div>500+</div>
            </div>
            </div>





          <div className="filterBox minSalary-filterBox" style={{ position: "relative" }}>
            <div className="minSalary" >
              <span id='span-1'><input type="text" placeholder='Min Base Salary' className='minSalary-filterBox' value={minSalary} />
              </span>
              <span id='span-2' onClick={() => {setOpenMinSalary(prev => prev == "block" ? "none" : "block") }}>
                {openSalary == "none" ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}</span>
            </div>

            <div className="dropdown-data" style={{ display: openSalary, position: "absolute", top: "2.7rem" }} onClick={(e) => {setMinSalary(e.target.innerText), setOpenMinSalary("none") }}>
              <div>0 LPA ~ 0 k USD</div>
              <div>10 LPA ~ 12k USD</div> 
              <div>20 LPA ~ 24k USD</div>
              <div>30 LPA ~ 36k USD</div>
              <div>40 LPA ~ 48k USD</div>
              <div>50 LPA ~ 60k USD</div>
              <div>60 LPA ~ 72k USD</div>
              <div>70 LPA ~ 84k USD</div>
            </div>
          </div>
          <div className="filterBox minSalary-filterBox" style={{ position: "relative" }}>
            <div className="minSalary" >
              <span id='span-1'><input type="text" placeholder='Remote' className='minSalary-filterBox' value={location}/>
              </span>
              <span id='span-2' onClick={() => {setOpenLocation(prev => prev == "block" ? "none" : "block") }}>
                {openlocation == "none" ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}</span>
            </div>

            <div className="dropdown-data" style={{ display: openlocation, position: "absolute", top: "2.7rem" }} onClick={(e) => {setlocation(e.target.innerText.toLowerCase()), setOpenLocation("none") }}>
              <div>Remote</div>
              <div>Hybrid</div> 
              <div>In-office</div>
            </div>
          </div>


          <div className="filterBox company-filter" >
            <span className='span'><input type="text" placeholder='Search Company Name' className='exp-filter-box' onChange={(e)=>setCompanyName(e.target.value.toLowerCase())} /></span> 
          </div>
        </div>


        <div className='job-grid'>
          { data.length > 0 && 
            data.filter(ele => { 
              
            let salary = minSalary? minSalary.split(" ~ ")[0].slice(0,2): 0;
            ele.salaryCurrencyCode == "USD"? salary*12: salary;
            return     (ele.minExp <= (10 && (exp || 10))  && ele.maxExp >= exp)
                    && (ele.companyName.toLowerCase().includes(companyName))
                    && (ele.minJdSalary >= salary) 
                    && (ele.location.toLowerCase() === location || true)     
                      
          
          })
            .map((ele, index) => { return <Job key={index} details={ele} /> })}
          {isLoading && <p>Loading...</p>}
        </div>
      </div>
    </div>



  )
}
