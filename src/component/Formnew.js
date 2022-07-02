import React, { useState } from "react";
function Formnew() {
 
    const [enterName, setenterName] = useState('')

    const [enterAdd, setenterAdd] = useState('')
    const [enterTitle, setenterTitle] = useState('')


    const changett = (event) => {
        setenterTitle(event.target.value)
    };


    const changenn = (event) => {
        setenterName(event.target.value)



        

    };

    const changeaa = (
        event) => {
        setenterAdd(event.target.value)

    };


const Submithand=(event)=>{
event.preventDefault();
const Obj= {
    Title: enterTitle,
    Name: enterName,
    Add: enterAdd

}
console.log(Submithand);
}
    return (
        <div>

            <form onSubmit={Submithand}>
                <h2> Fill The Form </h2>
                <label> Tittle Of My Form :-</label>
                <input type="text" onChange={changett}></input>
                <br></br>
                <br></br>


                <label> Name :-</label>
                <input type="text" onChange={changenn}></input>
                <br></br>
                <br></br>

                <label> address :-</label>
                <input type="text" onChange={changeaa}></input>
                <br></br>
                <br></br>


                <button> Submit Form</button>
                <hr></hr>

            </form>
        </div>
    )
}
export default Formnew;