import * as React from "react";
import Button from "@mui/material/Button";

const ButtonUI = (props) => {
  return (
    <Button variant="outlined" type="submit">
      {props.name}
    </Button>
  );
};

export default ButtonUI;
