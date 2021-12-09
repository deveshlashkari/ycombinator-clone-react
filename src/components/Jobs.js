import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

import Header from "./Header";

const styles = () => ({
  textDecor: {
    textDecoration: "none",
    color: "#9D9D9D",
  },
});
class Jobs extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <Header />
        <Grid container spacing={1} style={{ backgroundColor: "#F6F6EF" }}>
          {[1, 2, 3, 4, 5].map((_data) => (
            <>
              <Grid item xs={12}>
                <Grid container direction="row">
                  <Grid item>
                    <span>1</span>
                  </Grid>
                  <Grid item>
                    <ArrowDropUpIcon style={{ color: "#9D9D9D" }} />
                  </Grid>
                  <Grid item>
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography variant="body2">
                          lorem ipsum dolor sit amet, consectetur adip{" "}
                          <span style={{ color: "#9D9D9D" }}>(cnn.com)</span>
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container spacing={1}>
                          <Grid item>
                            <Typography
                              className={classes.textDecor}
                              variant="caption"
                            >
                              1 point by
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="caption">
                              <a
                                className={classes.textDecor}
                                href="google.com"
                              >
                                Devesh
                              </a>
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="caption">
                              <a
                                className={classes.textDecor}
                                href="google.com"
                              >
                                0 minutes ago
                              </a>
                            </Typography>
                          </Grid>
                          <Grid item>
                            <span>|</span>
                          </Grid>
                          <Grid item>
                            <Typography variant="caption">
                              <a
                                className={classes.textDecor}
                                href="google.com"
                              >
                                hide
                              </a>
                            </Typography>
                          </Grid>
                          <Grid item>
                            <span>|</span>
                          </Grid>
                          <Grid item>
                            <Typography variant="caption">
                              <a
                                className={classes.textDecor}
                                href="google.com"
                              >
                                past
                              </a>
                            </Typography>
                          </Grid>
                          <Grid item>
                            <span>|</span>
                          </Grid>
                          <Grid item>
                            <Typography variant="caption">
                              <a
                                className={classes.textDecor}
                                href="google.com"
                              >
                                discuss
                              </a>
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </>
          ))}
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(Jobs);
