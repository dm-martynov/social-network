import React from "react";
import Preloader from "../../common/preloader/preloader";
import classes from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import userPhoto from "../../../assets/user_no_image.png";
import { useState } from "react";
import ProfileDataReduxForm from "./ProfileData/ProfileDataForm";
import { ProfileData } from "./ProfileData/ProfileData";

const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
}) => {
  const [editMode, setEditMode] = useState(false);
  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    saveProfile(formData);
    setEditMode(false);
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
          {editMode ? (
            <ProfileDataReduxForm
              profile={profile}
              initialValues={profile}
              onSubmit={onSubmit}
            />
          ) : (
            <ProfileData
              goToEditMode={() => setEditMode(true)}
              isOwner={isOwner}
              profile={profile}
            />
          )}

          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
