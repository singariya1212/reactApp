import React, { useState } from "react";
function State3() {

    const [Little, setLittle] = useState()
    function Kt(event) {
        setLittle(event.target.value)
    }  
    const [Lt, setLt] = useState("this value can be change by clicking below button")
    function Pt() { setLt("here it is the change values") }
  
    return (
        <div>

            <h1> this is keypad checker for keys---- {Little}</h1>
            <input type="text" value={Little} onChange={Kt}></input>
            <button>click </button>


            <h2> {Lt}</h2>
            <button onClick={Pt}> <b>click here</b></button>


        </div>
    )
}
export default State3;