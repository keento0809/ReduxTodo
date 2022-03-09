import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listActions } from "../../../store/list-slice";

import Modal from "../../Modal/Modal";

const EditTask = (props) => {
  const dispatch = useDispatch();
  const chosenTask = useSelector((state) => state.list.selectedTask);
  console.log(chosenTask);
  // let chosenTaskText = chosenTask[0].taskText;
  // let chosenTaskImportance = chosenTask[0].importance;

  const updateTaskHandler = (task) => {
    console.log("Updating...!");
  };

  const changeTaskTextHandler = (e) => {
    console.log(e.target.value);
    // setEditTaskText(e.target.value);
    let value = {
      taskText: e.target.value,
    };
    console.log(typeof value);
    dispatch(listActions.changeTaskText(e.target.value));
    console.log(chosenTask.taskText);
  };

  return (
    <Modal onClose={props.onClose}>
      <div>
        <h3>Edit your task</h3>
        {/* <p>{chosenTask.taskText}</p> */}
        <input
        // defaultValue={chosenTaskText}
        // defaultValue={chosenTask.taskText}
        // onChange={changeTaskTextHandler}
        />
        {/* <select name="importance" defaultValue={chosenTask[0].importance}> */}
        <select name="importance">
          <option value="">-</option>
          <option value="High">High</option>
          <option value="Normal">Normal</option>
          <option value="Low">Low</option>
        </select>
        <button onClick={updateTaskHandler}>Update</button>
        <button onClick={props.onClose}>Close</button>
      </div>
    </Modal>
  );
};

export default EditTask;
