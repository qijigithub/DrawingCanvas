import React from 'react'
// function Point(x, y) {
//     this.x = x;
//     this.y = y;
//   }
const Canvas = ({onStart,onDraw, onEnd, onStop,height, width, className }) => {
const canvasRef = React.useRef(null)
const [start, setStart] = React.useState({x:0,y:0})
// const { Height, Width } = canvasStore;
React.useEffect(()=>{
const canvas = canvasRef.current;
if(!canvas) {
    return
}
canvas.height = height;
canvas.width = width;
canvas.style.width = "100vw"
canvas.style.height = "100vh"
}, [width,height])

const startDrawing = ({nativeEvent}) => {
    let {offsetX, offsetY} = nativeEvent
    const canvas = canvasRef.current
    if(!canvas) {
        return
    }
    if(window.TouchEvent){
        if(nativeEvent.changedTouches?.length){
          offsetX = nativeEvent.changedTouches[0].clientX - canvas.offsetLeft;
          offsetY = nativeEvent.changedTouches[0].clientY - canvas.offsetTop;
        }
      }
    const bound = canvas.getBoundingClientRect()
    const normalizeX = offsetX/bound.width
    const normalizeY = offsetY/bound.height
    setStart({x:normalizeX,y:normalizeY})
    onStart()
}

const finishDrawing = () => {
    onEnd()
}
const draw = ({nativeEvent}) => {
    let {offsetX, offsetY} = nativeEvent
    const canvas = canvasRef.current
    if(!canvas) {
        return
    }
    if(window.TouchEvent){
        if(nativeEvent.changedTouches?.length){
          offsetX = nativeEvent.changedTouches[0].clientX - canvas.offsetLeft;
          offsetY = nativeEvent.changedTouches[0].clientY - canvas.offsetTop;
        }
      }
    const context = canvas.getContext('2d')
    const bound = canvas.getBoundingClientRect()
    const normalizeX = offsetX/bound.width
    const normalizeY = offsetY/bound.height
    onDraw(context,start.x,start.y,normalizeX, normalizeY)
    setStart({x:normalizeX,y:normalizeY})
}
const canvasLeave = () => {
    onStop()
}
  return (
    <canvas 
    ref={canvasRef} 
    onMouseDown={startDrawing} 
    onMouseMove={draw} 
    onMouseUp={finishDrawing} 
    onMouseLeave={canvasLeave}     
    onTouchStart={startDrawing}
    onTouchEnd={finishDrawing}
    onTouchMove={draw}
    className={className}></canvas>
  )
}

export default Canvas