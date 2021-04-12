import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  state: "idle",
  contentState: "main",
  showTouch: false,
  showMenu: false,
  showTrophy: false,
  fishing: false,
  fishBite: false,
  fish: { name: "", size: "", text: "" },
  coordinate: {
    x: 0,
    y: 0,
  },
};

export const componentSlice = createSlice({
  name: "component",
  initialState,
  reducers: {
    setContentState: (state, action) => {
      state.contentState = action.payload;
    },
    setShowTouch: (state, action) => {
      state.showTouch = action.payload;
    },
    setShowMenu: (state, action) => {
      state.showMenu = action.payload;
    },
    setShowFishingTrophy: (state, action) => {
      console.log("DISPATCHED");
      state.showTrophy = action.payload;
    },
    setFishing: (state, action) => {
      state.fishing = action.payload;
    },
    setCoordinates: (state, action) => {
      state.coordinate = action.payload;
    },
    setFishBite: (state, action) => {
      state.fishBite = action.payload;
    },
    setFish: (state,action) => {
        state.fish = action.payload
    }
  },
});

export const {
  setFishBite,
  setContentState,
  setShowTouch,
  setShowMenu,
  setShowFish,
  setFish,
  setShowFishingTrophy,
  setFishing,
  setCoordinates,
} = componentSlice.actions;

export const selectContentState = (state) => state.component.contentState;
export const selectShowTouch = (state) => state.component.showTouch;
export const selectShowMenu = (state) => state.component.showMenu;
export const selectShowFishingTrophy = (state) => state.component.showTrophy;
export const selectFishing = (state) => state.component.fishing;
export const selectCoordinate = (state) => state.component.coordinate;
export const selectFishBite = (state) => state.component.fishBite;
export const selectFish = (state) => state.component.fish;
export default componentSlice.reducer;
