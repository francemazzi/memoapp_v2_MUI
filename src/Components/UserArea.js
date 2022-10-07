import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Memoarea from "./Memoarea";

const UserArea = ({ Logout, user }) => {
  return (
    <>
      <Typography
        align={"center"}
        variant="h6"
        fontWeight={800}
        fontSize={"30px"}
      >
        {`Benvenuto ${user.Email.split("@", 1)}`}
      </Typography>
      <Memoarea></Memoarea>
      <Button
        style={{
          marginTop: "50%",
        }}
        onClick={Logout}
      >
        Logout
      </Button>
    </>
  );
};

export default UserArea;
