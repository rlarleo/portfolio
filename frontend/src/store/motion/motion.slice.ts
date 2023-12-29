import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface Motion {
  showMotion: boolean;
}

const initialState: Motion = {
  showMotion: true,
};

export const motionSlice = createSlice({
  name: "motion",
  initialState,
  reducers: {
    setMotionState(state, action) {
      console.log(action);
      state.showMotion = action.payload;
    },
  },
});

export const { setMotionState } = motionSlice.actions;

export const selectMotionState = (state: RootState) => state.motion;

export const { reducer: motionReducer } = motionSlice;
