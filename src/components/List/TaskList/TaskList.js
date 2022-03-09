import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listActions } from "../../../store/list-slice";

import EditTask from "../EditTask/EditTask";

const TaskList = (props) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.list.tasks);
  const selectedTask = useSelector((state) => state.list.selectedTask);
  const totalQuantityOfTasks = useSelector((state) => state.list.totalQuantity);

  const [allTask, setAllTask] = useState(tasks);
  const [editTaskIndex, setEditTaskIndex] = useState(null);
  const [modalDefaultTaskText, setModalDefaultTaskText] = useState("");
  const [modalDefaultImportance, setModalDefaultImportance] = useState("");

  const [isModalShown, setIsModalShown] = useState(false);

  const openModalHandler = () => {
    setIsModalShown(true);
  };

  const closeModalHandler = () => {
    setIsModalShown(false);
  };

  const startEditingHandler = (taskText, index, importance) => {
    // Original code
    // dispatch(listActions.editSelectedTask(task));
    setEditTaskIndex(index);
    setModalDefaultTaskText(taskText);
    setModalDefaultImportance(importance);
    console.log(index);
    openModalHandler();
  };

  const removeItemHandler = (id) => {
    dispatch(listActions.removeTaskFromList(id));
  };

  useEffect(() => {
    // console.log(tasks);
    setAllTask(
      tasks.map((task, index) => {
        return (
          <li key={index} id={task.id}>
            <p>{task.taskText}</p>
            <p>{task.dueDate}</p>
            <p>{task.importance}</p>
            <button
              onClick={() =>
                startEditingHandler(task.taskText, index, task.importance)
              }
            >
              Edit
            </button>
            <button onClick={removeItemHandler.bind(null, task.id)}>
              Remove
            </button>
          </li>
        );
      })
    );
    console.log(tasks);
  }, [tasks]);

  return (
    <div>
      {isModalShown && (
        <EditTask
          onOpen={openModalHandler}
          onClose={closeModalHandler}
          editTaskIndex={editTaskIndex}
          defaultTaskText={modalDefaultTaskText}
          defaultImportance={modalDefaultImportance}
        />
      )}
      <h2>Task List</h2>
      <p>{totalQuantityOfTasks} tasks left.</p>
      <ul>{allTask}</ul>
    </div>
  );
};

export default TaskList;
