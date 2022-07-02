import React, {useState} from "react";
 function Expence2(Props){
 
     const yt = Props.newone;
//     let Po = Props.He
//    const [ ky, setKy]= useState(Props.ky);
//    const clickHandler = () => {

//         setKy('new one nahi he');}
//        const [ Po ,setPo] =  useState(Po);
       
//             const clickHandler = () => {
//                  setPo('hello calling')}
            
       
   return (

           <div>
               <h1>
               hello expence2
               </h1>
               <h2> {Props.newone}</h2>
               <h3>  hello my {Props.newone}</h3>
               <h2> hello this is bdate value which is store in ky {Props.ky}</h2>
               <button  > button</button>
               <h1> hi h1</h1>
               
           </div>
           )
      
 }
 export default Expence2;