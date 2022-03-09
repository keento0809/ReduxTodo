import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listActions } from "../../../store/list-slice";

import Modal from "../../Modal/Modal";

const EditTask = (props) => {
  const dispatch = useDispatch();
  const chosenTask = useSelector((state) => state.list.selectedTask);

  const defaultTaskInputValue =
    chosenTask === null ? "" : chosenTask[0].taskText;
  console.log(defaultTaskInputValue);

  const defaultImportanceInputValue =
    chosenTask === null ? "" : chosenTask[0].importance;

  const [taskInput, setTaskInput] = useState(defaultTaskInputValue);
  const [importanceInput, setImportanceInput] = useState(
    defaultImportanceInputValue
  );

  console.log(taskInput, importanceInput);

  useEffect(() => {
    console.log("re-rendering");
  }, [chosenTask, defaultTaskInputValue, defaultImportanceInputValue]);

  // useEffect(() => {
  //   const defaultTaskInputValue =
  //   chosenTask === null ? "" : chosenTask[0].taskText;
  // console.log(defaultTaskInputValue);

  // const defaultImportanceInputValue =
  //   chosenTask === null ? "" : chosenTask[0].importance;
  //   console.log("re-rendering");
  // }, [chosenTask]);

  const changeImportanceHandler = (e) => {
    setImportanceInput(e.target.value);
    console.log(e.target.value);
  };

  const changeTaskTextHandler = (e) => {
    setTaskInput(e.target.value);
    console.log(e.target.value);
  };

  const updateTaskHandler = () => {
    const updatedTaskText = taskInput;
    const updatedImportance = importanceInput;

    const updatedTask = {
      id: chosenTask[0].id,
      taskText: updatedTaskText,
      dueDate: chosenTask[0].dueDate,
      importance: updatedImportance,
    };

    dispatch(listActions.updateSelectedTask(updatedTask));

    setTaskInput("");
    setImportanceInput("");
    console.log("Are you fucking sure???");
  };

  return (
    <div onClose={() => {}}>
      <div>
        <h3>Edit your task</h3>
        <input
          type="text"
          onChange={changeTaskTextHandler}
          // Original Code
          // defaultValue={defaultTaskInputValue}
          defaultValue={taskInput}
        />
        <select
          name="importance"
          // defaultValue={chosenTask[0].importance}
          defaultValue={importanceInput}
          onChange={changeImportanceHandler}
        >
          {/* <option value="">-</option> */}
          <option value="High">High</option>
          <option value="Normal">Normal</option>
          <option value="Low">Low</option>
        </select>
        <button onClick={updateTaskHandler}>Update</button>
        <button onClick={props.onClose}>Close</button>
      </div>
    </div>
  );
};

export default EditTask;
