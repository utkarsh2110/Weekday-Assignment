import logo from '../assets/workday_logo.png'
import '../styles/job.css'
export default function Job({details}) {

    const {jobRole, location, salaryCurrencyCode, minJdSalary, maxJdSalary, jobDetailsFromCompany, minExp, companyName, logoUrl} = details; //destructred the details object

    const suffixPay = salaryCurrencyCode=="INR"?"LPA": "K"; // determines the suffix of the currency LPA for INR and K for others.
    const currencySymbol = salaryCurrencyCode=="USD"?"$": "₹";
    
    if(details.jobRole){ // to check whether there is data or not in the details object
    return (
        <div className='job-card'>
            <div className="date-posted">
                <div style={{ fontSize: "10px" }}>&#8987;</div>
                <p style={{ fontSize: "10px" }}>Posted 12 days ago</p>
            </div>

            <div className="job-heading">
                <div className="img"> 
                    {/* company logo goes here */}
                    <img src={logoUrl} alt="logo" width={"30px"} /> 
                </div>
                <div className='basic-details'>
                    <h1 className='company-name'>{ companyName || "Weekday"}</h1>
                    <h2 className='role'>{jobRole}</h2>
                    <h3 className='location'>{location}</h3>
                </div>
            </div>
            <h1 className='salary'>Estimated Salary: {minJdSalary && currencySymbol + minJdSalary+ suffixPay + " -" || "<="}  {maxJdSalary && currencySymbol + maxJdSalary+ suffixPay }  &#9989;</h1>
            <h1 className='static-h1'>About Company:</h1>
            <h2 className='about-us'>About us</h2>
            <p className='company-details'>{jobDetailsFromCompany && jobDetailsFromCompany.substring(0,444)}</p> 
            {/* calculated and found that website used 444 characters, so that's why substring(0,444) */}

            <div style={{position:"relative"}} >
                 <div className="viewMore"></div>
                 <p style={{color: "#4943DA", textAlign:"center", zIndex:1000, opacity: 1, marginTop:10, cursor:"pointer"}}>Show More</p>
            </div>

            <h1 className='exp'>Minimum Experience </h1>
            <h1 className='exp-txt'>{minExp && minExp + " years" || "Unknown"}  </h1>
            <button className='btn btn1'style={{cursor:"pointer"}} onClick={()=>window.location.href=details.jdLink}><div style={{fontSize: "15px", marginRight: "5px",display:"inline", marginBottom: "20px"}}>&#9889;</div>Easy Apply</button>
            <button className='btn btn2'style={{cursor:"pointer"}}>Unlock Referral Asks</button>
        </div>
    )
}
}