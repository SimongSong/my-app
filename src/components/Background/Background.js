import { useEffect, useState } from "react";
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

  // function Waves() {
  //   var waves = [];
  //   var colours = ["#003d60", "#008ab7", "#009eb5"];
  //   var counter = 0;

  //   for (var i = -30; i < 65; i = i + 5) {
  //     waves.push(WAVE(i, Math.random() * 10 + 5, colours[counter]));
  //     if (++counter >= colours.length) counter = 0;
  //   }
  //   return waves;
  // }

  return (
    <div id="Background">
      <svg
        className="Wave"
        // viewBox="0 0 1320 660"
        // preserveAspectRatio="xMinYMin"
      >
        <defs>
          <pattern id="P1" x="0" y="0" width="0.5" height="1">
            <path
              d="m0 323v337h660v-337c-13.32 0-28.12-2.05-37.94-12.04-4.33-4.4-8.1-11.83-4.88-17.94 4.35-8.27 9.63-0.95 9.82 4.98 9.42-2.68 8.26-13.64 2.53-19.7-6.71-7.1-17.15-9.22-26.53-7.87-25.26 3.63-39.25 23.99-59 37.35-15.99 10.82-36.93 15.44-56 15.22-12.16-0.15-47.69-12.94-35.26-30.94 5.37-7.77 9.19 1.59 8.26 6.94 9.64-3.29 10.06-13.8 3.53-20.7-6.43-6.8-16.47-9.13-25.53-8.01-25.24 3.1-39.64 23.15-59 36.8-15.4 10.85-36.32 16.13-55 15.91-13.67-0.17-43.78-8.71-38.57-28 2.67-9.85 10.32-4.63 10.57 3 9.42-2.68 8.26-13.64 2.53-19.7-6.71-7.1-17.15-9.22-26.53-7.87-25.26 3.63-39.25 23.99-59 37.35-15.99 10.82-36.93 15.44-56 15.22-12.16-0.15-47.69-12.94-35.26-30.94 5.37-7.77 9.19 1.59 8.26 6.94 10.9-3.72 9.47-15.72 1.83-22.32-8.22-7.09-19.7-7.73-29.83-5.34-22.156 5.21-35.345 23.3-53 35.75-14.044 9.9-32.947 15.18-50 15.91z"
              fill="#132929"
            />
          </pattern>
        </defs>

        <defs>
          <pattern
            id="star"
            width="1500"
            height="200px"
            patternUnits="userSpaceOnUse"
          >
            <animateTransform
              attributeType="xml"
              attributeName="patternTransform"
              type="translateY"
              from="0"
              to="1500"
              begin="0"
              dur={`60s`}
              repeatCount="indefinite"
            />
            <path
              className="One"
              fill="none"
              // stroke="red"
              stroke="#152238"
              stroke-width="66"
              d="m-115,50q38-30 75,0t75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0"
            />
            <rect y="50" fill="#152238" height="100" width="1500"></rect>
            <path
              y="10"
              className="Two"
              transform="translate(50,100)"
              fill="none"
              stroke="#1c2e4a"
              strokeWidth="66"
              d="m-115,50q38-30 75,0t75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0"
            />
            <rect y="150" fill="#1c2e4a" height="100" width="1500"></rect>
            {/* 
<path
      d="m0 323v337h660v-337c-13.32 0-28.12-2.05-37.94-12.04-4.33-4.4-8.1-11.83-4.88-17.94 4.35-8.27 9.63-0.95 9.82 4.98 9.42-2.68 8.26-13.64 2.53-19.7-6.71-7.1-17.15-9.22-26.53-7.87-25.26 3.63-39.25 23.99-59 37.35-15.99 10.82-36.93 15.44-56 15.22-12.16-0.15-47.69-12.94-35.26-30.94 5.37-7.77 9.19 1.59 8.26 6.94 9.64-3.29 10.06-13.8 3.53-20.7-6.43-6.8-16.47-9.13-25.53-8.01-25.24 3.1-39.64 23.15-59 36.8-15.4 10.85-36.32 16.13-55 15.91-13.67-0.17-43.78-8.71-38.57-28 2.67-9.85 10.32-4.63 10.57 3 9.42-2.68 8.26-13.64 2.53-19.7-6.71-7.1-17.15-9.22-26.53-7.87-25.26 3.63-39.25 23.99-59 37.35-15.99 10.82-36.93 15.44-56 15.22-12.16-0.15-47.69-12.94-35.26-30.94 5.37-7.77 9.19 1.59 8.26 6.94 10.9-3.72 9.47-15.72 1.83-22.32-8.22-7.09-19.7-7.73-29.83-5.34-22.156 5.21-35.345 23.3-53 35.75-14.044 9.9-32.947 15.18-50 15.91z"
      fill="#132929"
  /> */}
          </pattern>
        </defs>
        {/* <path
              d="m0 323v337h660v-337c-13.32 0-28.12-2.05-37.94-12.04-4.33-4.4-8.1-11.83-4.88-17.94 4.35-8.27 9.63-0.95 9.82 4.98 9.42-2.68 8.26-13.64 2.53-19.7-6.71-7.1-17.15-9.22-26.53-7.87-25.26 3.63-39.25 23.99-59 37.35-15.99 10.82-36.93 15.44-56 15.22-12.16-0.15-47.69-12.94-35.26-30.94 5.37-7.77 9.19 1.59 8.26 6.94 9.64-3.29 10.06-13.8 3.53-20.7-6.43-6.8-16.47-9.13-25.53-8.01-25.24 3.1-39.64 23.15-59 36.8-15.4 10.85-36.32 16.13-55 15.91-13.67-0.17-43.78-8.71-38.57-28 2.67-9.85 10.32-4.63 10.57 3 9.42-2.68 8.26-13.64 2.53-19.7-6.71-7.1-17.15-9.22-26.53-7.87-25.26 3.63-39.25 23.99-59 37.35-15.99 10.82-36.93 15.44-56 15.22-12.16-0.15-47.69-12.94-35.26-30.94 5.37-7.77 9.19 1.59 8.26 6.94 10.9-3.72 9.47-15.72 1.83-22.32-8.22-7.09-19.7-7.73-29.83-5.34-22.156 5.21-35.345 23.3-53 35.75-14.044 9.9-32.947 15.18-50 15.91z"
              fill="#132929"
            /> */}
        {/* <rect fill={`red`} y="0" width="1320" height="660" /> */}
        <rect fill={`url(#star)`} y="0" width="100%" height="100%" />
        {/* <rect fill={`blue`} y="20%" width="100%" height="20%" />
        <rect fill={`url(#star)`} y="0" width="100%" height="20%" /> */}

        <line x1={dotCoord.x} y1="0" x2={dotCoord.x} y2={dotCoord.y} />
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

// const WAVE = (offset, time, colour) => (
//   <svg
//     class={`Wave ${offset}`}
//     style={{ top: `${offset}%` }}
//     viewBox="0 0 1000 150"
//     preserveAspectRatio="none"
//   >
//     <defs>
//       <pattern id={`Pattern${offset}`} x="0" y="0" width=".2" height="1">
//         <polygon points="100,0 0,50 200,50" fill={`${colour}`}  />
//         <rect x="0" y="50" width="200" height="100" fill={`${colour}`}  ></rect>
//         <animateTransform
//           attributeType="xml"
//           attributeName="patternTransform"
//           type="translate"
//           from="0"
//           to="1000"
//           begin="0"
//           dur={`${time}s`}
//           repeatCount="indefinite"
//         />
//       </pattern>
//     </defs>

//     <rect fill={`url(#Pattern${offset})`} y="0" width="1000" height="150" />
//   </svg>
// );

export default Background;
