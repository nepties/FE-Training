import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#81d4fa",
    },
    secondary: {
      main: "#f9a825",
    },
    error: {
      main: red.A400,
    },
  },

  typography: {
    fontFamily: [
      "gtitle",
      "noto sans kr",
      "nanum gothic",
      "malgun gothic",
      "돋움",
      "sans-serif",
    ].join(","),
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
          fontSize: "0.875rem",
          minWidth: "30px",
          "&.Mui-selected": {
            backgroundColor: "#fff2bd",
            borderColor: "rgba(0, 0, 0, 0.12)",
          },
          "&.Mui-selected:hover": {
            backgroundColor: "#fff2bd",
            borderColor: "rgba(0, 0, 0, 0.12)",
          },
          ":hover": {
            backgroundColor: "#fff2bd",
            borderColor: "rgba(0, 0, 0, 0.12)",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: "8px",
          margin: "auto",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          cursor: "pointer",
        },
      },
    },
  },
});

export default theme;
