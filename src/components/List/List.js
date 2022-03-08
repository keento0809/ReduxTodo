import React from "react";
import NewTask from "./NewTask/NewTask";
import TaskList from "./TaskList/TaskList";

const List = () => {
  return (
    <div>
      <NewTask />
      <TaskList />
    </div>
  );
};

export default List;
