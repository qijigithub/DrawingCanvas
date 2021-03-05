
import React ,{useState,useEffect,useRef} from 'react';
export const App= ()=>{
  const [initialData, setinitialData] = useState([{}]);
  // useEffect(()=>{
  //   fetch('/api').then(
  //     response=>response.json()
  //   ).then(
  //     data => {
  //       console.log(data)
  //       setinitialData(data)}
  //   )
  // },[])
  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const [isDrawing,setIsDrawing] = useState(false)
  useEffect(()=>{
    const canvas= canvasRef.current;
    canvas.width = window.innerWidth*2;
    canvas.height = window.innerHeight*2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    // canvas.width = 500*2;
    // canvas.height = 500*2;
    // canvas.style.width = `500px`;
    // canvas.style.height = `500px`;
    
    const context = canvas.getContext("2d");
    context.scale(2,2)
    context.lineCap ="round"
    context.strokeStyle = "black"
    context.lineWidth = 5
    contextRef.current = context;
  },[])
  const startDrawing =({nativeEvent})=>{
    const {offsetX, offsetY} = nativeEvent;
    contextRef.current.beginPath()
    contextRef.current.moveTo(offsetX, offsetY)
    setIsDrawing(true)
  }
  const finishDrawing =()=>{
    contextRef.current.closePath()
    setIsDrawing(false)
  }
  const draw = ({nativeEvent})=>{
    if(!isDrawing) {
      return
    }
    const {offsetX, offsetY} = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY)
    contextRef.current.stroke()
  }
  return (
    <div className="App">
      {/* <h1>Drawing Canvas</h1> */}
      <canvas style={{border:"1px solid #000000"}}
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove= {draw}
      ref= {canvasRef}
      />
      <h1>{initialData.completed}</h1>
    </div>
  );

}

export default App;

