import {
  makeStyles,
  Container,
  Avatar,
  Typography,
  ImageListItem,
  ImageList,
  Link,
  Button,
  Divider,
} from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";

const myStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(2),
    position: "sticky",
    top: "65px",
    paddingTop: theme.spacing(2),
  },
  title: {
    fontSize: "16px",
    fontWeight: 500,
    color: "#555",
  },
  imageList: {
    marginBottom: "15px !important",
  },
  imageItem: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  },
  a: {
    display: "block",
    height: "100%",
    width: "100%",
  },
  link: {
    color: "#555",
    fontSize: "16px",
    marginRight: theme.spacing(2),
  },
}));

function Leftbar() {
  const myStyle = myStyles();
  return (
    <Container className={myStyle.container}>
      <Typography className={myStyle.title} gutterBottom>
        دوستان آنلاین
      </Typography>
      <AvatarGroup max={6} style={{ marginBottom: "20px", overflow: "hidden" }}>
        <Avatar
          alt="Remy Sharp"
          src="https://v4.mui.com/static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://v4.mui.com/static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://v4.mui.com/static/images/avatar/3.jpg"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://v4.mui.com/static/images/avatar/4.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://v4.mui.com/static/images/avatar/5.jpg"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://v4.mui.com/static/images/avatar/4.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://v4.mui.com/static/images/avatar/5.jpg"
        />
      </AvatarGroup>
    </Container>
  );
}

export default Leftbar;
