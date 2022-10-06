import { Typography } from "@mui/material";
import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

// importazione stile

const useStyles = makeStyles({
  slideUno: {
    marginTop: "10%",
    padding: "10px",
  },
  buttonAdd: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "#FFFF",
    height: 48,
    padding: "0 30px",
  },
  buttonShare: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "#FFFF",
    height: 48,
    padding: "0 30px",
  },
});

// DEVI  INSERIRE IL MEMOBLOCK DENTRO A memo generale
//

const Homepage = () => {
  const classes = useStyles();
  return (
    <>
      <div>
        {/* <Container maxWidth="sm" className={classes.slideUno}>
          <Typography
            variant="h2"
            color="textPrimary"
            align={"center"}
            gutterBottom
          >
            Ricoradati delle piccole cose!
          </Typography>
        </Container> */}
      </div>
    </>
  );
};

export default Homepage;
