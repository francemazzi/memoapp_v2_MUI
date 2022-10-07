import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Memoarea from "./Components/Memoarea";
import Homepage from "./Components/Homepage";
import SocialMemo from "./Components/Socialmemo";
import Login from "./Components/Login";

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/memoarea" element={<Memoarea />} />
          <Route path="/sharememo" element={<SocialMemo />} />
          <Route path="/submit" element={<Login />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;
