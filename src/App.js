import React from "react";
import { Route, Routes } from "react-router-dom";

// =========Components============
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Dialogs from "./components/Dialogs/Dialogs.jsx";

//================Styles=====================
import "./App.css";

const App = () => {
  return (
    <Routes>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="main">
          <Route path="/" element={<App />}>
            <Route path="profile" element={<Profile />} />
            <Route path="dialogs" element={<Dialogs />} />
          </Route>
        </div>
      </div>
    </Routes>
  );
};

export default App;
