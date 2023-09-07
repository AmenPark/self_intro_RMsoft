import react, {useEffect, useRef} from "react";
function Ass2() {
    const canvasRef=useRef(null);
    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      ctx.lineWidth=2.5;
      makeSquare(0,0,300,'white',ctx);
      makeSquare(0,300,300,'black',ctx);
      makeSquare(300,0,300,'black',ctx);
      makeSquare(300,300,300,'yellow',ctx);
      makeSquare(0,150,150,'magenta',ctx);
      makeSquare(150,0,150,'magenta',ctx);
      makeSquare(450,150,150,'aqua',ctx);
      makeSquare(150,150,300,'lime',ctx);
      makeSquare(375,75,150,'blue',ctx);
      makeSquare(150,225,150,'red',ctx);
      makeSquare(75,375,150,'white',ctx);
      makeSquare(225,300,150,'Gainsboro',ctx);
      
    }, []);

    function makeSquare(xPos,yPos,side_length,color,ctx){
        ctx.fillStyle=color;
        ctx.fillRect(xPos,yPos,side_length,side_length);
        ctx.strokeRect(xPos,yPos,side_length,side_length);
    }

    return (
      <canvas ref={canvasRef} className="ASS2" width="600" height="600"></canvas>
    );
  }

export default Ass2;