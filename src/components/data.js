
import React from "react"


function Data (props){

    return(<div>
        <div className="head">
        <select className="select" onChange={props.changes}>
            <option value='A'>Team A</option>
            <option value='B'>Team B</option>
            <option value='C'>Team C </option>

        </select>
        </div>
    <div className="datas">
        
        {props.employees.map((employee)=>{
            return(<div className={(props.selec===employee.team?'indi':'none')} onClick={props.clicked}>
                <img src="logo192.png" ></img>
                <p> full name: {employee.name}</p>
                <p>work: {employee.work}</p>
            </div>
        )

        
    })}
    
    </div>
    </div>
    )
}
export default Data;