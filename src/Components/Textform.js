import React from 'react'
import { useState } from "react"

export default function Textform(props) {
    const handleUpClick = () => {
        console.log("Convert to UpperCase");
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleLowClick = () => {
        console.log("Convert to LowerCase");
        let newText = text.toLowerCase();
        setText(newText);
    };

    const handleUClearClick = () => {
        console.log("Clearing the text");
        setText("");
    };

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    };
    const [text, setText] = useState("");
    return (
        <>
            <div className="container">
                <div className="mb-3 my-4">
                    <h2>{props.heading}</h2>
                    <textarea className={`form-control bg-${props.mode} text-${props.mode === 'light'?'dark':'light'}`} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button disabled = {text.length===0} className="btn btn-primary" onClick={handleUClearClick}>Clear</button>
                <button disabled = {text.length===0} className="btn btn-primary mx-3 my-2" onClick={handleUpClick}>Click to UpperCase</button>
                <button disabled = {text.length===0} className="btn btn-primary" onClick={handleLowClick}>Click to LowerCase</button>
            </div>
            <div className="container my-4">
                <h4>Your text summary</h4>
                <p>{text.split(" ").filter((element)=> {return element.length!==0}).length} words and {text.length - text.split(" ").length} charachters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h5>Preview</h5>
                <p>{text}</p>
            </div>
        </>
    )
}
