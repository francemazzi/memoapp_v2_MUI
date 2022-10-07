import LoginForm from "./LoginForm";
import UserArea from "./UserArea";
import { useState, useEffect } from "react";

const Login = () => {
  const adminUser = {
    Email: "mazzi@gmail.com",
    Password: "1",
  };
  // usestate al login con credenziali di chi è registrato
  const [user, setUser] = useState({ Email: "", Password: "" });
  const [error, setError] = useState(false);

  const LoginAdd = (details) => {
    if (
      details.Email === adminUser.Email &&
      details.Password === adminUser.Password
    ) {
      console.log("Login");
      //Operazione Login
      setError(true);
      setUser({
        Email: details.Email,
        Password: details.Password,
      });
    } else {
      console.log("Errore Login");
    }
  };

  // Creazione login
  const handleSubmit = (e) => {
    e.preventDefault();
    LoginAdd(user);
  };

  //Logout
  const Logout = () => {
    setError(false);
    setUser({ Email: "", Password: "" });
  };

  return (
    <div>
      {error ? (
        <UserArea Logout={Logout} user={user}></UserArea>
      ) : (
        <LoginForm
          handleSubmit={handleSubmit}
          user={user}
          setUser={setUser}
        ></LoginForm>
      )}
    </div>
  );
};
export default Login;
