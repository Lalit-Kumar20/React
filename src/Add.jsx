import React , { useState } from 'react';
import ReactDOM from 'react-dom';
import "./styles.css";

export default function Add(props){

    const [inputText, setText] = useState("");
    function handleChange(event) {
      setText(event.target.value);
    }
  
    return (
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} className= "form__field" placeholder="Add a Task"  contentEditable/>
        <button
         className = "btn btn--primary btn--inside uppercase"
          onClick={() => {
            props.onpress(inputText);
            setText("");
          }}
        >
          <span>Add</span>
        </button>
      </div>
    );
};