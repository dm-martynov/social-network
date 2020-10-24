import * as axios from "axios";
import React from "react";
import classes from "./users.module.css";
import userPhoto from "../../../src/assets/171-1717870_stockvader-predicted-cron-for-may-user-profile-icon-png.png";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then(({ data }) => {
        this.props.setUsers(data.items);
      });
  }

  render() {
    return (
      <div>
        <div>
          <span className={classes.selectedPage}>1</span>
          <span className={classes.selectedPage}>2</span>
          <span className={classes.selectedPage}>3</span>
          <span className={classes.selectedPage}>4</span>
          <span className={classes.selectedPage}>5</span>
        </div>
        {this.props.users.map((user) => (
          <div key={user.id}>
            <span>
              <div>
                <img
                  alt="avatar"
                  src={
                    user.photos.small != null ? user.photos.small : userPhoto
                  }
                  className={classes.userPhoto}
                />
              </div>
              <div>
                {user.followed ? (
                  <button onClick={() => this.props.unfollow(user.id)}>
                    Unfollow
                  </button>
                ) : (
                  <button onClick={() => this.props.follow(user.id)}>
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
        ))}
      </div>
    );
  }
}
export default Users;
