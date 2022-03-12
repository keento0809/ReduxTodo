import React from "react";
import TaskForm from "./TaskForm";

import Typography from "@mui/material/Typography";

const NewTask = () => {
  return (
    <div>
      <Typography variant="h5" component="h2">
        Add New Task
      </Typography>
      <TaskForm />
    </div>
  );
};

export default NewTask;
