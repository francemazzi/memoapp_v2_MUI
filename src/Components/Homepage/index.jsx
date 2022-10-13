import { Typography } from "@mui/material";
import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import useStyles from "./style";

const Homepage = () => {
  const classes = useStyles();
  return (
    <>
      <div>
        <Container maxWidth="sm" className={classes.slideUno}>
          <Typography
            variant="h2"
            color="textPrimary"
            align={"center"}
            gutterBottom
          >
            Ricoradati delle piccole cose!
          </Typography>
          <Typography
            variant="h5"
            color="textSecondary"
            align={"center"}
            paragraph
          >
            Memoapp è la prima piattaforma che ti permette di ricordare le cose
            piccole, condividendole con chi ti è accanto
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button
                className={classes.buttonAdd}
                component={Link}
                to={"/memoarea"}
                style={{ textDecoration: "none", color: "#FFFF" }}
              >
                Carica memo
              </Button>
            </Grid>
            <Grid item>
              <Button
                className={classes.buttonShare}
                component={Link}
                to={"/submit"}
                style={{ textDecoration: "none", color: "#FFFF" }}
              >
                Memo share
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Homepage;
