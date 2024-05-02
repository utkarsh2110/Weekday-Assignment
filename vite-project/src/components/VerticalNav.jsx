import workDayLogo from "../assets/workday_logo.png"
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import RecommendOutlinedIcon from '@mui/icons-material/RecommendOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import "../styles/leftNav.css"

export default function VerticalNav(){

    return (

        <div className="left-main">
        <div className="left-nav">
            <div className="logo">
                <img src={workDayLogo} width={"45px"}/>
            </div>
            <hr />
            <div className="profile">
                <p>GET JOBS</p>
                <PermIdentityOutlinedIcon/>
            </div>
            <div className="searchIcon">
                <SearchOutlinedIcon/>
            </div>
            <div className="currency">
                <CurrencyRupeeOutlinedIcon/>
            </div>
            <div className="referral">
                <PersonAddAltOutlinedIcon/>
            </div>
            <hr />
            <div className="like">
                <p>REFER</p>
                <RecommendOutlinedIcon/>
            </div>
            <div className="share">
                    <ShareOutlinedIcon/>
            </div>
            </div>
            <div className="profile-pic">
                <h2>US</h2>
            </div>
        </div>

    )

}



