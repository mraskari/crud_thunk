import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Search, Mail, Notifications, Cancel } from "@material-ui/icons";
import React, { useState } from "react";

const myStyles = makeStyles((theme) => ({
  appbartop: {
    position: "sticky",
    backgroundColor: theme.palette.primary.main,
    top: "0",
    zIndex: "1",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down("xs")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width: "70%",
    },
  },
  cancelButton: {
    marginLeft: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  input: {
    color: "white",
    width: "100%",
    marginRight: theme.spacing(1),
  },
  searchButton: {
    display: "none",
    marginLeft: theme.spacing(3),
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  icon: {
    alignItems: "baseline",
    display: (props) => (props.open ? "none" : "flex"),
    [theme.breakpoints.up("sm")]: {
      display: "flex !important",
    },
  },
  badge: {
    marginLeft: theme.spacing(2),
  },
}));

function Navbar() {
  const [open, setOpen] = useState(false);
  const myStyle = myStyles({ open });
  return (
    <React.Fragment>
      <AppBar className={myStyle.appbartop}>
        <Toolbar className={myStyle.toolbar}>
          <Typography variant="h6" component="h1" className={myStyle.logoLg}>
            MRA Posts
          </Typography>
          <Typography variant="h6" component="h1" className={myStyle.logoSm}>
            mra
          </Typography>
          <div className={myStyle.search}>
            <Search />
            <InputBase placeholder="جستجو" className={myStyle.input} />
            <Cancel
              onClick={() => setOpen(false)}
              className={myStyle.cancelButton}
            />
          </div>
          <div className={myStyle.icon}>
            <Search
              className={myStyle.searchButton}
              onClick={() => setOpen(true)}
            />
            <Badge badgeContent={4} color="error" className={myStyle.badge}>
              <Mail />
            </Badge>
            <Badge badgeContent={3} color="secondary" className={myStyle.badge}>
              <Notifications />
            </Badge>
            <Avatar src="" alt="avatar 1" />
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Navbar;
