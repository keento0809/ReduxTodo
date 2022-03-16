import React from "react";

import { useSelector } from "react-redux";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ContainerUI from "../UI/ContainerUI";
import { styled } from "@mui/system";

const HeaderComponent = styled("header")({
  backgroundColor: "#FFF176",
});

const Header = () => {
  const totalQuantityOfTasks = useSelector((state) => state.list.totalQuantity);

  return (
    <HeaderComponent>
      <ContainerUI>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          paddingTop={1}
          paddingBottom={1}
          // sx={{ bgcolor: "background.paper" }}
        >
          <Typography variant="h4" component="h4" color="primary">
            Redux ToDo
          </Typography>
          <Typography variant="body1" component="span">
            {totalQuantityOfTasks} tasks left
          </Typography>
        </Box>
      </ContainerUI>
    </HeaderComponent>
  );
};

export default Header;
