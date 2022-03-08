import React from "react";

const TaskForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submit!!");
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" />
      <button>Add</button>
    </form>
  );
};

export default TaskForm;
