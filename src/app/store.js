import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import reducer from "../components/componentSlice" 
export const store = configureStore({
  reducer: {
    component: reducer
  },
});
