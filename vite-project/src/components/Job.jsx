import logo from '../assets/workday_logo.png'
import '../styles/job.css'
export default function Job({details}) {
    console.log(details)
    return (

        <div className='job-card'>


            <div className="date-posted">
                <div style={{ fontSize: "10px" }}>&#8987;</div>
                <p style={{ fontSize: "10px" }}>Posted 12 days ago</p>
            </div>

            <div className="job-heading">
                <div className="img">
                    <img src={logo} alt="logo" width={"30px"} />
                </div>
                <div className='basic-details'>
                    <h1 className='company-name'>Trumio</h1>
                    <h2 className='role'>{details.jobRole}</h2>
                    <h3 className='location'>{details.location}</h3>
                </div>
            </div>
            <h1 className='salary'>Estimated Salary: {details.salaryCurrencyCode && "₹"}{details.minJdSalary}  {details.maxJdSalary && "- "+ details.maxJdSalary }  &#9989;</h1>
            <h1 className='static-h1'>About Company:</h1>
            <h2 className='about-us'>About us</h2>
            <p className='company-details'>{details.jobDetailsFromCompany.substring(0,444)}</p>

            <div style={{position:"relative"}} >
                 <div className="viewMore"></div>
                 <p style={{color: "#4943DA", textAlign:"center", zIndex:1000, opacity: 1, marginTop:10, cursor:"pointer"}}>Show More</p>
            </div>

            <h1 className='exp'>Minimum Experience </h1>
            <h1 className='exp-txt'>{details.minExp && details.minExp + " years"}  </h1>
            <button className='btn'style={{cursor:"pointer"}}><div style={{fontSize: "15px", marginRight: "5px",display:"inline"}}>&#9889;</div>Easy Apply</button>

        </div>



    )
}