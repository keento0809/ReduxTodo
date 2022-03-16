import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const PaperUI = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 180,
          height: 180,
        },
      }}
    >
      <Paper sx={{ bgcolor: "background.default" }} padding={4} elevation={8}>
        {props.children}
      </Paper>
    </Box>
  );
};

export default PaperUI;
