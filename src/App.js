
import React ,{useState,useEffect,useRef} from 'react';
import './App.css';
export const App= ()=>{


  let color;
  let strokeSize;
  
  function changeColorAndSize(data, width) {
    color = data;
    strokeSize = width;
  }
  window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
  
    //resizing
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
  
    //variables
    let painting = false;
  
    //functions
    function startPosition(e) {
      painting = true;
      draw(e);
    }
  
    function endPosition() {
      painting = false;
      ctx.beginPath();
    }
  
    function draw(e) {
      if (!painting) {
        return;
      }
      
      e.preventDefault();
      ctx.lineWidth = strokeSize;
      ctx.lineCap = "round";
   
      // ctx.lineTo(e.clientX, e.clientY);
      if (e.type == 'touchmove'){
        ctx.lineTo(e.touches[0].clientX, e.touches[0].clientY);
      } else if (e.type == 'mousemove'){
        ctx.lineTo(e.clientX, e.clientY);
      }
        
      ctx.stroke();
      ctx.strokeStyle = color;
     ctx.lineWidth = strokeSize;
      ctx.beginPath();
      
      // ctx.moveTo(e.clientX, e.clientY);
      if (e.type == 'touchmove'){
        ctx.moveTo(e.touches[0].clientX, e.touches[0].clientY);
      } else if (e.type == 'mousemove'){
        ctx.moveTo(e.clientX, e.clientY);
      }
    }
  
    //event listeners
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("touchstart", startPosition);
    canvas.addEventListener("mouseup", endPosition);
    canvas.addEventListener("touchend", endPosition);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("touchmove", draw);
  });

  return (
    <div className="App">

        <div id="colorButtonBox">
    <div id="colorButton" className="black" onClick={()=>changeColorAndSize('black',5)}></div>
    <div id="colorButton" className="red" onClick={()=>changeColorAndSize('red',5)}></div>
    <div id="colorButton" className="green" onClick={()=>changeColorAndSize('green',5)}></div>
    <div id="colorButton" className="blue" onClick={()=>changeColorAndSize('blue',5)}></div>
    <div id="colorButton" className="yellow" onClick={()=>changeColorAndSize('yellow',5)}></div>
    <div id="colorButton" className="purple" onClick={()=>changeColorAndSize('purple',5)}></div>
    <div id="colorButton" className="grey" onClick={()=>changeColorAndSize('grey',5)}></div>
    <div id="eraserButton" onClick={()=>changeColorAndSize('white',100)}></div>
  </div>
  
  <canvas id="canvas"></canvas>
    </div>
  );

}

export default App;

