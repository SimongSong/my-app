import { useDispatch } from "react-redux";
import { setContentState } from "../componentSlice";
import MainImage from "../../images/main.png";
function MainTitle() {
  const dispatch = useDispatch();
  return (
    <div id="MainTitle">

      <div className="Wrapper">
        <img
          className="MainImage"
          src={MainImage}
          alt=""
        ></img>
        <span className="Text">
          <span className="Title">Hello</span>
          <span className="Korean">(안녕)</span>!<br></br>
          My name is
          <span className="Emphasis"> SIMONG SONG</span>
          <span className="Korean">(송시몽)</span>
          <br></br>I am a <span className="Emphasis">SOFTWARE DEVELOPER</span>
          <br></br>
          <br></br>I made this website to talk about my experience/ play cool
          fishing game
          <span className="Button">
            <span onClick={() => dispatch(setContentState("about"))}>
              To learn more about me click here
            </span>
          </span>
          <span className="Button">
            <span onClick={() => dispatch(setContentState("tutorial"))}>
              To learn how to play the game click here
            </span>
          </span>
        </span>
      </div>
    </div>
  );
}

export default MainTitle;
