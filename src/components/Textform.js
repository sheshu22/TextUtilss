import React,{useState} from 'react'

export default function Textform(props) {

  const[text,setText]=useState("first hook");

  const upClick= ()=>{
    console.log("uppercase button clicked");
    let updatedText= text.toUpperCase();
    setText(updatedText);
  }

  const change=(event)=>{

    console.log("onChange function clicked");
    setText(event.target.value);
  }

  //setText("second hook");
  return (
    <div className="container mb-3 my-3 ">
        <h2 className='title1' >{props.title}</h2>
        <h4>ENTER THE TEXT</h4>
        <textarea className="form-control " value= {text} onChange={change} id="exampleFormControlTextarea1" rows="9"></textarea>

        <button type="button" className="btn btn-primary btttt" onClick={upClick} >Uppercase</button>

    </div>
  )
}
