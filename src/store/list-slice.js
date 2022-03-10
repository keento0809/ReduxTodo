import { createSlice, current } from "@reduxjs/toolkit";

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
    updateSelectedTask(state, action) {
      console.log(current(state.tasks));
      const updatingTaskId = action.payload.id;
      const updatingTask = state.tasks.find(
        (task) => task.id === updatingTaskId
      );
      updatingTask.taskText = action.payload.taskText;
      updatingTask.importance = action.payload.importance;
    },
    removeTaskFromList(state, action) {
      state.totalQuantity--;
      const removeTaskId = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== removeTaskId);
    },
  },
});

export const listActions = listSlice.actions;

export default listSlice;
