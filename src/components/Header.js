import React from "react"
function Header(props){
    
    return(
        <div className="header">
            <h2>Team {props.selec} has:{ props.employees } members</h2>
        
        </div>
        )
}
export default Header;