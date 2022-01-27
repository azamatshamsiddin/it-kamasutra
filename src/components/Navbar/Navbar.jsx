import React from "react";
import { Link } from "react-router-dom";
import s from "./Navbar.module.css";
const Navbar = () => {
  return (
    <>
      <nav className={s.nav}>
        <ul className={s.sidebar__ul}>
          <li className={s.sidebar__li}>
            <Link to="/profile">Profile</Link>
          </li>
          <li className={s.sidebar__li}>
            <Link to="/dialogs">Messages</Link>
          </li>
          <li className={s.sidebar__li}>
            <Link to="/news">News</Link>
          </li>
          <li className={s.sidebar__li}>
            <Link to="/music">Music</Link>
          </li>
          <li className={s.sidebar__li}>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
