import React , { useState } from 'react';
import ReactDOM from 'react-dom';
import "./styles.css"
export default function Clock(props){
    return (
        <div className= "clk">
          
            <div className= "sec" style ={ {transform: `rotate(${props.sec}deg)`}}></div>
            <div className= "min" style ={ {transform: `rotate(${props.min}deg)`}}></div>
            <div className= "hour" style ={ {transform: `rotate(${props.hour}deg)`}}></div>
            <div className= "center"></div>     
            <h3 className="one">1</h3>
            <h3 className="two">2</h3>
            <h3 className="three">3</h3>
            <h3 className="four">4</h3>
            <h3 className="five">5</h3>
            <h3 className="six">6</h3>
            <h3 className="seven">7</h3>
            <h3 className="eight">8</h3>
            <h3 className="nine">9</h3>
            <h3 className="ten">10</h3>
            <h3 className="eleven">11</h3>
            <h3 className="twelve">12</h3>

        </div>
    );

};