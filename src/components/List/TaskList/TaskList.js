import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { listActions } from "../../../store/list-slice";

const TaskList = (props) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.list.tasks);
  const totalQuantityOfTasks = useSelector((state) => state.list.totalQuantity);

  const openModalHandler = () => {
    console.log("Modal is opening...!");
  };
  // const editTaskHandler = (id) => {
  //   dispatch(listActions.editTask(id));
  // };
  const removeItemHandler = (id) => {
    dispatch(listActions.removeTaskFromList(id));
  };

  const taskList = tasks.map((task) => {
    return (
      <li key={task.id}>
        <p>{task.taskText}</p>
        <p>{task.dueDate}</p>
        <p>{task.importance}</p>
        <button onClick={props.onOpen}>Edit</button>
        <button onClick={removeItemHandler.bind(null, task.id)}>Remove</button>
      </li>
    );
  });

  return (
    <div>
      <h2>Task List</h2>
      <p>{totalQuantityOfTasks} tasks left.</p>
      <ul>{taskList}</ul>
    </div>
  );
};

export default TaskList;
