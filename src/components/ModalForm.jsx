import {
  makeStyles,
  Modal,
  Container,
  TextField,
  Button,
} from "@material-ui/core";
import { useEffect, useState } from "react";

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

function ModalForm(props) {
  const myStyle = myStyles();

  const [titleValue, setTitleValue] = useState("");
  const [bodyValue, setBodyValue] = useState("");

  useEffect(() => {
    console.log("ModalForm -> ", props.titleValue, props.bodyValue);
    setTitleValue(props.titleValue);
    setBodyValue(props.bodyValue);
  }, [props.titleValue, props.bodyValue]);

  return (
    <>
      <Modal open={props.open}>
        <Container className={myStyle.container}>
          <form className={myStyle.form} autoComplete="off">
            <div className={myStyle.item}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="عنوان"
                value={titleValue}
                style={{ width: "100%", direction: "rtl" }}
                onChange={(e) => setTitleValue(e.target.value)}
              />
            </div>
            <div className={myStyle.item}>
              <TextField
                id="outlined-multiline-static"
                placeholder="محتوی"
                value={bodyValue}
                multiline
                rows={5}
                variant="outlined"
                style={{ width: "100%", direction: "rtl" }}
                onChange={(e) => setBodyValue(e.target.value)}
              />
            </div>

            <div className={myStyles.item}>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginLeft: "10px" }}
                onClick={() => {
                  props.handleSubmit(titleValue, bodyValue);
                  props.setOpen(false);
                }}
              >
                تایید
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => props.setOpen(false)}
              >
                انصراف
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
    </>
  );
}

export default ModalForm;
