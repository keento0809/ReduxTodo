import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "list",
  initialState: {
    tasks: [],
    totalQuantity: 0,
    // selectedTask: null,
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
      console.log(newTask);
      console.log(state.tasks);
      state.tasks.push(newTask);
    },
    editSelectedTask(state, action) {
      console.log("Fixing!!");
      // state.selectedTask = null;
      // console.log(state.selectedTask);
      // const chosenTask = state.tasks.filter(
      //   (task) => task.id === action.payload
      // );
      // console.log(chosenTask);
      // state.selectedTask = chosenTask;
      // console.log(state.selectedTask[0].taskText);
    },
    updateSelectedTask(state, action) {
      console.log(state.tasks);
      console.log(state.tasks[action.payload.index]);
      // state.tasks[action.payload.id].taskText = action.payload.taskText;
      // state.tasks[action.payload.id].importance = action.payload.importance;
      // const updatingTask = state.tasks.filter((task) => task.id )
      // state.tasks[action.payload.id] =
      // const updatedTaskId = action.payload.id;
      // console.log(action.payload);
      // let updatingTask = state.tasks.filter(
      //   (task) => task.id === updatedTaskId
      // );
      // const remainingTask = state.tasks.filter(
      //   (task) => task.id !== updatedTaskId
      // );
      // state.tasks = remainingTask;
      // updatingTask = action.payload;
      // state.tasks.push(updatingTask);
      // test
      // state.selectedTask = null;
      // console.log(state.selectedTask);
      // state.tasks.replace(originalUpdatingTask, updatingTask);
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
