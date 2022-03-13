import * as React from "react";
import Main from "./components/Main/Main";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00BFA5",
    },
    secondary: {
      main: "#FFF176",
    },
    background: {
      paper: "#FFF176",
      default: "#00BFA5",
    },
    text: {
      primary: "#263238",
    },
  },
  typography: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          body1: "span",
          body2: "span",
        },
      },
    },
    fontSize: 16,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightBold: 700,

    h4: {
      fontWeight: 700,
      letterSpacing: "-2px",
    },
    h5: {
      fontWeight: 700,
      letterSpacing: "-2px",
    },
    body1: {
      fontWeight: 700,
      letterSpacing: "-1px",
    },
  },
});

const currentDate = new Date();
const date = currentDate.getDate();
console.log(date);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
