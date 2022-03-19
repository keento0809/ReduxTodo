import React from "react";

import { useSelector } from "react-redux";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ContainerUI from "../UI/ContainerUI";
import { styled } from "@mui/system";

const HeaderComponent = styled("header")({
  backgroundColor: "#FFF176",
  position: "fixed",
  top: 0,
  width: "100%",
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
          paddingTop={1.5}
          paddingBottom={1.5}
        >
          <Typography variant="h5" component="h4" color="primary">
            ReduxToDo
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
