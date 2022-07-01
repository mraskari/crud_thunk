import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { useEffect, useState } from "react";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function ShowAlert(props) {
  const [openAlert, setAlert] = useState(false);

  useEffect(() => {
    setAlert(props.open);
  });

  const handleClose = (event, reason) => {
    setAlert(false);
    props.handleClose();
  };

  return (
    <Snackbar
      open={openAlert}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
    >
      <Alert onClose={handleClose} severity="success">
        {props.message}
      </Alert>
    </Snackbar>
  );
}

export default ShowAlert;
