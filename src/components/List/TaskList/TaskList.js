import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { listActions } from "../../../store/list-slice";

const TaskList = (props) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.list.tasks);
  const totalQuantityOfTasks = useSelector((state) => state.list.totalQuantity);

  const startEditingHandler = (task) => {
    console.log("Modal is opening...!");
    // dispatch(selectedTaskActions.putSelectedTask(task));
    console.log(task);
    dispatch(listActions.editSelectedTask(task));
    props.onOpen();
  };

  const removeItemHandler = (id) => {
    dispatch(listActions.removeTaskFromList(id));
  };

  const taskList = tasks.map((task) => {
    return (
      <li key={task.id}>
        <p>{task.taskText}</p>
        <p>{task.dueDate}</p>
        <p>{task.importance}</p>
        <button
          onClick={startEditingHandler.bind(null, {
            id: task.id,
            taskText: task.taskText,
            dueDate: task.dueDate,
            importance: task.importance,
          })}
        >
          Edit
        </button>
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
