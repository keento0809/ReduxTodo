import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./list-slice";
import selectedSlice from "./selectedTask-slice";

const store = configureStore({
  reducer: { list: listSlice.reducer, editTask: selectedSlice.reducer },
});

export default store;
