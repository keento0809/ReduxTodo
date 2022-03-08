import React from "react";
import { useSelector } from "react-redux";

const TaskList = () => {
  const tasks = useSelector((state) => state.list.tasks);
  const totalQuantityOfTasks = useSelector((state) => state.list.totalQuantity);

  const taskList = tasks.map((task) => {
    return (
      <li key={task.id}>
        <p>{task.taskText}</p>
        <p>{task.dueDate}</p>
        <p>{task.importance}</p>
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
