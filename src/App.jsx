import React , { useState } from 'react';
import ReactDOM from 'react-dom';
import "./styles.css"
import Clock from './Clock';
export default function App() {
    var d = new Date();
    var [time,setTime] = useState({
        hours : d.getHours(),
        minutes : d.getMinutes(),
        seconds : d.getSeconds() 
    });
    
    setInterval(function(){ 
         
        var dd = new Date();
        var obj = {
            hours : dd.getHours(),
            minutes : dd.getMinutes(),
            seconds : dd.getSeconds()
        };
        console.log(obj);
        setTime(obj);
        
    }, 1000);
    
    return (
        <div className="box">
        <h1> {time.hours} : {time.minutes} : {time.seconds} </h1>
        <Clock 
            sec = {time.seconds*6}
            min = {time.minutes*6}
            hour = {time.hours*30}
        />
       </div>
    );
  }