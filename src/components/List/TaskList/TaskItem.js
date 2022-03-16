import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PaperUI from "../../UI/PaperUI";

const TaskItem = (props) => {
  return (
    <PaperUI key={props.id}>
      <li key={props.index} id={props.id}>
        <Typography variant="h5" component="p" color="text.primary">
          {props.taskText}
        </Typography>
        <Typography variant="body2" component="p" color="text.primary">
          {props.dueDate}
        </Typography>
        <Typography variant="body2" component="p" color="text.primary">
          {props.importance}
        </Typography>
        <button onClick={props.onStartEditing}>Edit</button>
        <button onClick={props.onRemoveItem}>Remove</button>
      </li>
    </PaperUI>
  );
};

export default TaskItem;
