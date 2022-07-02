import React, { useState } from "react"; 
 function Fillthetext()
 {  const [ You, setYou]=useState()
     const [Fill, setFill] =useState();
    
     const Changehadler =(event)=>{
         setFill(event.target.value)
     } 
     const Changebutton= ()=>{
        setYou(Fill) 
     }
     return( 
     <div>


 <h1> value is - {You}</h1>
  <input type="text" value={Fill}  onChange={Changehadler}
  ></input> <br></br>
  <button onClick={Changebutton}>submit</button>
     </div>
     )
 }
 export default Fillthetext;