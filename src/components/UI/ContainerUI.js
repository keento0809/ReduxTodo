import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const ContainerUI = (props) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ bgcolor: "background.paper" }} />
        {props.children}
      </Container>
    </React.Fragment>
  );
};

export default ContainerUI;
