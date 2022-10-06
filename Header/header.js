import { Typography, CssBaseline, AppBar } from "@mui/material";

const Header = () => {
  return (
    <div>
      <CssBaseline></CssBaseline>
      <AppBar position="relative">
        <Typography
          variant="p"
          fontWeight={800}
          fontSize={"30px"}
          color="black"
        >
          Ricordati
        </Typography>
      </AppBar>
    </div>
  );
};

export default Header;
