import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { listActions } from "../../../store/list-slice";

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.list.tasks);
  const totalQuantityOfTasks = useSelector((state) => state.list.totalQuantity);

  const removeItemHandler = (id) => {
    dispatch(listActions.removeTaskFromList(id));
  };

  const taskList = tasks.map((task) => {
    return (
      <li key={task.id}>
        <p>{task.taskText}</p>
        <p>{task.dueDate}</p>
        <p>{task.importance}</p>
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
