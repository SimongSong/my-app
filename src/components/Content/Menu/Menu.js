import { useDispatch, useSelector } from "react-redux";
import {
  selectFishing,
  selectShowMenu,
  setShowMenu,
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
function Menu() {
  const dispatch = useDispatch();
  const fishing = useSelector(selectFishing);
  const showMenu = useSelector(selectShowMenu);
  const [fishList, setFishList] = useState([]);
  function getFishIcon(id) {
    var temp;
    switch (id) {
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
    return temp
  }
  useEffect(() => {
    var lc = localStorage.getItem("fish_simong_list");
    if (lc === null) lc = [];
    else {
      try {
        lc = JSON.parse(lc);
        console.log("PARSED");
        if (!Array.isArray(lc)) lc = [];
        for (var i = 0; i < lc.length; i++) {
          if ("size" in lc[i] && "id" in lc[i]) continue;
          else {
            lc = [];
            break;
          }
        }
      } catch (e) {
        lc = [];
      }
    }

    setFishList(lc);
  }, [fishing]);
  return (
    <div id="Menu" className={showMenu ? "Show" : ""}>
      <div className="CloseButton" onClick={() => dispatch(setShowMenu(false))}>
        Close
      </div>
      <div className="FishTanks">
        <h2>Best Records</h2>
        <div className="Wrapper">
        {fishList.map((f) => (
          <div className="Fish" key={`${f.id}-fishrow`}>
            <span>
              <img src={getFishIcon(f.id)} alt=""></img>
            </span>
            <span className="Image"> {Math.round(f.size * 100) / 100}cm</span>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
