import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("Uppercase was clicked \n" + text)
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Upper Case", "success")
    }

    const handleDownClick = () =>{
        console.log("Uppercase was clicked \n" + text)
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to Lower Case", "success")

    }
    const handleOnChange = (event) => {
        console.log("text area changed")
        setText(event.target.value)
    }

    const handleUpClearClick = (event) => {
        console.log("text area cleared")
        let newText = '' 
        setText(newText)
        props.showAlert("Text Cleared", "success")

    }

    const handleCopy = () =>{
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied", "success")

    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed", "success")

    }

    const [text, setText] = useState('Enter Text Here!');

    
    return (
        <>
        <div className="container" style={{color: props.mode ==='dark'? 'white': 'black'}}>
        <h2>{ props.heading }</h2>
            <div className="mb-3">
                <textarea className="form-control" value={ text } onChange={handleOnChange} id="myBox" rows="3"
                style={{backgroundColor:props.mode ==='dark'? 'grey': 'white', color: props.mode ==='dark'? 'white': 'black'}}
                >

                </textarea>
            </div>
            <button className='btn btn-primary mx-1' onClick={ handleUpClick }>Convert to UpperCase</button>
            <button className='btn btn-primary mx-1' onClick={ handleDownClick }>Convert to LowerCase</button>
            <button className='btn btn-primary mx-1' onClick={ handleUpClearClick }>Click to Clear</button>
            <button className='btn btn-primary mx-1' onClick={ handleCopy }>Click to Copy</button>
            <button className='btn btn-primary mx-1' onClick={ handleExtraSpaces }>Remove Extra Spaces</button>


        </div>


            <div className="container my-3" style={{color: props.mode ==='dark'? 'white': 'black'}}>
                <h3>Your Text Summary</h3>
                <p>{ text.split(" ").length } words and { text.length } characters.  </p>
                <p>{ 0.008 * text.split(" ").length } Minutes read.</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter Text to preview"}</p>
            </div>
        </> 
    )
}
