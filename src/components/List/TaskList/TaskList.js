import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listActions } from "../../../store/list-slice";

import EditTask from "../EditTask/EditTask";

const TaskList = (props) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.list.tasks);
  const totalQuantityOfTasks = useSelector((state) => state.list.totalQuantity);

  const [allTask, setAllTask] = useState(tasks);
  const [editTaskId, setEditTaskId] = useState();
  const [modalDefaultTaskText, setModalDefaultTaskText] = useState("");
  const [modalDefaultImportance, setModalDefaultImportance] = useState("");

  const [isModalShown, setIsModalShown] = useState(false);

  const openModalHandler = () => {
    setIsModalShown(true);
  };

  const closeModalHandler = () => {
    setIsModalShown(false);
  };

  const startEditingHandler = (taskText, index, importance, id) => {
    setEditTaskId(id);
    setModalDefaultTaskText(taskText);
    setModalDefaultImportance(importance);
    openModalHandler();
  };

  const removeItemHandler = (id) => {
    dispatch(listActions.removeTaskFromList(id));
  };

  useEffect(() => {
    setAllTask(
      tasks.map((task, index) => {
        return (
          <li key={index} id={task.id}>
            <p>{task.taskText}</p>
            <p>{task.dueDate}</p>
            <p>{task.importance}</p>
            <button
              onClick={() =>
                startEditingHandler(
                  task.taskText,
                  index,
                  task.importance,
                  task.id
                )
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
  }, [tasks]);

  return (
    <div>
      {isModalShown && (
        <EditTask
          onOpen={openModalHandler}
          onClose={closeModalHandler}
          editTaskId={editTaskId}
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
