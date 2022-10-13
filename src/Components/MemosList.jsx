//MUI materials import
import * as React from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

//REDUX
import { useSelector } from "react-redux";
import { selectAllMemos } from "./app/features/memoString/memoSlice";

const MemosList = () => {
  //Redux render posts
  const memos = useSelector(selectAllMemos);

  // DATA
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  const dataDiOggi = `${dd}/${mm}/${yyyy}`;

  const renderMemos = memos.map((memo) => (
    <Card
      key={memo.id}
      sx={{ minWidth: 275 }}
      style={{
        marginTop: "1rem",
        marginLeft: "0.9rem",
        marginRight: "0.9rem",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {dataDiOggi}
        </Typography>
        <Typography variant="h5" component="div">
          {memo.memo}
        </Typography>
      </CardContent>
    </Card>
  ));

  return <>{renderMemos}</>;
};

export default MemosList;
