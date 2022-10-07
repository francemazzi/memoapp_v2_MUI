import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// Stile login
const useStyles = makeStyles({
  titleSubmit: {
    padding: "30px",
    textAlign: "center",
  },
  grid: {
    padding: "50px",
  },
  buttonLogin: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "#FFFF",
    height: 48,
    padding: "0 30px",
  },
  buttonSubmit: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "#FFFF",
    height: 48,
    padding: "0 30px",
  },
});

const LoginForm = ({ handleSubmit, user, setUser }) => {
  // Hook stile
  const classes = useStyles();
  return (
    <>
      <Typography
        variant="h6"
        fontWeight={800}
        fontSize={"30px"}
        className={classes.titleSubmit}
      >
        Accedi ora o iscriviti
      </Typography>
      <Box
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TextField
            id="standard-required"
            label="Email"
            variant="standard"
            onChange={(e) => setUser({ ...user, Email: e.target.value })}
          />
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
            onChange={(e) => setUser({ ...user, Password: e.target.value })}
          />
        </form>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          className={classes.grid}
        >
          <Grid item>
            <Button
              className={classes.buttonSubmit}
              // component={Link}
              // to={"/sharememo"}
              style={{ textDecoration: "none", color: "#FFFF" }}
            >
              Registrati
            </Button>
          </Grid>
          <Grid item>
            <Button
              className={classes.buttonLogin}
              onClick={(e) => handleSubmit(e)}
              style={{ textDecoration: "none", color: "#FFFF" }}
            >
              Accedi
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default LoginForm;
