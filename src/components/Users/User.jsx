import React from "react";
import classes from "./users.module.css";
import userPhoto from "../../../src/assets/user_no_image.png";
import { NavLink } from "react-router-dom";

let User = ({ user, followingInProgress, unfollow, follow }, ...props) => {
  return (
    <div key={props.key}>
      <span>
        <div>
          <NavLink to={"/profile/" + user.id}>
            <img
              alt="avatar"
              src={user.photos.small != null ? user.photos.small : userPhoto}
              className={classes.userPhoto}
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollow(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{"user.location.country"}</div>
          <div>{"user.location.city"}</div>
        </span>
      </span>
    </div>
  );
};

export default User;
