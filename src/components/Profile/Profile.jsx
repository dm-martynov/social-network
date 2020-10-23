import React from "react";

import MyPostsContainer from "./MyPosts/MyPostsContainer";
// import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => (
  <div>
    <ProfileInfo />
    <MyPostsContainer />
  </div>
);

export default Profile;
