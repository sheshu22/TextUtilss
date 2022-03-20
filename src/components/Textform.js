import React,{useState} from 'react'

export default function Textform(props) {

  const[text,setText]=useState("Enter Text");

  const upClick= ()=>{
    console.log("uppercase button clicked");
    let updatedText= text.toUpperCase();
    setText(updatedText);
  }

  const lowclick=()=>{
    console.log("lowercase button clicked");
    let updatedText= text.toLowerCase();
    setText(updatedText);
  }

  const change=(event)=>{

    console.log("onChange function clicked");
    setText(event.target.value);
  }

  return (
    <>
    <div className="container mb-3 my-3 ">
        <h2 className='title1' >{props.title}</h2>
        <h4>ENTER THE TEXT BELOW</h4>
        <textarea className="form-control " value= {text} onChange={change} id="exampleFormControlTextarea1" rows="9"></textarea>

        <button type="button" className="btn btn-primary mx-2 btttt" onClick={upClick} >Uppercase</button>
        <button type="button" className="btn btn-primary mx-2 btttt" onClick={lowclick} >Lowercase</button>

    </div>

    <div className="container my-3">

      <h3>TEXT SUMMARY</h3>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.03 * text.split(" ").length} Minutes read</p>
      <h3> PREVIEW </h3>
      <p>{text}</p>

    </div>
    </>
  )
}
