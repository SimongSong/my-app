import MainTitle from "./MainTitle";
import "./style.scss";
import { selectContentState, selectShowTouch } from "../componentSlice";
import { useSelector } from "react-redux";
import HowToPlay from "./HowToPlay";
import AboutMe from "./AboutMe";
import FishingMenu from "./Fishing/FishingMenu";
import TouchScreen from "./Fishing/TouchScreen";
import Menu from "./Menu/Menu";
import FishingTrophy from "./Menu/FishingTrophy";
function Content() {
  const contentState = useSelector(selectContentState);
  const showTouch = useSelector(selectShowTouch)
function showTouchScreen(){
    if(!showTouch){
        return getComponent();
    }
    else return <TouchScreen></TouchScreen>
}

  function getComponent() {
    var comp;
    switch (contentState) {
      case "tutorial":
        comp = <HowToPlay></HowToPlay>;
        break;
      case "about":
        comp = <AboutMe></AboutMe>;
        break;
      case "main":
      default:
        comp = <MainTitle></MainTitle>;
        break;
    }
    return comp;
  }

  return (
    <div id="Content">
        {showTouchScreen()}
        <FishingMenu></FishingMenu>
        <Menu></Menu>
        <FishingTrophy></FishingTrophy>
    </div>
  );
}

export default Content;
