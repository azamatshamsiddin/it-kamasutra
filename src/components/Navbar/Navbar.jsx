import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
const Navbar = () => {
  return (
    <>
      <nav className={s.nav}>
        <ul className={s.sidebar__ul}>
          <li className={s.sidebar__li}>
            <NavLink to="/" activeClassName={s.activeLink}>
              Profile
            </NavLink>
          </li>
          <li className={s.sidebar__li}>
            <NavLink to="/dialogs" activeClassName={s.activeLink}>
              Messages
            </NavLink>
          </li>
          <li className={s.sidebar__li}>
            <NavLink to="/news" activeClassName={s.activeLink}>
              News
            </NavLink>
          </li>
          <li className={s.sidebar__li}>
            <NavLink to="/music" activeClassName={s.activeLink}>
              Music
            </NavLink>
          </li>
          <li className={s.sidebar__li}>
            <NavLink to="/settings" activeClassName={s.activeLink}>
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
