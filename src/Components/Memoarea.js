import React, { useState, useEffect } from "react";
import { GetCookie, SetCookie } from "./hooks/Cookies";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import BasicCard from "./MemoBlock";

const useStyles = makeStyles({
  bottomAdd: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
});

const Memoarea = () => {
  const classes = useStyles();
  // Mettere cookie in memoblocks non qui in memo!
  const [memo, setMemo] = useState(
    GetCookie("memo") ? JSON.parse(GetCookie("memo")) : []
  );
  useEffect(() => {
    SetCookie("Memo: ", JSON.stringify(memo));
  }, [memo]);
  const [memoError, setMemoError] = useState(false);

  // Aggiungere memo
  const [memoblocks, setMemoblocks] = useState([]);
  const addMemo = (memo) => {
    console.log("Memo " + memo);
    let newMemoBlock = [
      ...memoblocks,
      { id: memoblocks.length + 1, memo: memo },
    ];
    // console.log(handleClick(memo))
    setMemoblocks(newMemoBlock);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMemo(memo);
    if (memo && memo !== "" && memo !== "\n") {
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
              placeholder=""
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

        <div>
          {memoblocks.map((memoblock, index) => (
            <BasicCard
              memoblock={memoblock}
              key={memoblock.id}
              id={memoblock.id}
              value={memoblock.id}
            >
              {memoblock.memo}
            </BasicCard>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Memoarea;
