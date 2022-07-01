import { Container, makeStyles, Typography } from "@material-ui/core";
import {
  Home,
  Person,
  List,
  PhotoCamera,
  PlayCircleFilledOutlined,
  TabletMac,
  Bookmark,
  Storefront,
  Settings,
  ExitToApp,
} from "@material-ui/icons";

const myStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    position: "sticky",
    top: "65px",
    height: "100vh",
    color: "white",
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #f8f8f8",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(4),
      justifyContent: "right",
    },
    cursor: "Pointer",
  },
  text: {
    fontWeight: "500",
    fontSize: "1vw",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  icon: {
    fontSize: "18px",
    marginLeft: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "2vw",
    },
  },
}));

function Rightbar() {
  const myStyle = myStyles();
  return (
    <Container className={myStyle.container}>
      <div className={myStyle.item}>
        <Home className={myStyle.icon} />
        <Typography className={myStyle.text}>خانه</Typography>
      </div>
      <div className={myStyle.item}>
        <Person className={myStyle.icon} />
        <Typography className={myStyle.text}>دوستان</Typography>
      </div>
      <div className={myStyle.item}>
        <List className={myStyle.icon} />
        <Typography className={myStyle.text}>فهرست ها</Typography>
      </div>
      <div className={myStyle.item}>
        <PhotoCamera className={myStyle.icon} />
        <Typography className={myStyle.text}>ویدئو</Typography>
      </div>
      <div className={myStyle.item}>
        <Settings className={myStyle.icon} />
        <Typography className={myStyle.text}>تنظیمات</Typography>
      </div>
      <div className={myStyle.item}>
        <ExitToApp className={myStyle.icon} />
        <Typography className={myStyle.text}>خروج</Typography>
      </div>
    </Container>
  );
}

export default Rightbar;
