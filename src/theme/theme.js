import { createTheme } from "@mui/material";

// #00BFA5：green
// #FFF176：yellow

export const theme = createTheme({
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
      white: "#FFF",
    },
    text: {
      primary: "#263238",
      // ここを変えたら色を変えることができたんやけど、その理由はText Fieldのlabelの文字に対して
      // text.secondaryが指定されているから？で、text-fieldというUI Componentのdefaultのstyling
      // を確認したいっていう質問やね。(デフォルトではtext-fieldのfont-sizeは16px,colorは#000, など)
      secondary: "#00BFA5",
    },
  },
  typography: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          body1: "span",
          body2: "p",
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
    body2: {
      fontWeight: 700,
      letterSpacing: "-1px",
    },
  },
  overrides: {
    TextField: {
      label: {
        color: "#263238",
      },
    },
  },
});
