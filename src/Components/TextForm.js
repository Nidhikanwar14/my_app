import React , {useState} from 'react'


export default function TextForm(props){
    const handleUpClick=()=>{
        // console.log("upper case was clicked");
        let newText = text.toUpperCase();
        setText(newText)
    }
 const handleLoClick=()=>{
        // console.log("upper case was clicked");
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick=()=>{
        // console.log("upper case was clicked");
        let newText = '';
        setText(newText)
    }

    const handleOnChange = (event)=>{
        console.log("On change..");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return(
        <>
        <div className='container'>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control"  value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={handleUpClick}>uppercase</button>
            <button className='btn btn-success mx-2' onClick={handleLoClick}>Lowercase</button>
            <button className='btn btn-danger mx-2' onClick={handleClearClick}>Remove</button>


        </div>
            <div className='container my-3'>
                <h2>Your text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008* text.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
