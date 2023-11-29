import React, { useState } from 'react'



export default function TextForm(props) {

  const handleUpClick = () => {
    console.log("uppercase was clicked" + text)
    let newText = text.toUpperCase()
    setText(newText);
    props.showAlert("converted to Uppercase", "success");
  }

  const handleloClick = () => {
    console.log("uppercase was clicked" + text)
    let newText = text.toLowerCase()
    setText(newText);
    props.showAlert("converted to Lowercase", "success");

  }
  const handleOnChange = (event) => {
    console.log("on change")
    setText(event.target.value);
  }

  const cleardata = () => {
    let newText = '';
    setText(newText)
    props.showAlert("Text Cleared", "success")
  }


  // copybutton
  const handleCopy = () => {
    console.log("i am copy");
    var text = document.getElementById('myBox');
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!", "success");
  }

  //remove extra spaces ...
  const handleExtraSpaces = () => {
    let newText = text.replace(/[ ]+/g, '');
    // console.log(typeof(text), '<---- type of')
    setText(newText);
    props.showAlert('Extra spaces removed!', 'success');
  };



  //add font style
  const [styletext, setstyletext] = useState('sans-serif')
  const handleFontChange = (e) => {
    const newStyleText = e.target.value;
    setstyletext(newStyleText);
    props.showAlert("Font changed", "success");
  };


  //add color
  const [color, setcolor] = useState('black')
  const f11 = (e) => {
    const newcolor = e.target.value;
    setcolor(newcolor)
    props.showAlert(`Color Changed to ${color}`, "success");
  }


  //align
  const [align, setalign] = useState('left')
  const alignchange = (e) => {
    const newalign = e.target.value
    setalign(newalign)
    props.showAlert("Align changed", "success");

  }





  const [text, setText] = useState(' ');

  // to change text in there of 'text' var.
  // setText('you have clicked on handleupclick'); use like this
  return (
    <div>
      <h1 className="heading" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{props.heading} </h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? '#a9d9d0' : 'white', fontFamily: styletext, color: color, textAlign: align }} id="mybox" rows="8"></textarea>
      </div>

      <div className="">

        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleloClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={cleardata}>Cleartext</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Spaces</button>

        <select name="font" id="fontSelect" type="text"
          onChange={handleFontChange} value={styletext}
          className="btn btn-primary my-2 mx-2 "
          // data-toggle="tooltip"
          // data-placement="top"
          title="Font-Style">
          <option value="sans-serif">sans-serif</option>
          <option value="cursive">cursive</option>
          <option value="monospace">monospace</option>
          <option value="fantasy">fantasy</option>
          <option value="system-ui">system-ui</option>
        </select>

        <select name="font" id="fontSelect" type="text"
          onChange={alignchange} value={align}
          className="btn btn-primary my-2 mx-2 "
          // data-toggle="tooltip"
          // data-placement="top"
          title="Font-Style">

          <option value="left">{'Align-Left <---'} </option>
          <option value="right">{'Align-right --->'}</option>
          <option value="center">{'Align-center ----'}</option>

        </select>

        <input className='color my-2 mx-2 ' type="color" onChange={f11} id="color-change" title="color"></input>


      </div>



      <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h2>Your Text Summary</h2>
        {text.trim() === '' ? (
          <p>No words and {text.length} characters</p>
        ) : (
          <>
            <p>{text.trim().split(/\s+/).length} words and {text.length} characters</p>
            <p>{0.008 * text.trim().split(/\s+/).length} Minutes read</p>
          </>
        )}
        <h2>Preview</h2>
        <p>{text}</p>
      </div>


    </div>
  )
}
