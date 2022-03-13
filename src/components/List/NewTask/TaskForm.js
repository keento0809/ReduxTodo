import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { listActions } from "../../../store/list-slice";

// Button
import ButtonUI from "../../UI/ButtonUI";

// text input
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

// select form
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function MultipleSelectPlaceholder() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
        <Select
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Importance</em>;
            }

            return selected.join(", ");
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem disabled value="">
            <em>Importance</em>
          </MenuItem>
          <MenuItem value="High">High</MenuItem>
          <MenuItem value="Normal">Normal</MenuItem>
          <MenuItem value="Low">Low</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Text here" variant="standard" />
    </Box>
  );
}

const TaskForm = () => {
  const dispatch = useDispatch();

  const [taskText, setTaskText] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [importance, setImportance] = useState("");

  const changeTaskTextHandler = (e) => {
    setTaskText(e.target.value);
  };

  const changeDueDateHandler = (e) => {
    setDueDate(e.target.value);
  };

  const changeImportanceHandler = (e) => {
    setImportance(e.target.value);
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
      {/* Original code. DO NOT CHANGE !! */}
      <input type="text" value={taskText} onChange={changeTaskTextHandler} />
      {/* <BasicTextFields
          type="text"
          value={taskText}
          onChange={changeTaskTextHandler}
        /> */}
      {/* Original code. DO NOT CHANGE !! */}
      <input
        type="date"
        name="calendar"
        max="9999-12-31"
        onChange={changeDueDateHandler}
        value={dueDate}
      />
      {/* Original code DO NOT CHANGE !! */}
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
      {/* <MultipleSelectPlaceholder
          name="importance"
          id=""
          value={importance}
          onChange={changeImportanceHandler}
        >
          <option value="">-</option>
          <option value="High">High</option>
          <option value="Normal">Normal</option>
          <option value="Low">Low</option>
        </MultipleSelectPlaceholder> */}
      {/* original code. DO NOT CHANGE !! */}
      {/* <button>Add</button> */}
      <ButtonUI name="add" sx={{ cursor: "pointer" }} />
    </form>
  );
};

export default TaskForm;
