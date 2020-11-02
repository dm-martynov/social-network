import React from "react";

import MyPostsContainer from "./MyPosts/MyPostsContainer";
// import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => (
  <div>
    <ProfileInfo
      savePhoto={props.savePhoto}
      isOwner={props.isOwner}
      profile={props.profile}
      status={props.status}
      updateStatus={props.updateStatus}
    />
    <MyPostsContainer />
  </div>
);

export default Profile;
