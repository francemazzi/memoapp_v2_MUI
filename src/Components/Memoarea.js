import React, { useState } from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const useStyles = makeStyles({
  bottomAdd: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
});

const Memoarea = () => {
  const classes = useStyles();
  const [memo, setMemo] = useState();
  const [memoError, setMemoError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (memo && memo !== "" && memo !== "\n") {
      console.log(memo);
      setMemoError(false);
    } else {
      setMemoError(true);
      return;
    }
  };

  return (
    <>
      <CssBaseline></CssBaseline>
      <Container maxWidth="sm">
        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <TextField
              onChange={(e) => setMemo(e.target.value)}
              id="standard-textarea"
              label="Inserisci il tuo memo"
              placeholder="Placeholder"
              multiline
              variant="standard"
              fullWidth
              error={memoError}
            />
          </form>
          <Button
            className={classes.bottomAdd}
            onClick={(e) => handleSubmit(e)}
            style={{
              width: "auto",
            }}
            variant="contained"
          >
            Aggiungi
          </Button>
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

export default Memoarea;
