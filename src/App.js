import logo from './logo.svg';
import './App.css';
import SubCompo from './component/SubCompo';
import Expence from './component/Expence';
import Expence2 from './component/Expence2';
import States from './component/States';
import Handle from './component/Handle';
import ArrayExample from './component/ArrayExample';
import Fillthetext from './component/Fillthetext'; 
import State2 from './component/State2';
import State3 from './component/State3';
import Filltext from './component/Filltext';
import Formnew from './component/Formnew';
import { useState } from 'react';
function App() {
  let keprice = 2500;
  let bdate = "hello my date"
  let money = "please give my money"
  let ar = [
    {
      id: 12,
      name: "santanu",
      ps: 123
    },
    {
      id: 2,
      name: "pintu",
      ps: 12323
    },
    {
      id: 3,

      name: "rinki",
      ps: 12113
    }
  ]



  return (
    <div>
    <div>
   <Formnew></Formnew>
      <Filltext></Filltext>
      <Fillthetext></Fillthetext>
    
     
<State3/>
      <Expence></Expence>
      <Expence2 price={keprice} newone="ye new one he bhai jisko declare nahi kia" ky={bdate} He="hello he">

      </Expence2>
      <ArrayExample
        p={ar[0].id} >

      </ArrayExample>
      <ArrayExample p={ar[2].ps}
        q={ar[0].name}>

      </ArrayExample>
      <ArrayExample p={ar[0].name}></ArrayExample>
      <ArrayExample p={ar[1].name}></ArrayExample>
<States></States>
 <Handle></Handle>
 
 <State2></State2>
 

    </div>

    </div>
  );
}

export default App;
