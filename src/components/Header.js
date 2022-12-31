import React from "react"
function Header(){
    const [selec,selecup] = React.useState('A')
    function changes(event){
        selecup(event.target.value)
    }
    console.log(selec)
    return(
        <div className="head">
        <select className="select" onChange={changes}>
            <option value='A'>Team A</option>
            <option value='B'>Team B</option>
            <option value='C'>Team C </option>

        </select>
        </div>
        )
}
export default Header;