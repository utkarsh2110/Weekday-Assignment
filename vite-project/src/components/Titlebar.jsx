import "../styles/titlebar.css"
export default function Titlebar() {

    return (
        <div style={{
            height:"60px",
            borderBottom:"2px solid #e2e2e2",
            display: "flex",
            alignItems:"center",
            width: "100%",
            boxShadow: "3px 3px 3px grey 0.2",
            borderRadius: "0 0 5px 5px",
            paddingLeft: "20px"
        }}>
            <div className="burger-btn">
                <div className="bars bar1"></div>
                <div className="bars bar2"></div>
                <div className="bars bar3"></div>
            </div>
            
            {/* High Emoji */}
            <div style={{fontSize:"25px"}}>&#128075;</div> 
            
            <div className="h1"><h1 style={{fontSize: "20px", marginLeft: "10px", fontFamily: "Helvetica", }}>Utkarsh</h1></div>
        </div>

    )
}



