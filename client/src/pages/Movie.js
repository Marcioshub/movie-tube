import React, { useState, useEffect } from "react";
import { Link as L } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import VideoCamIcon from "@material-ui/icons/Videocam";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  loading: {
    display: "flex",
    width: 100,
    height: 100,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  root: {
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    minHeight: "100vh",
  },
  video: {
    padding: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "300px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "500px",
    },
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Movie(props) {
  const classes = useStyles();
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  async function findMovie() {
    const res = await axios(`/api/search/${props.match.params.name}`);

    if (res.data.success) {
      setLoading(false);
    } else {
      history.push("/error/404");
    }
  }

  useEffect(() => {
    findMovie();

    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading ? (
        <Container maxWidth="sm" style={{ textAlign: "center", marginTop: 50 }}>
          <div className={classes.loading}>
            <CircularProgress />
          </div>
        </Container>
      ) : (
        <div className={classes.root}>
          <CssBaseline />
          <AppBar position="relative">
            <Toolbar>
              <VideoCamIcon className={classes.icon} />
              <Typography variant="h6" color="inherit" noWrap>
                MovieTube
              </Typography>
            </Toolbar>
          </AppBar>
          <Container component="main" className={classes.main} maxWidth="sm">
            <Typography variant="h2" component="h1" gutterBottom>
              {props.match.params.name.split("-").join(" ")}
            </Typography>
            <video className={classes.video} controls preload="metadata">
              <source
                src={`/api/stream/${props.match.params.name}`}
                type="video/mp4"
              />
            </video>
            <br />
            <Button
              component={L}
              to="/"
              size="large"
              variant="contained"
              color="primary"
            >
              back home
            </Button>
          </Container>
          <footer className={classes.footer}>
            <Container maxWidth="sm">
              <Typography variant="body1">MovieTube</Typography>
              <Copyright />
            </Container>
          </footer>
        </div>
      )}
    </>
  );
}
