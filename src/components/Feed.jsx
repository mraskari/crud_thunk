import { Container, makeStyles, Snackbar } from "@material-ui/core";
import Post from "./Post";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearError, fetchPostsList } from "../store/action-creators";
import ShowAlert from "./ShowAlert";
import { FETCH_POSTS_LIST } from "../store/action-types";
import { Skeleton } from "@material-ui/lab";

const myStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(2),
  },
}));

function Feed() {
  const myStyle = myStyles();
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const { data, error, loading } = useSelector(
    (store) => store.postsReducersKey
  );

  useEffect(() => {
    dispatch(fetchPostsList(FETCH_POSTS_LIST, {}));
  }, [dispatch]);

  const renderError = () => {
    if (error) {
      return (
        <ShowAlert message={error} handleClose={handleClose} open={() => error ? true : false} />
      )
    }
  };

  const handleClose = () => {
    dispatch(clearError());
  }

  return (
    <Container className={myStyle.container}>

      {renderError()}
{console.log(data)}
      {data.map((post) => {
        return ( loading ? <Skeleton animation="wave" variant="rect" width="100%" height={56} style={{marginBottom: "10px"}} /> : <Post data={post} /> )
      })}
    </Container>
  );
}

export default Feed;
