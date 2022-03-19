import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { listActions } from "../../../store/list-slice";

// UI Components
import ButtonUI from "../../UI/ButtonUI";
import DatePickerUI from "../../UI/DatePicker";
import InputUI from "../../UI/InputUI";
import SelectUI from "../../UI/SelectUI";

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

const today = new Date();
const defaultDate = `${today.getFullYear()}-${
  today.getMonth() + 1
}-${today.getDate()}`;

const TaskForm = () => {
  const dispatch = useDispatch();

  const [taskText, setTaskText] = useState("");
  const [dueDate, setDueDate] = useState(defaultDate);
  const [importance, setImportance] = useState("");

  const changeTaskTextHandler = (e) => {
    setTaskText(e.target.value);
  };

  const changeDueDateHandler = (val) => {
    setDueDate(val);
  };

  const changeImportanceHandler = (e) => {
    setImportance(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    let taskTextIsValid = taskText.trim().length > 0;
    let importanceIsValid = importance !== "" || null;

    let content = "Please enter the valid name of task.";

    if (taskTextIsValid && !importanceIsValid)
      content = "Please select the importance.";

    if (!taskTextIsValid || !importanceIsValid) {
      alert(content);
      return;
    }

    const num = Math.floor(Math.random() * 10000) + 1;

    dispatch(
      listActions.addTaskToList({
        id: num,
        taskText: taskText,
        dueDate: dueDate,
        importance: importance,
      })
    );

    setTaskText("");
    setDueDate("");
    setImportance("");
  };

  useEffect(() => {
    console.log("This is useEffect.");
  }, []);

  return (
    <form onSubmit={submitHandler}>
      <InputUI
        type="text"
        label="Text here"
        value={taskText}
        onChange={changeTaskTextHandler}
        margin={4}
      />
      {/* Original code. DO NOT CHANGE !! */}
      {/* <input
        type="date"
        name="calendar"
        max="9999-12-31"
        onChange={changeDueDateHandler}
        value={dueDate}
      /> */}
      <DatePickerUI
        type="date"
        name="calendar"
        max="9999-12-31"
        onChange={changeDueDateHandler}
        value={dueDate}
      />
      <SelectUI
        name="importance"
        value1="High"
        value2="Normal"
        value3="Low"
        value={importance}
        onChange={changeImportanceHandler}
      />
      <ButtonUI name="add" sx={{ cursor: "pointer" }} color="secondary" />
    </form>
  );
};

export default TaskForm;
