import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";
import DateTimePicker from "@mui/lab/DateTimePicker";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import MobileDatePicker from "@mui/lab/MobileDatePicker";

import DateAdapter from "@mui/lab/AdapterDateFns";
import Box from "@mui/material/Box";

// const today = new Date();
// const minDateValue = `${today.getFullYear()}-${
//   today.getMonth() + 1
// }-${today.getDate()}`;

const DatePickerUI = (props) => {
  const [value, setValue] = React.useState(new Date());

  const handleChange = (newValue) => {
    props.onChange(
      `${newValue.getFullYear()}-${
        newValue.getMonth() + 1
      }-${newValue.getDate()}`
    );
    setValue(newValue);
    // props.onChange(newValue);
  };

  return (
    // <LocalizationProvider dateAdapter={AdapterDateFns}>
    <Box marginBottom={1}>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <DesktopDatePicker
          label="Due date"
          inputFormat="MM/dd/yyyy"
          // default value
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField color="primary" {...params} />}
        />
      </LocalizationProvider>
    </Box>
  );
};

export default DatePickerUI;
