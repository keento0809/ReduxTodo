import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const TaskButton = (props) => {
  return (
    <Button
      type={props.type}
      onClick={props.onClick}
      variant="contained"
      size="small"
      color="secondary"
      sx={{
        padding: 0.2,
        fontSize: "0.8rem",
        lineHeight: "1rem",
        minWidth: "40px",
        margin: 0.5,
      }}
    >
      <Typography sx={{ fontSize: "0.8rem" }} variant="body1" component="span">
        {props.name}
      </Typography>
    </Button>
  );
};

export default TaskButton;
