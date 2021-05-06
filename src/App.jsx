import React , { useState , useEffect} from 'react';
import ReactDOM from 'react-dom';
import "./styles.css"
import Clock from './Clock';
import Note from './Note';
import Add from './Add';
export default function App() {
  
  var d = new Date();
    var [time,setTime] = useState({
        hours : d.getHours(),
        minutes : d.getMinutes(),
        seconds : d.getSeconds() 
    });
    
    
  const [items, setItems] = useState([]);

 setInterval(function(){ 
         
      var dd = new Date();
      var obj = {
          hours : dd.getHours(),
          minutes : dd.getMinutes(),
          seconds : dd.getSeconds()
      };
     

      setTime(obj);
      
         
      }, 1000);

    
    function addItem(text) {
      setItems((prevItems) => {
        return [...prevItems, text];
      });
      }
    
      function deleteItem(id) {
        setItems((prevItems) => {
          return prevItems.filter((item, index) => {
            return index !== id;
          });
        });
      }
    return (
        <div className="box">
        <div className="text">
          <h1 className="hh">Todo List</h1>
        </div>
        <br></br>
        <div className = "midd">
        <Add onpress = {addItem}/>
        <div>
        
          {
            items.map((todoItem, index) => (
            <Note
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
           
            
          ))
          }
        
      </div>
       </div>
        <Clock 
            sec = {time.seconds*6}
            min = {time.minutes*6}
            hour = {time.hours*30}
        />
       </div>
       

    );
  }