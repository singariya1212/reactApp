import React, { useState } from "react";
 function Filltext(){
         const[Dc,setDc]  =useState("hello")

         const[Ok, setOk]=useState()
         function Oj (event){
            setOk(event.target.value)
         }
 function Lo()
 { setDc(Ok)}
    return (

    <div>


        <h1> {Dc}</h1>
        <input type="text" value={Ok}  onChange={Oj}></input>
        <button onClick={Lo}> please submit</button>
    </div>
)

    
 }
 export default Filltext;