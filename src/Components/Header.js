import { Typography, CssBaseline, AppBar } from "@mui/material";

const Header = () => {
  return (
    <>
      <CssBaseline></CssBaseline>
      <AppBar position="relative" height={"10rem"}>
        <Typography
          variant="h6"
          fontWeight={800}
          fontSize={"30px"}
          color="black"
        >
          Ricordati
        </Typography>
      </AppBar>
    </>
  );
};

export default Header;
