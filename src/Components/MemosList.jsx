//MUI materials import
import * as React from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MemoUser from "./MemoUser";
//Data
import { TimeAgo } from "./TimeAgo";
//reazioni
import ReactionButtons from "./ReactionButtons";
import ModifyButton from "./ReactionRemove";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import { selectAllMemos } from "./app/features/memoString/memoSlice";

const MemosList = () => {
  //Redux render posts
  const memos = useSelector(selectAllMemos);

  //ordina array in base alla data di creazione -> creare nuovo array di oggetti -> invertire ordine date
  //scambiare memos con orderMemo -> effettuare  map
  const orderMemos = memos.slice().sort((a, b) => b.date.localeCompare(a.date));

  const renderMemos = orderMemos.map((memo) => (
    <Card
      key={memo.id}
      sx={{ minWidth: 275 }}
      style={{
        marginTop: "1rem",
        marginBottom: "1rem",
        marginLeft: "0.9rem",
        marginRight: "0.9rem",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
      }}
    >
      <CardContent>
        <TimeAgo timestamp={memo.date} />
        <Typography variant="h5" component="div">
          {memo.memo}
        </Typography>
        <MemoUser userId={memo.userId} />
      </CardContent>
      <ReactionButtons memo={memo} />
      <ModifyButton memo={memo} memos={memos} />
    </Card>
  ));

  return <>{renderMemos}</>;
};

export default MemosList;
