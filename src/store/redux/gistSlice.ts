import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getGistForUser, getPublicGists } from "../../services/gistService";
import { contentsTypes } from "../../types/githubUserTypes";

let initialState: contentsTypes = {
  data: [],
  isLoading: false,
  error: "",
  errorLogs: false,
};
export const fetchContent = createAsyncThunk(
  "content/fetchContent",
  async (search: string) => {
    try {
      if (!!search) {
        return (await getGistForUser(search)).data;
      } else {
        return (await getPublicGists()).data;
      }
    } catch (error) {
      return "Something Went Wrong";
    }
  }
);

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContent.pending, (state) => {
      state.isLoading = true;
      state.errorLogs = false;
    });
    builder.addCase(fetchContent.fulfilled, (state, action) => {
      state.isLoading = false;
      if (typeof action.payload == "string") {
        state.errorLogs = true;
      } else {
        state.data = action.payload;
      }
    });
    builder.addCase(fetchContent.rejected, (state, action) => {
      state.isLoading = false;
      state.errorLogs = true;
    });
  },
});

export default contentSlice.reducer;
