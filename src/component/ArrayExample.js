import './ArrayExample.css';

function ArrayExample(Props){
    let clickhandler =()=> {
        alert("hello why you click")
    }

    let he = ()=>
    {
alert("hello button 2")
    }
    return(
        <div className='ArrayExample'>
   
            
   <h1> array of objects example </h1>
               <h2> this array example for multiple  components== {Props.p}</h2>
            <h3>  hello my array of obejcts example =={Props.q}</h3>
            <button  onClick={clickhandler}>change title</button> <br></br> <br></br>
<button onClick={he}>here the button 2 </button>

            
               
        </div>
    )
}
export default ArrayExample;