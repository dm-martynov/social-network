import React from "react";
import Preloader from "../../common/preloader/preloader";
import classes from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/user_no_image.png";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };
  return (
    <div>
      <div>
        <div className={classes.descriptionBlock}>
          <img
            alt="avatar"
            src={profile.photos.large || userPhoto}
            className={classes.mainPhoto}
          />
          {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
