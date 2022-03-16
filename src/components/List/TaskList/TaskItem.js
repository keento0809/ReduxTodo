import React from "react";
import Box from "@mui/material/Box";
import PaperUI from "../../UI/PaperUI";

const TaskItem = (props) => {
  return (
    <PaperUI key={props.id}>
      <li key={props.index} id={props.id}>
        <p color="secondary">{props.taskText}</p>
        <p color="secondary">{props.dueDate}</p>
        <p color="secondary">{props.importance}</p>
        <button onClick={props.onStartEditing}>Edit</button>
        <button onClick={props.onRemoveItem}>Remove</button>
      </li>
    </PaperUI>
  );
};

export default TaskItem;
