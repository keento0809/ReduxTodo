import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listActions } from "../../../store/list-slice";

import Modal from "../../Modal/Modal";

const EditTask = (props) => {
  const dispatch = useDispatch();

  const [taskInput, setTaskInput] = useState(props.defaultTaskText);
  const [importanceInput, setImportanceInput] = useState(
    props.defaultImportance
  );

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      listActions.updateSelectedTask({
        id: props.editTaskId,
        taskText: taskInput,
        importance: importanceInput,
      })
    );
  };

  const taskInputChangeHandler = (e) => {
    setTaskInput(e.target.value);
  };

  const importanceInputChangeHandler = (e) => {
    setImportanceInput(e.target.value);
  };

  useEffect(() => {
    setTaskInput(props.defaultTaskText);
    setImportanceInput(props.defaultImportance);
  }, [props.defaultTaskText, props.defaultImportance]);

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h3>Edit Your Task</h3>
        <input
          value={taskInput}
          // defaultValue={props.defaultTaskText}
          onChange={taskInputChangeHandler}
        />
        <select
          name="importance"
          value={importanceInput}
          defaultValue={props.defaultImportance}
          onChange={importanceInputChangeHandler}
        >
          <option value="High">High</option>
          <option value="Normal">Normal</option>
          <option value="Low">Low</option>
        </select>
        <button>Update</button>
        <button onClick={props.onClose}>Close</button>
      </form>
    </div>
  );
};

export default EditTask;
