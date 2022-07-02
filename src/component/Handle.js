import React, { useState } from "react";
function Handle() {


    const [Text, setText] = useState("") 
    return (
        <div>
            <h1>hey handle  {Text}</h1>
            <input type="text" placeholder="write here" onChange={(e) => { setText(e.target.value) }}  ></input>
        </div>
    )
}
export default Handle;