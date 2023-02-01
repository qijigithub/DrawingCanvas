
import React from 'react';
import './App.css';
import Canvas from './Canvas';
export const App= ()=>{


//////////////////
const [drawing, setDrawing] = React.useState(false)
const [pencil, setPencil] = React.useState(0)
const [height, setHeight] = React.useState(window.innerHeight)
const [width, setWidth] = React.useState(window.innerWidth)
const containerRef =React.useRef(null)

const onDrawing = (context, sx, sy, cx, cy) => {
  if(!drawing) {
    return
  }
  // if(pencil === 0) {
  //   sx *= width;
  //   sy *= height;
  //   cx *= width;
  //   cy *= height;
  //   context.beginPath();
  //   context.moveTo(sx,sy);
  //   context.lineTo(cx,cy);
  //   // context.fillStyle = "black"
  //   context.strokeStyle = 'black'
  //   context.lineWidth = 5
  //   context.stroke();
  // } else 
  if(pencil === 0) {
    cx *= width;
    cy *= height;
    context.fillStyle = "white"
    context.fillRect(cx,cy,100,100)
  } else{
    sx *= width;
    sy *= height;
    cx *= width;
    cy *= height;
    context.beginPath();
    context.moveTo(sx,sy);
    context.lineTo(cx,cy);
    switch (pencil) {
      case 1: context.strokeStyle = 'black'; break;
      case 2: context.strokeStyle = 'red'; break;
      case 3: context.strokeStyle = 'blue';break;
      case 4: context.strokeStyle = 'green';break;
      case 5: context.strokeStyle = 'yellow';break;
      case 6: context.strokeStyle = 'purple';break;
      case 7: context.strokeStyle = 'grey';break;
    }
    context.lineWidth = 5
    context.stroke();
  }
}

const startDrawing = () =>setDrawing(true)
const endDrawing =()=>setDrawing(false)
const onExit = ()=> {
  if(drawing){
    setDrawing(false)
  }
}
// React.useEffect(()=>{
//   setDrawing(true)
// }, [])
const selectEraser = () => setPencil(0)
const selectPencil = () => {
  setPencil(1)
}
const selectColor = (number) => {
  setPencil(number)
}

React.useEffect(()=>{
  window.addEventListener('resize', (event)=> {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
    })
    return ()=> {
      window.removeEventListener('resize',()=>{})
    }
}, [containerRef.current])

//////////////////

return (
  <>
  <div ref={containerRef}>
  <Canvas onDraw={onDrawing} onStart={startDrawing} onStop={endDrawing} onEnd={onExit} height={height} width={width}/>
  </div>
  <div id="colorButtonBox">
  <div id="colorButton" className="black" onClick={selectPencil}></div>
  <div id="colorButton" className="red" onClick={()=>selectColor(2)}></div>
    <div id="colorButton" className="blue" onClick={()=>selectColor(3)}></div>
    <div id="colorButton" className="green" onClick={()=>selectColor(4)}></div>
    <div id="colorButton" className="yellow" onClick={()=>selectColor(5)}></div>
    <div id="colorButton" className="purple" onClick={()=>selectColor(6)}></div>
    <div id="colorButton" className="grey" onClick={()=>selectColor(7)}></div>
    <div id="eraserButton" className="white" onClick={selectEraser}></div>
    {/* <button onClick={selectPencil}>pencil</button>
    <button onClick={selectEraser}>eraser</button> */}
  </div>
  </>
)


}

export default App;

