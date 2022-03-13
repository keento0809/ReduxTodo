import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const InputUI = (props) => {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-basic"
        label={props.label}
        variant="standard"
        color="secondary"
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
    </Box>
  );
};

export default InputUI;
