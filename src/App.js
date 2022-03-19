import * as React from "react";
import Main from "./components/Main/Main";
import { theme } from "./theme/theme";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  const today = new Date().getTime();
  console.log(today);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
