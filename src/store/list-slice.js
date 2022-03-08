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
      const newTask = {
        id: action.payload.id,
        taskText: action.payload.taskText,
        dueDate: action.payload.dueDate,
        importance: action.payload.importance,
      };
      state.tasks.push(newTask);
    },
    // updateTask(state,action) {
    //
    // },
    removeTaskFromList(state, action) {
      state.totalQuantity--;
    },
  },
});

export const listActions = listSlice.actions;

export default listSlice;
