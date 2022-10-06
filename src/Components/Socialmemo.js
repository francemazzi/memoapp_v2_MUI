import { Typography } from "@mui/material";
import * as React from "react";
import Container from "@mui/material/Container";

// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";

const SocialMemo = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Typography
          variant="h2"
          color="textPrimary"
          align={"center"}
          gutterBottom
        >
          Condividi i tuoi memo!
        </Typography>
      </Container>
    </>
  );
};

export default SocialMemo;
