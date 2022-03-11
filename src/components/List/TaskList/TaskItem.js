import React from "react";

const TaskItem = (props) => {
  return (
    <li key={props.index} id={props.id}>
      <p>{props.taskText}</p>
      <p>{props.dueDate}</p>
      <p>{props.importance}</p>
    </li>
  );
};

export default TaskItem;
