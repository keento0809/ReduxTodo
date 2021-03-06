import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const InputUI = (props) => {
  return (
    <Box
      // component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      marginBottom={props.margin}
    >
      <TextField
        id="standard-basic"
        label={props.label}
        variant="standard"
        color="primary"
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        sx={{ color: "primary" }}
      />
    </Box>
  );
};

export default InputUI;
