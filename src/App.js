import { Grid, makeStyles } from "@material-ui/core";
import Add from "./components/Add";
import Feed from "./components/Feed";
import Leftbar from "./components/Leftbar";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";

const myStyles = makeStyles((theme) => ({
  left: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

function App() {
  const myStyle = myStyles();

  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item xs={2}>
          <Rightbar />
        </Grid>
        <Grid item sm={7} xs={9}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={myStyle.left}>
          <Leftbar />
        </Grid>
      </Grid>

      <Add />
    </div>
  );
}

export default App;
