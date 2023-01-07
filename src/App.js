import Data from "./components/data";
import React from "react";
import Header from "./components/Header";
function App(){
  function clicked(){
    const choose = employees.map((ello)=>(ello.team===selec)?{...ello,team:''}:{...ello,team:selec});
    updateemployee(choose)
}
const [selec,selecup] = React.useState('A')
function changes(event){
    selecup(event.target.value)

}
console.log(selec)


const [employees,updateemployee] = React.useState([
    {
    id:1,
    name:"imran shrestha",
    gender :'male',
    work:'civil',
    team:'A'
    },
    {
    id:2,
    name:"aayus shrestha",
    gender :'male',
    work:'computer',
    team:'C'
    },
    {
    id:3,
    name:"manjil shrestha",
    gender :'male',
    work:'civil',
    team:'A'
    },
    {
    id:4,
    name:"hellow shrestha",
    gender :'female',
    work:'doctor',
    team:'B'
    },
    {
    id:5,
    name:"hari shrestha",
    gender :'male',
    work:'computer',
    team:'C'
    },
    {
    id:6,
    name:"ram shrestha",
    gender :'male',
    work:'doctor',
    team:'B'
    },
    {
    id:7,
    name:"sita shrestha",
    gender :'female',
    work:'computer',
    team:'C'
    },
    {
    id:8,
    name:"geeta shrestha",
    gender :'female',
    work:'computer',
    team:'C'
    },
    {
    id:9,
    name:"random shrestha",
    gender :'male',
    work:'doctor',
    team:'B'
}]);
  

  return(
    <div>
      <Header employees={employees.filter((employeeeeee)=>employeeeeee.team === selec).length} selec={selec}/>
      <Data employees={employees}
      clicked={clicked}
      selec={selec}
      changes={changes}/>

    </div>
    
  )
}
export default App;
