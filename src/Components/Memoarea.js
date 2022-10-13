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

//redux
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./app/features/counter/memoCounterSlice";

const useStyles = makeStyles({
  bottomAdd: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
});

const Memoarea = () => {
  const classes = useStyles();

  //redux
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  // memo cookie solo per chi è registrato quindi si possono mantere salvati
  const [memo, setMemo] = useState(
    GetCookie("memo") ? JSON.parse(GetCookie("memo")) : []
  );
  useEffect(() => {
    SetCookie("Memo: ", JSON.stringify(memo));
  }, [memo]);
  const [memoError, setMemoError] = useState(false);

  // Aggiungere memo
  const [memoblocks, setMemoblocks] = useState([]);

  // DATA
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  const dataDiOggi = `${dd}/${mm}/${yyyy}`;

  const addMemo = (memo) => {
    let newMemoBlock = [
      ...memoblocks,
      { id: memoblocks.length + 1, memo: memo, data: dataDiOggi },
    ];

    console.log(newMemoBlock);
    setMemoblocks(newMemoBlock);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //redux
    dispatch(increment());
    addMemo(memo);
    if (memo && memo !== "" && memo !== "\n") {
      setMemoError(false);
    } else {
      setMemoError(true);
      return;
    }
  };

  // ELIMINARE MEMO

  // const handleRemove = (id, e) => {
  //   let newMemoBlock = memoblocks.findIndex((obj) => obj.id === id);
  //   setMemoblocks(memoblocks.splice(newMemoBlock, 0));
  // };

  // A volte da bug
  const handleRemove = (id, e) => {
    let newMemoBlock = memoblocks.filter((obj) => obj.id !== id);
    setMemoblocks(newMemoBlock);
    dispatch(decrement());
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
          Hai {count} promemoria
        </Typography>

        <div>
          {memoblocks.map((memoblock, index) => (
            <BasicCard
              memoblock={memoblock}
              handleRemove={handleRemove}
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
