import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectFishBite, selectFishing } from "../../componentSlice";

function Floater() {
  const [dotCoord, setDotCoord] = useState(0);
  const fishing = useSelector(selectFishing);
  const fishBite = useSelector(selectFishBite);
  useEffect(() => {
    let animationFrameID;
    setDotCoord(0);
    if (fishing) {
      let frameCount = 0;
      function render() {
        animationFrameID = window.requestAnimationFrame(render);
        frameCount += 0.01;
        setDotCoord(
          Math.sin(frameCount * (fishBite ? 50 : 5)) * (fishBite ? 10 : 10)
        );
      }
      render();
    }
    return () => {
      if (animationFrameID) window.cancelAnimationFrame(animationFrameID);
    };
  }, [fishing, fishBite]);
  return (
    <div id="Floater">
      <div>CLICK ME!</div>
      <svg>
        <line x1={60} y1="0" x2={60} y2="100%" />
        <rect x={50} y={140 + dotCoord} width="20" height="40" fill="red" />
        <rect x={50} y={60 + dotCoord} width="20" height="40" fill="white" />
        <circle className="Dot" cx={60} cy={120 + dotCoord} r="40" fill="white" />
        <path d={`M${20},${120 + dotCoord} a1,1 0 0,0 80,0`} fill="red" />
      </svg>
    </div>
  );
}

export default Floater;
