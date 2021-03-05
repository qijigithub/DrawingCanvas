
import React ,{useState,useEffect,useRef} from 'react';
export const App= ()=>{
  const [initialData, setinitialData] = useState([{}]);




  // let color = "black";
  // let strokeSize = 10;
  
  // function changeColorAndSize(data, width) {
  //   color = data;
  //   strokeSize = width;
  // }
  // window.addEventListener("load", () => {
  //   const canvas = document.querySelector("#canvas");
  //   const ctx = canvas.getContext("2d");
  
  //   //resizing
  //   canvas.height = window.innerHeight;
  //   canvas.width = window.innerWidth;
  
  //   //variables
  //   let painting = false;
  
  //   //functions
  //   function startPosition(e) {
  //     painting = true;
  //     draw(e);
  //   }
  
  //   function endPosition() {
  //     painting = false;
  //     ctx.beginPath();
  //   }
  
  //   function draw(e) {
  //     if (!painting) {
  //       return;
  //     }
      
  //     e.preventDefault();
  //     ctx.lineWidth = strokeSize;
  //     ctx.lineCap = "round";
   
  //     // ctx.lineTo(e.clientX, e.clientY);
  //     if (e.type == 'touchmove'){
  //       ctx.lineTo(e.touches[0].clientX, e.touches[0].clientY);
  //     } else if (e.type == 'mousemove'){
  //       ctx.lineTo(e.clientX, e.clientY);
  //     }
        
  //     ctx.stroke();
  //     ctx.strokeStyle = color;
  //     ctx.beginPath();
      
  //     // ctx.moveTo(e.clientX, e.clientY);
  //     if (e.type == 'touchmove'){
  //       ctx.moveTo(e.touches[0].clientX, e.touches[0].clientY);
  //     } else if (e.type == 'mousemove'){
  //       ctx.moveTo(e.clientX, e.clientY);
  //     }
  //   }
  
  //   //event listeners
  //   canvas.addEventListener("mousedown", startPosition);
  //   canvas.addEventListener("touchstart", startPosition);
  //   canvas.addEventListener("mouseup", endPosition);
  //   canvas.addEventListener("touchend", endPosition);
  //   canvas.addEventListener("mousemove", draw);
  //   canvas.addEventListener("touchmove", draw);
  // });







  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const [isDrawing,setIsDrawing] = useState(false)
  useEffect(()=>{
    const canvas= canvasRef.current;
    canvas.width = window.innerWidth*2;
    canvas.height = window.innerHeight*2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
  
    
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
    e.preventDefault();

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

