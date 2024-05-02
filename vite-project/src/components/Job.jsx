import logo from '../assets/workday_logo.png'
import '../styles/job.css'
export default function Job() {

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
                    <h2 className='role'>Product Manager</h2>
                    <h3 className='location'>India</h3>
                </div>
            </div>
            <h1 className='salary'>Estimated Salary: ₹15 - 25 LPA &#9989;</h1>
            <h1 className='static-h1'>About Company:</h1>
            <h2 className='about-us'>About us</h2>
            <p className='company-details'>Trumio is the world's first University Projects Ecosystem platform enabling global clients to harness students, professors, and institutional capabilities to speed priority project execution for their business. Next-generation talent organized as teams with diverse skills, find and deliver impactful outcomes working within a secure project environment on Trumio. With AI- assistance built into each process step - Trumio makes it easy for clients and teams to stay on track, collaborate, and achieve desired project</p>

            <div style={{position:"relative"}} >
                 <div className="viewMore"></div>
                 <p style={{color: "#4943DA", textAlign:"center", zIndex:1000, opacity: 1, marginTop:10}}>Show More</p>
            </div>

            <h1 className='exp'>Minimum Experience </h1>
            <h1 className='exp-txt'>1 years </h1>
            <button className='btn'><div style={{fontSize: "15px", marginRight: "5px",display:"inline"}}>&#9889;</div>Easy Apply</button>

        </div>



    )
}