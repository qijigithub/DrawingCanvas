
import React from 'react';
import './App.css';
export const App= ()=>{


  let color;
  let strokeSize;
  const [dimensions, setDimensions] = React.useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })
  const [isPortrait, setIsPortrait] =React.useState(true)
  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    
}
    window.addEventListener('resize', handleResize)
  })

  window.onorientationchange = (event) => {
    const angle = event.target.screen.orientation.angle/90
    if( angle % 2  === 0) {
      setIsPortrait(true)
    } else {
      setIsPortrait(false)
    }
    console.log(`the orientation of the device is now ${event.target.screen.orientation.angle}, is portrait:${event.target.screen.orientation.angle/90}`);
  };
  // const canvasRef = React.useRef();

  /// assuming canvas variable exists in global scope
  // const PureCanvas = React.forwardRef((props, ref) => <canvas ref={ref} />);
  function setCanvasElementSize () {
    // Also define the gap we want at the edges:
const edgeMargin = 10
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const canvasAspectRatio = windowWidth / windowHeight;
  
    // Work out the orientation of the device.
    // const isPortrait = window.innerHeight > window.innerWidth;
    console.log('window width* heing', window.innerWidth, window.innerHeight, 'isPortrait' ,isPortrait)
    if (isPortrait) {
    
      // We want to constrain the canvas by its width
      ctx.canvas.width  = windowWidth - (2 * edgeMargin);
      // The height depends on the width to ensure we don't stretch pixels
      // on the canvas.
      ctx.canvas.height = ctx.canvas.width / canvasAspectRatio;
      // ctx.canvas.width =  windowWidth - (2 * edgeMargin);
      // ctx.canvas.height = ctx.canvas.width / canvasAspectRatio;
    } else {
      // constrain by height
      // canvas.style.height = windowHeight - (2 * edgeMargin);
      // canvas.style.width = canvas.style.height * canvasAspectRatio;
      ctx.canvas.height = windowHeight - (2 * edgeMargin);
      ctx.canvas.width = ctx.canvas.height * canvasAspectRatio;
    }
  }
  
  // Call the function once initially to size the canvas
  
  React.useEffect(() => {
    // window.screen.orientation.lock('landscape');
    // const ctx = canvasRef.current.getContext("2d");
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
    // requestAnimationFrame(() => draw(ctx));

    const handleResize = e => {
      ctx.canvas.height = window.innerHeight;
      ctx.canvas.width = window.innerWidth;
    }

    setCanvasElementSize();
    window.addEventListener("resize",   setCanvasElementSize);

    return () => window.removeEventListener("resize",   setCanvasElementSize);
    
  }, []);
  // const canvas = document.querySelector("#canvas");
  // const ctx = canvas.getContext("2d");

  function redraw() {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = '5';
    ctx.strokeRect(0, 0, window.innerWidth, window.innerHeight);
  }

  function resizeCanvas() {
     const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    redraw();
  }


  React.useEffect(() => {
    window.addEventListener('resize', resizeCanvas, false);
    // Draw canvas border for the first time.
    resizeCanvas();
  }, [window.innerHeight, window.innerWidth]);
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
    // ctx.canvas.width =window.innerWidth;;
    // ctx.canvas.height = window.innerHeight;
    // setCanvasElementSize();
    // handleResize(e)
    redraw()
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
      if (e.type === 'touchmove'){
        ctx.lineTo(e.touches[0].clientX, e.touches[0].clientY);
      } else if (e.type === 'mousemove'){
        ctx.lineTo(e.clientX, e.clientY);
      }
        
      ctx.stroke();
      ctx.strokeStyle = color;
     ctx.lineWidth = strokeSize;
      ctx.beginPath();
      
      // ctx.moveTo(e.clientX, e.clientY);
      if (e.type === 'touchmove'){
        ctx.moveTo(e.touches[0].clientX, e.touches[0].clientY);
      } else if (e.type === 'mousemove'){
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
  {/* <PureCanvas id="canvas" ref={canvasRef} /> */}
  {/* <canvas id="canvas"></canvas> */}
  <h1>{`window width* height', ${window.innerWidth}, ${window.innerHeight}`}</h1>
  <h1>{`'isPortrait' ,${isPortrait}`}</h1>
  <div>Rendered at {dimensions.width} x {dimensions.height}</div>
  <canvas id='canvas' style={{position:'fixed', left:'0px', top:'0px'}}></canvas>
    </div>
  );

}

export default App;

