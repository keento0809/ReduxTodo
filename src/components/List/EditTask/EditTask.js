import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listActions } from "../../../store/list-slice";

import styled from "styled-components";

const TestBackdropStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 5;
`;

const TestStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
  background: aquamarine;
  border: 1px solid aquamarine;
  border-radius: 12px;
  z-index: 10;
`;

const TestBackdrop = (props) => {
  return (
    <TestBackdropStyle onClick={props.onClose}>
      {props.children}
    </TestBackdropStyle>
  );
};

const EditTask = (props) => {
  const dispatch = useDispatch();

  const [taskInput, setTaskInput] = useState(props.defaultTaskText);
  const [importanceInput, setImportanceInput] = useState(
    props.defaultImportance
  );
  // const [dueDateInput,setDueDateInput] = useState();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      listActions.updateSelectedTask({
        id: props.editTaskId,
        taskText: taskInput,
        importance: importanceInput,
      })
    );
    props.onClose();
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
    <TestStyle>
      <form onSubmit={submitHandler}>
        <h3>Edit Your Task</h3>
        <input value={taskInput} onChange={taskInputChangeHandler} />
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
    </TestStyle>
  );
};

export default EditTask;
