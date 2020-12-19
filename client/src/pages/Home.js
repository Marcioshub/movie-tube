import React from "react";
import { Link as L } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import VideoCamIcon from "@material-ui/icons/Videocam";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

// images
import donniedarko from "../images/donnie-darko.jpg";
import creepshow from "../images/creepshow.jpg";
import vhs from "../images/vhs.jpg";
import labyrinth from "../images/labyrinth.jpg";
import ghoststories from "../images/ghoststories.jpg";
import it from "../images/it.jpg";
import littlenicky from "../images/little-nicky.jpg";
import thething from "../images/the-thing.jpg";
import fiftyshadesofgrey from "../images/fifty-shades-of-grey.jpg";
import charlesmanson from "../images/charles-manson.jpg";
import jeffreydahmer from "../images/jeffrey-dahmer.jpg";
import johnwaynegacy from "../images/john-wayne-gacy.jpg";
import sonofsam from "../images/son-of-sam.jpg";
import columbinehighschool from "../images/columbine-high-school.jpg";
import blackwidow from "../images/black-widow.jpg";
import breakthrough from "../images/breakthrough.jpg";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        MovieTube
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  main: {
    backgroundColor: "#f8f8ff",
  },
  heroContent: {
    backgroundColor: "#f8f8ff",
    padding: theme.spacing(8, 0, 0),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: "#f8f8ff",
    padding: theme.spacing(6),
  },
}));

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <VideoCamIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            MovieTube
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.main}>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Enjoy Some Movies!
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            <Grid item key={0} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={donniedarko}
                  title="donnie darko"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Donnie Darko
                  </Typography>
                  <Typography>
                    A troubled teenager is plagued by visions of a man in a
                    large rabbit suit who manipulates him to commit a series of
                    crimes, after he narrowly escapes a bizarre accident.
                  </Typography>
                </CardContent>
                <CardActions style={{ display: "flex" }}>
                  <Button
                    component={L}
                    to={`/movie/donnie-darko`}
                    style={{ flex: 1 }}
                    size="small"
                    color="primary"
                  >
                    watch
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item key={1} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={creepshow}
                  title="creepshow"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Creepshow
                  </Typography>
                  <Typography>
                    An anthology which tells five terrifying tales based on the
                    E.C. horror comic books of the 1950s.
                  </Typography>
                </CardContent>
                <CardActions style={{ display: "flex" }}>
                  <Button
                    component={L}
                    to={`/movie/creepshow`}
                    style={{ flex: 1 }}
                    size="small"
                    color="primary"
                  >
                    watch
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item key={2} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={vhs}
                  title="vhs"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    VHS
                  </Typography>
                  <Typography>
                    When a group of misfits are hired by an unknown third party
                    to burglarize a desolate house and acquire a rare VHS tape,
                    they discover more found footage than they bargained for.
                  </Typography>
                </CardContent>
                <CardActions style={{ display: "flex" }}>
                  <Button
                    component={L}
                    to={`/movie/vhs`}
                    style={{ flex: 1 }}
                    size="small"
                    color="primary"
                  >
                    watch
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item key={3} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={labyrinth}
                  title="labyrinth"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Labyrinth
                  </Typography>
                  <Typography>
                    Sixteen-year-old Sarah is given thirteen hours to solve a
                    labyrinth and rescue her baby brother Toby when her wish for
                    him to be taken away is granted by the Goblin King Jareth.
                  </Typography>
                </CardContent>
                <CardActions style={{ display: "flex" }}>
                  <Button
                    component={L}
                    to={`/movie/labyrinth`}
                    style={{ flex: 1 }}
                    size="small"
                    color="primary"
                  >
                    watch
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item key={4} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={ghoststories}
                  title="ghoststories"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Ghost Stories
                  </Typography>
                  <Typography>
                    Skeptical professor Phillip Goodman embarks on a trip to the
                    terrifying after being given a file with details of three
                    unexplained cases of apparitions.
                  </Typography>
                </CardContent>
                <CardActions style={{ display: "flex" }}>
                  <Button
                    component={L}
                    to={`/movie/ghost-stories`}
                    style={{ flex: 1 }}
                    size="small"
                    color="primary"
                  >
                    watch
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item key={5} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={it}
                  title="it"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    IT
                  </Typography>
                  <Typography>
                    In 1960, seven pre-teen outcasts fight an evil demon who
                    poses as a child-killing clown. Thirty years later, they
                    reunite to stop the demon once and for all when it returns
                    to their hometown.
                  </Typography>
                </CardContent>
                <CardActions style={{ display: "flex" }}>
                  <Button
                    component={L}
                    to={`/movie/it`}
                    style={{ flex: 1 }}
                    size="small"
                    color="primary"
                  >
                    watch
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item key={6} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={fiftyshadesofgrey}
                  title="fifty shades of grey"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Fifty Shades Of Grey
                  </Typography>
                  <Typography>
                    Literature student Anastasia Steele's life changes forever
                    when she meets handsome, yet tormented, billionaire
                    Christian Grey.
                  </Typography>
                </CardContent>
                <CardActions style={{ display: "flex" }}>
                  <Button
                    component={L}
                    to={`/movie/fifty-shades-of-grey`}
                    style={{ flex: 1 }}
                    size="small"
                    color="primary"
                  >
                    watch
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item key={7} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={thething}
                  title="the thing"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    The Thing
                  </Typography>
                  <Typography>
                    A research team in Antarctica is hunted by a shape-shifting
                    alien that assumes the appearance of its victims.
                  </Typography>
                </CardContent>
                <CardActions style={{ display: "flex" }}>
                  <Button
                    component={L}
                    to={`/movie/the-thing`}
                    style={{ flex: 1 }}
                    size="small"
                    color="primary"
                  >
                    watch
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item key={8} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={littlenicky}
                  title="little nicky"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Little Nicky
                  </Typography>
                  <Typography>
                    After two of the devil's three sons escape Hell to wreak
                    havoc on Earth, the devil must send his third son, the
                    mild-mannered Nicky, to bring them back before it's too
                    late.
                  </Typography>
                </CardContent>
                <CardActions style={{ display: "flex" }}>
                  <Button
                    component={L}
                    to={`/movie/little-nicky`}
                    style={{ flex: 1 }}
                    size="small"
                    color="primary"
                  >
                    watch
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item key={9} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={charlesmanson}
                  title="charles manson"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Charles Manson
                  </Typography>
                  <Typography>
                    Known as an icon of evil, Charles Manson founded a hippie
                    cult group known as ‘The Family’ whom he would go on to
                    manipulate into brutally killing others on his behalf during
                    the late 1960’s.
                  </Typography>
                </CardContent>
                <CardActions style={{ display: "flex" }}>
                  <Button
                    component={L}
                    to={`/movie/charles-manson`}
                    style={{ flex: 1 }}
                    size="small"
                    color="primary"
                  >
                    watch
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item key={10} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={blackwidow}
                  title="black widow"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Black Widow
                  </Typography>
                  <Typography>
                    On a hot night in 2002, a murder took place in Manila,
                    Philippines. The victim was a British business man named
                    Steven Alston Davis. His death would transform the life of
                    his mother, Margaret Davis, forever.
                  </Typography>
                </CardContent>
                <CardActions style={{ display: "flex" }}>
                  <Button
                    component={L}
                    to={`/movie/black-widow`}
                    style={{ flex: 1 }}
                    size="small"
                    color="primary"
                  >
                    watch
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item key={11} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={jeffreydahmer}
                  title="jeffrey dahmer"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Jeffrey Dahmer
                  </Typography>
                  <Typography>
                    Attorneys, friends, other first-hand contacts and a
                    gastronomic peer depict the appealing young gay man who
                    became infamously known as The Milwaukee Cannibal.
                  </Typography>
                </CardContent>
                <CardActions style={{ display: "flex" }}>
                  <Button
                    component={L}
                    to={`/movie/jeffrey-dahmer`}
                    style={{ flex: 1 }}
                    size="small"
                    color="primary"
                  >
                    watch
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item key={12} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={columbinehighschool}
                  title="columbine highschool"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Columbine Highschool
                  </Typography>
                  <Typography>
                    On April 20, 1999, Dylan Klebold and Eric Harris embarked on
                    a shooting spree at Columbine High School, Colorado, killing
                    12 of their fellow students and a teacher before committing
                    suicide.
                  </Typography>
                </CardContent>
                <CardActions style={{ display: "flex" }}>
                  <Button
                    component={L}
                    to={`/movie/columbine-high-school`}
                    style={{ flex: 1 }}
                    size="small"
                    color="primary"
                  >
                    watch
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item key={13} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={johnwaynegacy}
                  title="john wayne gacy"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    John Wayne Gacy
                  </Typography>
                  <Typography>
                    The sister of John Wayne Gacy reveals details of the
                    notorious serial killer.Returning to their childhood home,
                    she discloses events in her brother's life that may have
                    triggered his crimes
                  </Typography>
                </CardContent>
                <CardActions style={{ display: "flex" }}>
                  <Button
                    component={L}
                    to={`/movie/john-wayne-gacy`}
                    style={{ flex: 1 }}
                    size="small"
                    color="primary"
                  >
                    watch
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item key={14} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={sonofsam}
                  title="son of sam"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Son of Sam
                  </Typography>
                  <Typography>
                    In the mid '70s, the self-named Son of Sam killer plunged
                    New York City in terror by randomly shooting Innocent young
                    couples on the streets.
                  </Typography>
                </CardContent>
                <CardActions style={{ display: "flex" }}>
                  <Button
                    component={L}
                    to={`/movie/son-of-sam`}
                    style={{ flex: 1 }}
                    size="small"
                    color="primary"
                  >
                    watch
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item key={3} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={breakthrough}
                  title="labyrinth"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Break Through
                  </Typography>
                  <Typography>
                    When her 14-year-old son drowns in a lake, a faithful mother
                    prays for him to come back from the brink of death and be
                    healed.
                  </Typography>
                </CardContent>
                <CardActions style={{ display: "flex" }}>
                  <Button
                    component={L}
                    to={`/movie/breakthrough`}
                    style={{ flex: 1 }}
                    size="small"
                    color="primary"
                  >
                    watch
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            {/*****/}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          MovieTube
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
