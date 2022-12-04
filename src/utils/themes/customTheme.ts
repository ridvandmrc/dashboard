import { createTheme } from "@mui/material";

export const customTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#3a3541de", "100": "#3a354161" },
    secondary: { main: "#9155FD" },
    success: { main: "#56CA00" },
    warning: { main: "#FFB400" },
    info: { main: "#16B1FF" },
  },

  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundImage: "linear-gradient(98deg, #C6A7FE, #9155FD 94%)",
            color: "#ffffff",
            height: "40px",
            borderTopRightRadius: "2rem",
            borderBottomRightRadius: "2rem",
          },
        },
      },
    },
  },
});
