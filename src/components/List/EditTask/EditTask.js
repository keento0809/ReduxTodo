import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { listActions } from "../../../store/list-slice";
import Modal from "../../Modal/Modal";
import Typography from "@mui/material/Typography";
import InputUI from "../../UI/InputUI";
import SelectUI from "../../UI/SelectUI";
import TaskButton from "../../UI/TaskButtonUI";
import { styled } from "@mui/material";

const InputStyle = styled(InputUI)({
  marginBottom: 0,
});

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
        {/* Original code */}
        {/* <input value={taskInput} onChange={taskInputChangeHandler} /> */}
        <InputUI
          value={taskInput}
          onChange={taskInputChangeHandler}
          margin={0}
        />
        {/* Original code */}
        {/* <select
          name="importance"
          value={importanceInput}
          onChange={importanceInputChangeHandler}
        >
          <option value="High">High</option>
          <option value="Normal">Normal</option>
          <option value="Low">Low</option>
        </select> */}
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
