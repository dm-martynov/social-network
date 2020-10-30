import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = (props) => (
  <header className={classes.header}>
    <img
      alt="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQmlvqP7RnoWAQGa5eDNf43h_CAH5FakZNzvg&usqp=CAU"
    />
    <div className={classes.loginBlock}>
      {props.isAuth ? (
        <div>
          {props.login}
          <button onClick={props.logout}>Log out</button>
        </div>
      ) : (
        <NavLink to={"/login"}>Login</NavLink>
      )}
    </div>
  </header>
);

export default Header;
