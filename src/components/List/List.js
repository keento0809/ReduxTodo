import React from "react";
import NewTask from "./NewTask/NewTask";
import TaskList from "./TaskList/TaskList";

import Box from "@mui/system/Box";
import ContainerUI from "../UI/ContainerUI";

const List = (props) => {
  return (
    <Box className="これはlistのbox">
      <ContainerUI className="これはListのContainerUI">
        <NewTask />
        <TaskList onOpen={props.onOpen} />
      </ContainerUI>
    </Box>
  );
};

export default List;
