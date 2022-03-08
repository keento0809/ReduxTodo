import React from "react";
import NewTask from "./NewTask/NewTask";
import TaskList from "./TaskList/TaskList";

const List = (props) => {
  return (
    <div>
      <NewTask />
      <TaskList onOpen={props.onOpen} />
    </div>
  );
};

export default List;
