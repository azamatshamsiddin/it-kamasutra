import React from "react";
import { Routes, Route } from "react-router-dom";

// =========Components============
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Dialogs from "./components/Dialogs/Dialogs.jsx";

//================Styles=====================
import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/dialogs" element={<Dialogs />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
