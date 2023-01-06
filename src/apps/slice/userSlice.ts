import { dataUser } from "./../../config/dataUser";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataUser,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // addNewList: (state, actions) => {
    //     console.log("payload", actions.payload);
    //     console.log("dataTodo", dataTodo);
    //     console.log("state", state);
    //     return {
    //       ...state,
    //       dataTodo: dataTodo,
    //     };
    //   },
    
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
