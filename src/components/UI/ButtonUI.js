import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ButtonUI = (props) => {
  return (
    <Button variant="contained" type="submit" color={props.color}>
      <Typography variant="body2" component="p">
        {props.name}
      </Typography>
    </Button>
  );
};

export default ButtonUI;
