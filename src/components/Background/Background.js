import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCoordinate,
  selectFishBite,
  selectFishing,
  setFishBite,
} from "../componentSlice";
import "./style.scss";
function Background() {
  const coord = useSelector(selectCoordinate);
  const fishing = useSelector(selectFishing);
  const fishBite = useSelector(selectFishBite);
  const dispatch = useDispatch();
  const [dotCoord, setDotCoord] = useState({ x: -10, y: -10 });
  useEffect(() => {
    let animationFrameID;
    if (fishing) {
      let fishBiteCounter = 0;
      setDotCoord(coord);
      let frameCount = 0;
      function render() {
        animationFrameID = window.requestAnimationFrame(render);
        frameCount += 0.01;
        if (!fishBite) {
          let rand = Math.floor(Math.random() * 130);
          if (rand === 22) dispatch(setFishBite(true));
        } else {
          fishBiteCounter++;
          if (fishBiteCounter >= Math.floor(Math.random() * 500) + 10) {
            dispatch(setFishBite(false));
            fishBiteCounter = 0;
          }
        }
        setDotCoord({
          x: coord.x,
          y:
            coord.y +
            Math.sin(frameCount * (fishBite ? 50 : 5)) * (fishBite ? 10 : 10),
        });
      }
      render();
    } else {
      setDotCoord({ x: -10, y: -10 });
    }

    // console.log(dot);
    return () => {
      if (animationFrameID) window.cancelAnimationFrame(animationFrameID);
    };
  }, [fishing, fishBite]);

  //   setWaveSine()

  return (
    <div id="Background">
      <svg>
        <line x1={dotCoord.x} y1="0" x2={dotCoord.x} y2="100%" />
        {/* <line x1={dotCoord.x} y1={dotCoord.y} x2={dotCoord.x} y2="100%" /> */}
        <rect
          x={dotCoord.x - 2.5}
          y={dotCoord.y + 5}
          width="5"
          height="10"
          fill="red"
        />
        <rect
          x={dotCoord.x - 2.5}
          y={dotCoord.y - 15}
          width="5"
          height="10"
          fill="white"
        />
        <circle
          className="Dot"
          cx={dotCoord.x}
          cy={dotCoord.y}
          r="10"
          fill="white"
        />
        <path
          d={`M${dotCoord.x - 10},${dotCoord.y} a1,1 0 0,0 20,0`}
          fill="red"
        />
      </svg>
    </div>
  );
}

export default Background;
