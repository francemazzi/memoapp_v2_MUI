import * as React from "react";
// import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MemoUser from "./MemoUser";
//Data
import { TimeAgo } from "./TimeAgo";
//reazioni
import ReactionButtons from "./ReactionButtons";
import ModifyButton from "./ReactionRemove";

const MemoExtraction = ({ memo }) => {
  return (
    <Card
      sx={{ minWidth: 275 }}
      key={memo.id}
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
          {memo.title}
        </Typography>
        <MemoUser userId={memo.userId} />
      </CardContent>
      <ReactionButtons memo={memo} />
      <ModifyButton memo={memo} />
    </Card>
  );
};

export default MemoExtraction;
