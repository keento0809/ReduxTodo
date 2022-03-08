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
    // editTask(state, action) {
    //   const editedTaskId = action.payload;
    //   const editedTask =
    // },
    removeTaskFromList(state, action) {
      state.totalQuantity--;
      const removeTaskId = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== removeTaskId);
    },
  },
});

export const listActions = listSlice.actions;

export default listSlice;
