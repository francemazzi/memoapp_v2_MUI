import { Typography, CssBaseline, AppBar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  appbar: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    height: "5rem",
    padding: "1rem",
    //⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
    //Inseriti diretti nel children, non ho capito perch prima non funzonasse...
    // display: "flex",
    // flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "space-between",
    //⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline></CssBaseline>
      <AppBar
        position="relative"
        height={"10rem"}
        className={classes.appbar}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h6"
          fontWeight={800}
          fontSize={"30px"}
          component={Link}
          to={"/"}
          style={{ textDecoration: "none", color: "#FFFF" }}
        >
          Memoapp 📝
        </Typography>
      </AppBar>
    </>
  );
};

export default Header;
