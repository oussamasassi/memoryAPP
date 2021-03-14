import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Forms from "./Components/Form/Form.js";
import Posts from "./Components/Posts/Posts.js";
import useStyles from "./style";
import { getPosts } from "./actions/posts";
import { useDispatch } from "react-redux";

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} color="inherit" position="static">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
      </AppBar>
      {/* Grow used for animation*/}
      <Grow in>
        <Container>
          <Grid
            container
            className={classes.mainContainer}
            alignItems="stretch"
            spacing={4}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={5}>
              <Forms currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
