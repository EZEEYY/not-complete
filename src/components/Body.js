import React from "react";
import Data from "./components/data";
function Body(){
    const[border,borderup] = React.useState(false)
    const clicked =()=>{
        borderup(!border)
    }
    return(
        <div className="datas">
        
        {employees.map((employee)=>{
            return(<div className="indi" onClick={clicked} style={{border:border?'solid':'none'}} employee={employee}>
            <img src="logo192.png" ></img>
            <p> full name: {employee.name}</p>
            <p>work: {employee.work}</p>
            </div>
        )

        
    })}
    
    </div>
    )
}
export default Body;