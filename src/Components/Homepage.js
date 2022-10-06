import { Typography } from "@mui/material";
import * as React from "react";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Homepage = () => {
  return (
    <>
      <CssBaseline></CssBaseline>
      <Container maxWidth="sm">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-basic"
            label="Inserisci il tuo promemoria"
            variant="standard"
          />
        </Box>

        <Typography
          variant="h3"
          padding={"30px"}
          fontWeight={600}
          color="textPrimary"
          fontSize={"18px"}
          align={"center"}
          gutterBottom
        >
          I tuoi promemoria:
        </Typography>
      </Container>
    </>
  );
};

export default Homepage;
