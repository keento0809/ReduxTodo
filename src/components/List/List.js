import React from "react";
import NewTask from "./NewTask/NewTask";
import TaskList from "./TaskList/TaskList";

import Box from "@mui/system/Box";

const List = (props) => {
  return (
    <Box>
      <NewTask />
      <TaskList onOpen={props.onOpen} />
    </Box>
  );
};

export default List;
