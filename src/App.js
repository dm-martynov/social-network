import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/Dialogs-Container";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route exact path="/profile" render={() => <Profile />} />
        <Route exact path="/users" render={() => <UsersContainer />} />
      </div>
    </div>
  );
};

export default App;
