import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import MuiAlert from "@material-ui/lab/Alert";
import {
  deletePostFromList,
  editCurrentPost,
  fetchPostsList,
  setExpandedAccardion,
} from "../store/action-creators";
import { useDispatch, useSelector } from "react-redux";
import { AccordionActions, Button, Snackbar } from "@material-ui/core";
import ModalForm from "./ModalForm";
import { DELETE_SINGLE_POST, EDIT_CURRENT_POST } from "../store/action-types";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Accordion = withStyles({
  root: {
    marginTop: "10px",
    marginBottom: "10px",
    border: "1px solid rgba(0, 0, 0, .125)",
    borderRadius: "6px",
    boxShadow: "1px 1px 8px  rgba(0, 0, 0, .1)",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    borderRadius: "6px",

    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

function Post(props) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const expanded = useSelector((store) => store.expandedAccardionKey);

  const handleChange = (panel) => (event, newExpanded) => {
    dispatch(setExpandedAccardion(newExpanded ? panel : false));
  };

  const deletePost = () => {
    dispatch(fetchPostsList(DELETE_SINGLE_POST, props.data.id));
  };

  const handleSubmit = (titleValue, bodyValue) => {
    console.log("handle submit");
    dispatch(
      fetchPostsList(EDIT_CURRENT_POST, { id: props.data.id, title: titleValue, body: bodyValue })
    );
  };

  return (
    <div>
      <ModalForm
        open={open}
        setOpen={setOpen}
        handleSubmit={handleSubmit}
        titleValue={props.data.title}
        bodyValue={props.data.body}
      />
      <Accordion
        square
        expanded={expanded === props.data.id}
        onChange={handleChange(props.data.id)}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>{props.data.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ width: "100%" }}>{props.data.body}</Typography>
          <AccordionActions>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => setOpen(true)}
              style={{ marginRight: "5px" }}
            >
              ویرایش
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => deletePost()}
              style={{ marginRight: "10px" }}
            >
              حذف
            </Button>
          </AccordionActions>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Post;
