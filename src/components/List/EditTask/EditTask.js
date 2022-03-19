import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { listActions } from "../../../store/list-slice";
import Modal from "../../Modal/Modal";
import Typography from "@mui/material/Typography";
import InputUI from "../../UI/InputUI";
import SelectUI from "../../UI/SelectUI";
import TaskButton from "../../UI/TaskButtonUI";
import { styled } from "@mui/material";

const EditTask = (props) => {
  const dispatch = useDispatch();

  const [taskInput, setTaskInput] = useState(props.defaultTaskText);
  const [importanceInput, setImportanceInput] = useState(
    props.defaultImportance
  );

  const submitHandler = (e) => {
    e.preventDefault();

    let taskInputIsValid = taskInput.trim().length > 0;
    let content = "Please enter the valid name of task.";

    if (!taskInputIsValid) {
      alert(content);
      return;
    }

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
    <Modal onClose={props.onClose}>
      <form onSubmit={submitHandler}>
        <Typography variant="h5" component="h5">
          Edit Your Task
        </Typography>
        <InputUI
          value={taskInput}
          onChange={taskInputChangeHandler}
          margin={0}
        />
        <SelectUI
          name="importance"
          value1="High"
          value2="Normal"
          value3="Low"
          value={importanceInput}
          onChange={importanceInputChangeHandler}
        />
        <TaskButton type="submit" name="Update" />
        <TaskButton
          onClick={props.onClose}
          name="Close"
          color="secondary.main"
        />
      </form>
    </Modal>
  );
};

export default EditTask;
