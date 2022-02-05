import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },

  components: {
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          margin: "0.5rem 0.75rem 0 0",
          verticalAlign: "middle",
        },
        grouped: {
          padding: "0.25rem 0.5rem",
          lineHeight: "1.5",
        },
      },
    },
  },
});

export default theme;
