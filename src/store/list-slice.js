import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "list",
  initialState: {
    tasks: [],
    totalQuantity: 0,
    selectedTask: null,
  },
  reducers: {
    addTaskToList(state, action) {
      console.log(state.tasks);
      state.totalQuantity++;
      const newTask = {
        id: action.payload.id,
        taskText: action.payload.taskText,
        dueDate: action.payload.dueDate,
        importance: action.payload.importance,
      };
      console.log(newTask);
      console.log(state.tasks);
      state.tasks.push(newTask);
    },
    editSelectedTask(state, action) {
      // I need a task as argument (action.payload).
      console.log(state.tasks);
      const chosenTask = state.tasks.filter(
        (task) => task.id === action.payload.id
      );
      state.selectedTask = chosenTask;
      console.log(state.selectedTask);
    },
    changeTaskText(state, action) {
      state.selectedTask = action.payload;
    },
    updateSelectedTask(state, action) {
      // I need a task as argument (action.payload).
      // const editingTaskId = action.payload.id;
      // const editingTask = state.tasks.filter(
      //   (task) => task.id === editingTaskId
      // );
      // editingTask.taskText = action.payload;
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
