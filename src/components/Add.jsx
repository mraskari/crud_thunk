import { makeStyles, Tooltip, Fab } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewPost, fetchPostsList } from "../store/action-creators";
import { ADD_NEW_POST } from "../store/action-types";
import ModalForm from "./ModalForm";

const myStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: "40px",
    right: "40px",
  },
  container: {
    width: 500,
    height: 300,
    backgroundColor: "white",
    margin: "auto",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    [theme.breakpoints.down("sm")]: {
      height: "100vh",
      width: "100vw",
    },
  },
  form: {
    paddingTop: theme.spacing(3),
  },
  item: {
    marginBottom: theme.spacing(2),
  },
}));

function Add() {
  const myStyle = myStyles();
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (titleValue, bodyValue) => {
    console.log("handle submit");
    dispatch(fetchPostsList(ADD_NEW_POST, { title: titleValue, body: bodyValue }));
  };

  return (
    <>
      <Tooltip
        title="Add"
        aria-label="افزودن پست جدید"
        onClick={() => setOpen(true)}
      >
        <Fab color="secondary" className={myStyle.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <ModalForm
        open={open}
        setOpen={setOpen}
        handleSubmit={handleSubmit}
        titleValue=""
        bodyValue=""
      />
    </>
  );
}

export default Add;
