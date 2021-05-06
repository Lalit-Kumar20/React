import React , { useState } from 'react';
import ReactDOM from 'react-dom';
import "./styles.css";
export default function Note(props){

    return (
        <div className = "note"
          onClick={() => {
            props.onChecked(props.id);
          }
          
          }
        >
           <h1><pre>❌ {props.text}</pre></h1> 
           <br></br>

        </div>
      );

};