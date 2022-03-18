import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PaperUI from "../../UI/PaperUI";
import TaskButton from "../../UI/TaskButtonUI";
import { styled } from "@mui/system";

const LiComponent = styled("li")({
  marginTop: "1rem",
  marginBottom: "1rem",
  overflowWrap: "wrap",
});

const TaskItem = (props) => {
  return (
    <PaperUI key={props.id}>
      <LiComponent key={props.index} id={props.id}>
        <Typography
          variant="h5"
          component="p"
          color="text.primary"
          paddingBottom={2}
        >
          {props.taskText}
        </Typography>
        <Typography variant="body2" component="p" color="text.primary">
          {props.dueDate}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          color="text.primary"
          paddingBottom={1}
        >
          {props.importance}
        </Typography>
        <TaskButton onClick={props.onStartEditing} name="Edit"></TaskButton>
        <TaskButton onClick={props.onRemoveItem} name="Done"></TaskButton>
      </LiComponent>
    </PaperUI>
  );
};

export default TaskItem;
