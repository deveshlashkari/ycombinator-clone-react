import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid, Container, Typography, Button, Theme } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = () => ({
  textDecorationClass: {
    textDecoration: "none",
    color: "black",
  },
  appBar: {
    backgroundColor: "#FF6600",
    paddingBottom: "4px",
  },
});

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <Grid container>
          <Grid item xs={12} className={classes.appBar}>
            <Grid container spacing={1} direction="row">
              <Grid item>
                <a href="https://news.ycombinator.com">
                  <img
                    src={"https://news.ycombinator.com/y18.gif"}
                    alt="logo"
                  />
                </a>
              </Grid>
              <Grid item>
                <span>
                  <Link to="/newest" className={classes.textDecorationClass}>
                    <span
                      style={{
                        fontSize: "10pt",
                        lineHeight: "12px",
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      Hacker News
                    </span>
                  </Link>
                </span>
              </Grid>
              <Grid item>
                <Link to="/newest" className={classes.textDecorationClass}>
                  <span>new</span>
                </Link>
              </Grid>
              <Grid item>
                <span>l</span>
              </Grid>
              <Grid item>
                <Link to="/front" className={classes.textDecorationClass}>
                  <span>past</span>
                </Link>
              </Grid>
              <Grid item>
                <span>l</span>
              </Grid>
              <Grid item>
                <Link to="/newcomments" className={classes.textDecorationClass}>
                  <span>comments</span>
                </Link>
              </Grid>
              <Grid item>
                <span>l</span>
              </Grid>
              <Grid item>
                <Link to="/ask" className={classes.textDecorationClass}>
                  <span>ask</span>
                </Link>
              </Grid>
              <Grid item>
                <span>l</span>
              </Grid>
              <Grid item>
                <Link to="/show" className={classes.textDecorationClass}>
                  <span>show</span>
                </Link>
              </Grid>
              <Grid item>
                <span>l</span>
              </Grid>
              <Grid item>
                <Link to="/jobs" className={classes.textDecorationClass}>
                  <span>jobs</span>
                </Link>
              </Grid>
              <Grid item>
                <span>l</span>
              </Grid>
              <Grid item>
                <Link to="/submit" className={classes.textDecorationClass}>
                  <span>submit</span>
                </Link>
              </Grid>
              <div style={{ flexGrow: 1 }}></div>
              <Grid item style={{ marginRight: "10px" }}>
                <Link to="/login" className={classes.textDecorationClass}>
                  <span>login</span>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(Header);
