import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
      primary: {
        main: red[700],
        "300": "#0404e2",
        
      },
      secondary: {
        main: "#2f5425",
      },
      
    },
  });