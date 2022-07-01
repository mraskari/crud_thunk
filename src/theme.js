import { createTheme } from "@material-ui/core";
import { purple, red } from "@material-ui/core/colors";

export const myTheme = createTheme({
  palette: {},
  buttonType1: {
    backgroundColor: red[100],
    color: purple[500],
    border: "1px solid green",
  },
});
