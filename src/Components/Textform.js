import React, {useState} from 'react';
// import PropTypes from 'prop-types';


export default function Textform(props) {
  const handleLowClick = ()=>{
    let lowtext = text.toLowerCase();
    setText(lowtext);
  }
  
  
  const handleUpClick = ()=>{
   let newText = text.toUpperCase();
    setText(newText);
  }
  const handleClear = ()=>{
    let newText = "";
    setText(newText);

  }
  const handleOnChange = ()=>{
    // eslint-disable-next-line no-restricted-globals
    setText(event.target.value);
  }
  const [text, setText] = useState("");
  return (
    <>
    <div className='container'>
      
  <div className="mb-3 mx-3">
    <label htmlFor="Mybox" className="form-label"><h1>{props.heading}</h1></label>
    <textarea className="form-control" id="MyBox" value={text} onChange={handleOnChange} rows="6"></textarea>
    <button className="btn btn-primary" onClick={handleUpClick}>Upper</button>
    <button className="btn btn-primary" onClick={handleLowClick}>Lower</button>
    <button className="btn btn-danger" onClick={handleClear}>Clear All Text</button>
  </div>
  </div>
  <div className="container my-3">
    <h2>Your words have been counted here</h2>
    <p> {text.split(" ").length} words and {text.length} characters </p>
    <p> You need {0.08 * text.split(" ").length} minutes to read the above words </p>
  </div>
  </>
  )
  
}
