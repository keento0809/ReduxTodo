import React from "react";

import { useSelector } from "react-redux";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Header = () => {
  const totalQuantityOfTasks = useSelector((state) => state.list.totalQuantity);

  return (
    <header>
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        paddingTop={2}
        paddingBottom={2}
        sx={{ bgcolor: "background.paper" }}
      >
        <Typography
          variant="h4"
          component="h4"
          color="primary"
          fontWeight="fontWeightBold"
          letterSpacing="-2px"
        >
          Redux ToDo
        </Typography>
        <span color="text.primary">{totalQuantityOfTasks} tasks left</span>
      </Box>
    </header>
  );
};

export default Header;
