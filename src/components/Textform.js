import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase ", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase ", "success");

  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handlecopy = () => {
 navigator.clipboard.writeText(text);
 props.showAlert("Copied to Clipboard! ", "success");

  };
  const handleclear = () => {
    let newText = "";
    setText(newText);
    props.showAlert(" Text Cleared", "danger");

  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces", "success");

  };
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1 className='mb-3'>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} placeholder="enter text here" id="myBox" rows="8" style={{backgroundColor: props.mode==='dark'?'#818589':'white', color: props.mode==='dark'?'white':'#042743'}}
          ></textarea>
        </div>
        <button disabled={text.length===0}className={`btn ${props.mode==='dark'?'btn-outline-warning':'btn-warning'} mx-3 my-3`} onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0}className={`btn ${props.mode==='dark'?'btn-outline-warning':'btn-warning'} mx-3 my-3`} onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0}className={`btn ${props.mode==='dark'?'btn-outline-warning':'btn-warning'} mx-3 my-3`} onClick={handlecopy}>
          Copy Text
        </button>
        <button disabled={text.length===0}className={`btn ${props.mode==='dark'?'btn-outline-warning':'btn-warning'} mx-3 my-3`} onClick={handleclear}>
          Clear Text
        </button>
        <button disabled={text.length===0}className={`btn ${props.mode==='dark'?'btn-outline-warning':'btn-warning'} mx-3 my-3`} onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters{" "}
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
      </div>
    </>
  );
}
