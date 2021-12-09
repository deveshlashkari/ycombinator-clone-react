import React, { Component } from "react";
import {
  Grid,
  Typography,
  Backdrop,
  CircularProgress,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

import Header from "./Header";
import { getStories } from "../utils/Api";

const styles = () => ({
  textDecor: {
    textDecoration: "none",
    color: "#9D9D9D",
  },
});
class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stories: [],
      isLoading: true,
    };
  }

  componentDidMount = () => {
    getStories("new").then((_data) => {
      if (_data.length !== 0) {
        this.setState({ stories: _data, isLoading: false });
      }
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <Backdrop
          open={this.state.isLoading}
          style={{ zIndex: 9999, color: "#fff" }}
        >
          {" "}
          <CircularProgress color="inherit" />
        </Backdrop>
        <Header />
        <Grid container spacing={1} style={{ backgroundColor: "#F6F6EF" }}>
          {this.state.stories.map((_data, idx) => (
            <>
              <Grid item xs={12} style={{ marginTop: "5px" }}>
                <Grid container direction="row">
                  <Grid item>
                    <span>{idx}</span>
                  </Grid>
                  <Grid item>
                    <ArrowDropUpIcon style={{ color: "#9D9D9D" }} />
                  </Grid>
                  <Grid item>
                    <Grid container>
                      <Grid item xs={12}>
                        <Grid container spacing={1}>
                          <Grid item>
                            <Typography
                              className={classes.textDecor}
                              variant="caption"
                            >
                              {_data.data.score} point by
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="caption">
                              <a
                                className={classes.textDecor}
                                href="google.com"
                              >
                                {_data.data.by}
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
                      <Grid item xs={12}>
                        <a
                          href={_data.data.url}
                          target="_blank"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <Typography variant="body2">
                            {_data.data.title}
                            <span
                              style={{
                                color: "#9D9D9D",
                              }}
                            >
                              ({_data.data.url?.split("//")[1].substring(0, 10)}
                              )
                            </span>
                          </Typography>
                        </a>
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

export default withStyles(styles)(Comments);
