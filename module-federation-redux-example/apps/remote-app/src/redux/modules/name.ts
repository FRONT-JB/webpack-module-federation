import { createSlice } from "@reduxjs/toolkit";

export const remoteAppScopeName = "@remote-app/name";

const initialState = {
  value: "remoteApp",
};

const { reducer, actions } = createSlice({
  name: remoteAppScopeName,
  initialState,
  reducers: {
    setName: (state, action) => {
      state.value = action.payload.name;
    },
  },
});

export const { setName } = actions;

export default reducer;
