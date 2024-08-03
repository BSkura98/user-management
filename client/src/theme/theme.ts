import { createTheme as muiCreateTheme } from "@mui/material/styles";
import { isUserOver60 } from "../utils/userAge";

const createTheme = (birthdate: string | null) =>
  muiCreateTheme({
    typography: {
      fontSize: isUserOver60(birthdate) ? 28 : 14,
    },
  });

export default createTheme;
