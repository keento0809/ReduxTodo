import React from "react";
import TaskForm from "./TaskForm";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ContainerUI from "../../UI/ContainerUI";

const NewTask = () => {
  return (
    <ContainerUI>
      <Box
        sx={{ borderRadius: "12px", background: "background.paper" }}
        paddingTop={4}
        paddingBottom={4}
        marginLeft="auto"
        marginRight="auto"
        marginTop={4}
        marginBottom={4}
        textAlign={"center"}
        className="新しいタスクを入力"
        minWidth={300}
        maxWidth={402}
        bgcolor="background.white"
      >
        <Typography variant="h5" component="h2" color="text.primary">
          Add New Task
        </Typography>
        <TaskForm />
      </Box>
    </ContainerUI>
  );
};

export default NewTask;
