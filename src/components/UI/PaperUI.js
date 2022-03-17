import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const PaperUI = (props) => {
  return (
    <Box
      // sx={{
      //   // display: "flex",
      //   // flexWrap: "wrap",
      //   "& > :not(style)": {
      //     m: 1,
      //     width: 180,
      //     height: 180,
      //   },
      // }}
      sx={{ display: "inline-block", minWidth: 140, m: 1 }}
      className="ペーパーネームのBOXや"
    >
      <Paper
        sx={{
          bgcolor: "background.default",
          borderRadius: "12px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          listStyle: "none",
        }}
        padding={6}
        elevation={8}
        className="ペーパークラスやでい"
      >
        {props.children}
      </Paper>
    </Box>
  );
};

export default PaperUI;
