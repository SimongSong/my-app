import { useDispatch, useSelector } from "react-redux";
import {
  selectFish,
  selectShowFishingTrophy,
  setShowFishingTrophy,
} from "../../componentSlice";
import "./style.scss";
import DI from "../../../images/fishing.png";
import Icon1 from "../../../images/carp.png";
import Icon2 from "../../../images/bluegill.png";
import Icon3 from "../../../images/minnow.png";
import Icon4 from "../../../images/crayfish.png";
import Icon5 from "../../../images/slider.png";
import Icon6 from "../../../images/tadpole.png";
import Icon7 from "../../../images/neontetra.png";
import Icon8 from "../../../images/cat.png";
import Icon9 from "../../../images/perch.png";
import Icon10 from "../../../images/snakehead.png";
import Icon11 from "../../../images/oscar.png";
import { useEffect, useState } from "react";

function FishingTrophy() {
  const dispatch = useDispatch();
  const showMenu = useSelector(selectShowFishingTrophy);
  const fish = useSelector(selectFish);
  const [icon, setIcon] = useState(DI);
  useEffect(() => {
    var temp;
    console.log(fish);
    switch (fish.id) {
      case 1:
        temp = Icon1;
        break;
      case 2:
        temp = Icon2;
        break;
      case 3:
        temp = Icon3;
        break;
      case 4:
        temp = Icon4;
        break;
      case 5:
        temp = Icon5;
        break;
      case 6:
        temp = Icon6;
        break;
      case 7:
        temp = Icon7;
        break;
      case 8:
        temp = Icon8;
        break;
      case 9:
        temp = Icon9;
        break;
      case 10:
        temp = Icon10;
        break;
      case 11:
        temp = Icon11;
        break;
      default:
        temp = DI;
        break;
    }
    setIcon(temp);

    return () => {};
  }, [fish]);

  return (
    <div
      id="FishingTrophy"
      className={showMenu ? "Show" : ""}
      onClick={() => dispatch(setShowFishingTrophy(false))}
    >
      {fish.id !== 0 && (
        <div>
          <img className="FishImage" src={icon}></img>
          <b></b>Nice! You caught<br></br> <b>{fish.name}</b>
          <br></br>
          It is {Math.round(fish.size * 100) / 100}cm long!
        </div>
      )}
      {fish.id === 0 && (
        <div className="Oops">
            <b>
          Oops...<br></br> Better luck next time!
        </b>
        </div>
      )}
    </div>
  );
}

export default FishingTrophy;
