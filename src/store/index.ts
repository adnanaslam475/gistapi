import { configureStore } from "@reduxjs/toolkit";
import { contentSlice } from "./redux/gistSlice";
import { contentsTypes } from "../types/githubUserTypes";

export const store = configureStore({
  reducer: {
    content: contentSlice.reducer,
  },
});

export interface IRootState {
  content: contentsTypes;
}
