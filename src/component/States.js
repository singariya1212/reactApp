import React, { useState } from "react";


function States() {

  const [Hell, setHell] = useState('this  value can change by clicking below button')
  function Change() {
    setHell(" hey.....  !!!  this is changed value")

  }

  const [Number, setNumber] = useState(0);
  function Num() {
    setNumber(Number + 1)

  }
  return (
    <div>
      <h1> this is states practice</h1>
      <h3>
        {Hell}
      </h3>
      <button onClick={Change}> this button</button>
      <div>
        <h1> here it is some no.</h1>

        <h1>{Number}</h1>
        <button onClick={Num}> change the no.</button>

        <hr></hr>
      </div>
    </div>

  )
}
export default States;