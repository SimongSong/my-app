import { useDispatch, useSelector } from "react-redux";
import {
  setShowTouch,
  setShowMenu,
  selectShowTouch,
  selectShowMenu,
  selectFishing,
  setFishing,
  selectFishBite,
  setShowFishingTrophy,
  selectShowFishingTrophy,
  setFishBite,
  setFish,
} from "../../componentSlice";
import Fish from "../../Fish";
import FishingIcon from "../../../images/fishing.png";
import CameraIcon from "../../../images/camera.png";
import "./style.scss";
import { useState } from "react";
import Floater from "./Floater";
function FishingMenu() {
  const fishList = Fish;
  const showTouch = useSelector(selectShowTouch);
  const showMenu = useSelector(selectShowMenu);
  const showTrophy = useSelector(selectShowFishingTrophy);
  const fishing = useSelector(selectFishing);
  const fishBite = useSelector(selectFishBite);
  const [closed, setClosed] = useState(true);
  const dispatch = useDispatch();
  function renderMenu() {
    if (showTouch) {
      return (
        <div
          className="MenuButton Cancel"
          onClick={() => dispatch(setShowTouch(false))}
        >
          Cancel
        </div>
      );
    } else if (fishing) {
      return (
        <div
          onClick={() => {
            if (fishBite) {
              console.log("CAUGHT!");
              var rand = Math.floor(Math.random() * 100);
              var fish;
              console.log(rand);
              if (rand > 0 && rand < 60) {
                fish =
                  fishList.common[
                    Math.floor(Math.random() * fishList.common.length)
                  ];
              } else {
                fish =
                  fishList.rare[
                    Math.floor(Math.random() * fishList.rare.length)
                  ];
              } 
              var size =
                Math.random() * (fish.maxSize - fish.minSize) + fish.minSize;
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
              var found = false;
              for (var i = 0; i < lc.length; i++) {
                if (lc[i].id === fish.id) {
                  found = true;
                  lc[i].size = Math.max(size, lc[i].size);
                  break;
                }
              }
              if (!found) {
                lc.push({ id: fish.id, size: size });
              }

              console.log(lc);
              localStorage.setItem("fish_simong_list", JSON.stringify(lc));
              console.log(fish);
              dispatch(
                setFish({
                  name: fish.name,
                  size: size,
                  id: fish.id,
                })
              );
            }else {
              dispatch(
                setFish({
                  name: "",
                  size: 0,
                  id: 0,
                })
              );
            }
            dispatch(setShowFishingTrophy(true));
            dispatch(setFishBite(false));
            dispatch(setShowMenu(false));
            dispatch(setFishing(false));
          }}
        >
          <Floater></Floater>
        </div>
      );
    } else {
      return (
        <div>
          <div
            className="FishButton"
            onClick={() => {
              dispatch(setShowTouch(true));
              dispatch(setShowMenu(false));
              dispatch(setFishBite(false));
              dispatch(setShowFishingTrophy(false));
            }}
          >
            <img className="FishingIcon" src={FishingIcon} alt=""></img>
            Fishing
          </div>
          <div
            className="FishButton"
            onClick={() => {
              dispatch(setShowMenu(!showMenu));
              if (showTrophy) dispatch(setShowFishingTrophy(false));
            }}
          >
            <img className="FishingIcon" src={CameraIcon} alt=""></img>
            Record
          </div>
        </div>
      );
    }
  }
  return (
    <div
      id="FishingMenu"
      className={closed ? "Closed" : showTouch ? "Touch" : "Open"}
    >
      {!closed && (
        <div className="Expanded">
          {renderMenu()}
          {!fishing && (
            <div className="MenuButton Close" onClick={() => setClosed(true)}>
              Close
            </div>
          )}
        </div>
      )}
      {closed && (
        <div className="MenuButton" onClick={() => setClosed(false)}>
          PLAY
        </div>
      )}
    </div>
  );
}

export default FishingMenu;
