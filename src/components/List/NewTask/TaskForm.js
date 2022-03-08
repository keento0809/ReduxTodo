import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { listActions } from "../../../store/list-slice";

const TaskForm = () => {
  const dispatch = useDispatch();

  const [taskText, setTaskText] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [importance, setImportance] = useState("");

  const changeTaskTextHandler = (e) => {
    setTaskText(e.target.value);
    console.log(e.target.value);
  };

  const changeDueDateHandler = (e) => {
    setDueDate(e.target.value);
    console.log(e.target.value);
  };

  const changeImportanceHandler = (e) => {
    setImportance(e.target.value);
    console.log(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
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

  return (
    <form onSubmit={submitHandler}>
      <input type="text" value={taskText} onChange={changeTaskTextHandler} />
      <input
        type="date"
        name="calendar"
        max="9999-12-31"
        onChange={changeDueDateHandler}
        value={dueDate}
      />
      <select
        name="importance"
        id=""
        value={importance}
        onChange={changeImportanceHandler}
      >
        <option value="">-</option>
        <option value="High">High</option>
        <option value="Normal">Normal</option>
        <option value="Low">Low</option>
      </select>
      <button>Add</button>
    </form>
  );
};

export default TaskForm;
