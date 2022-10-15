import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//Redux
import { store } from "./Components/app/store";
import { Provider } from "react-redux";
import { fetchUsers } from "./Components/app/features/users/userSlice";

const root = ReactDOM.createRoot(document.getElementById("root"));

//fetch user
store.dispatch(fetchUsers());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
