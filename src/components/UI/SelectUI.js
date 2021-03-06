import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";

const SelectUI = (props) => {
  return (
    <Box marginBottom={2}>
      <FormControl
        variant="standard"
        sx={{ m: 1, minWidth: 120, color: "primary" }}
      >
        <InputLabel id="demo-simple-select-standard-label" color="primary">
          Importance
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          name={props.name}
          label={props.name}
          value={props.value}
          onChange={props.onChange}
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          <MenuItem value={props.value1}>{props.value1}</MenuItem>
          <MenuItem value={props.value2}>{props.value2}</MenuItem>
          <MenuItem value={props.value3}>{props.value3}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectUI;
