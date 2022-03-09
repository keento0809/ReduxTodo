import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listActions } from "../../../store/list-slice";

const TaskList = (props) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.list.tasks);
  const selectedTask = useSelector((state) => state.list.selectedTask);
  const totalQuantityOfTasks = useSelector((state) => state.list.totalQuantity);

  const [allTask, setAllTask] = useState(tasks);

  const startEditingHandler = (id) => {
    // Original code
    // dispatch(listActions.editSelectedTask(task));
    console.log("How about the second time...??");
    dispatch(listActions.editSelectedTask(id));
    props.onOpen();
  };

  const removeItemHandler = (id) => {
    dispatch(listActions.removeTaskFromList(id));
  };

  useEffect(() => {
    // console.log(tasks);
    setAllTask(
      tasks.map((task) => {
        return (
          <li key={task.id}>
            <p>{task.taskText}</p>
            <p>{task.dueDate}</p>
            <p>{task.importance}</p>
            <button onClick={startEditingHandler.bind(null, task.id)}>
              Edit
            </button>
            <button onClick={removeItemHandler.bind(null, task.id)}>
              Remove
            </button>
          </li>
        );
      })
    );
  }, [tasks]);
  const taskList = tasks.map((task) => {
    return (
      <li key={task.id}>
        <p>{task.taskText}</p>
        <p>{task.dueDate}</p>
        <p>{task.importance}</p>
        <button
          // Original code
          // onClick={startEditingHandler.bind(null, {
          //   id: task.id,
          //   taskText: task.taskText,
          //   dueDate: task.dueDate,
          //   importance: task.importance,
          // })}
          onClick={startEditingHandler.bind(null, task.id)}
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
      <ul>{allTask}</ul>
    </div>
  );
};

export default TaskList;
