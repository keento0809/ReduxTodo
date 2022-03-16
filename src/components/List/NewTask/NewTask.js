import React from "react";
import TaskForm from "./TaskForm";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const NewTask = () => {
  return (
    <Box
      sx={{ bgcolor: "background.default" }}
      paddingTop={4}
      paddingBottom={4}
      textAlign={"center"}
    >
      <Typography variant="h5" component="h2" color="white">
        Add New Task
      </Typography>
      <TaskForm />
    </Box>
  );
};

export default NewTask;
