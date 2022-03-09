import { createSlice } from "@reduxjs/toolkit";

const selectedSlice = createSlice({
  name: "selectedTask",
  initialState: {
    selectedTask: [],
  },
  reducers: {
    putSelectedTask(state, action) {
      state.selectedTask = {
        id: action.payload.id,
        taskText: action.payload.taskText,
        dueDate: action.payload.dueDate,
        importance: action.payload.importance,
      };
    },
  },
});

export const selectedTaskActions = selectedSlice.actions;

export default selectedSlice;
