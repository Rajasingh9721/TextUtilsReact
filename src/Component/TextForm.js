import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter your text here");
    const changeText = (event) => {
        setText(event.target.value);
    }
    const uprCase = () => {
        // console.log("Upper case Button Clicked");
        let newText = text.toUpperCase();
        setText(newText)
    }
    const lwrCase = () => {
        // console.log("Lower case Button Clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const clrText = () => {
        setText('')
    }
    const rmvSpace = () => {
        let newText = text.split(/ [ ]+ /);
        setText(newText.join(" "));
    }
    const cpyText = () => {
        let newText = document.getElementById('textArea');
        newText.select();
        navigator.clipboard.writeText(newText.value);

    }
    return (
        <>
            <div className="form-group container" style={{color:props.mode === 'dark'?'white':'grey'}}>
                <h2>{props.heading}</h2>
                <textarea className="form-control my-1" value={text} style={{backgroundColor:props.mode === 'dark'?'grey':'white',color:props.mode === 'dark'?'white':'grey'}} onChange={changeText} id="textArea" rows="8" ></textarea>
                <button type='button' className="btn btn-primary m-1" onClick={uprCase}>Convert TO UpperCase</button>
                <button type='button' className="btn btn-primary m-1" onClick={lwrCase}>Convert TO LowerCase</button>
                <button type='button' className="btn btn-primary m-1" onClick={clrText}>Clear Text Box</button>
                <button type='button' className="btn btn-primary m-1" onClick={rmvSpace}>Remove Extra Space</button>
                <button type='button' className="btn btn-primary m-1" onClick={cpyText}>Copy Text</button>
            </div>
            <div className='container' style={{color:props.mode === 'dark'?'white':'grey'}}>
                <h1>Your Text Summery</h1>
                <p>{text.split(" ").length} Words and {text.length} Charracters</p>
                <h2>Preview</h2>
                <p>{text.length===0?'Enter your text in above box to evaluate here':text}</p>
            </div>
        </>
    )
}
