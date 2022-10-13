import React from "react";
import { useState } from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

//Redux
import { selectAllUsers } from "./app/features/users/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { memoAdd } from "./app/features/memoString/memoSlice";

//style
const useStyles = makeStyles({
  bottomAdd: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
});

export const AddMemo = () => {
  //hook style
  const classes = useStyles();
  const dispatch = useDispatch();
  const [memo, setMemo] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);

  const onMemoChanged = (e) => setMemo(e.target.value);
  const onUserChanged = (e) => setUserId(e.target.value);

  //on memo clicked
  const onSaveMemoClicked = () => {
    if (memo) {
      dispatch(memoAdd(memo, userId));
      setMemo("");
    }
  };

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
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
        <form noValidate autoComplete="off">
          <TextField
            onChange={onMemoChanged}
            id="standard-textarea"
            label="Inserisci il tuo memo"
            placeholder=""
            multiline
            variant="standard"
            fullWidth
          />
        </form>
        <Button
          className={classes.bottomAdd}
          style={{
            width: "auto",
          }}
          variant="contained"
          onClick={onSaveMemoClicked}
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
        Hai 2 promemoria
      </Typography>
    </Container>
  );
};
