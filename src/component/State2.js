 import React,{useState} from "react";
  function State2 (){
   const[ Numbers,setNumbers]    =useState("")
  

   function Cn  (event){
    setNumbers(event.target.value)}
  
       return (
           <div>

<h1> keypad  check here------- {Numbers} </h1>
<input type="text" value={Numbers} onChange={Cn} ></input>
        
       
         
         
         
         
         
           </div>
       )
  }
  export default State2;