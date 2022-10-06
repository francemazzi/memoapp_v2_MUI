import * as React from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles({
  buttonDelete: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "#FFFF",
    height: 48,
    padding: "0 30px",
  },
});

export default function BasicCard({ memoblock, handleRemove }) {
  const classes = useStyles();
  return (
    <Card
      sx={{ minWidth: 275 }}
      style={{
        marginTop: "15px",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {memoblock.data}
        </Typography>
        <Typography variant="h5" component="div">
          {memoblock.memo}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          className={classes.buttonDelete}
          style={{ textDecoration: "none", color: "#FFFF" }}
          onClick={(e) => handleRemove(memoblock.id, e)}
        >
          Elimina
        </Button>
      </CardActions>
    </Card>
  );
}
