import React from "react";
import MyPosts from "./MyPosts/MyPosts";
// import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => (
  <div>
    <ProfileInfo />
    <MyPosts postsData={props.profileData} dispatch={props.dispatch} />
  </div>
);

export default Profile;
