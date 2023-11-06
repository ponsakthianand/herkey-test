import { configureStore } from "@reduxjs/toolkit";
import userDataSlicer from "./userDataSlicer";

export const store = configureStore({
  reducer: {
    userPersonalData: userDataSlicer
  }
});