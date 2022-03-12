import * as React from "react";
import Main from "./components/Main/Main";
import "./App.css";

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
      default: "#FFF176",
    },
    text: {
      primary: "#263238",
    },
  },
  typography: {
    fontSize: 16,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightBold: 700,

    h2: {
      fontWeight: 500,
    },
    h5: {
      fontWeight: 700,
      letterSpacing: "-2px",
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
