import { useDispatch } from "react-redux";
import { setContentState } from "../componentSlice";
import DIcon from "../../images/fishing.png";
import CIcon from "../../images/camera.png";
function HowToPlay() {
  const dispatch = useDispatch();
  return (
    <div id="HowToPlay">
      <div
        className="BackButton"
        onClick={() => dispatch(setContentState("main"))}
      >
        BACK
      </div>
      <div className="Info">
        Ok! So Let's Catch some fish!<br></br>
        First click PLAY BUTTON on Bottom Left Corner.
        <br></br>
        You see Two Icons
        <br></br>
        <img className="IconSample" src={DIcon} alt=""></img>
        This is Fishing Buton. Click this to Fish!<br></br>
        <img className="IconSample" src={CIcon} alt=""></img>
        This is Record Button. Click this to see the biggest fish you caught!
        <br></br>
        <br></br>
        <svg>
          <rect x={50} y={80} width="20" height="40" fill="red" />
          <rect x={50} y={0} width="20" height="40" fill="white" />
          <circle className="Dot" cx={60} cy={60} r="40" fill="white" />
          <path d={`M${20},${60} a1,1 0 0,0 80,0`} fill="red" />
        </svg>
        Drop the Floater by clicking on the screen after pressing Fishing Button. Then once Floater moves
        vigorously, reel in the hook by pressing the small Floater screen on Bottom
        Left Corner.
      </div>
    </div>
  );
}

export default HowToPlay;
