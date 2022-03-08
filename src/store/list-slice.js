import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "list",
  initialState: {
    tasks: [],
    totalQuantity: 0,
  },
  reducers: {
    addTaskToList(state, action) {
      state.totalQuantity++;
    },
    // updateTask(state,action) {

    // },
    removeTaskFromList(state, action) {
      state.totalQuantity--;
    },
  },
});

export default listSlice;
