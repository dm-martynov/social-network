import React from "react";
import Preloader from "../../common/preloader/preloader";
import classes from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/user_no_image.png";
import { useState } from "react";
import ProfileDataReduxForm from "./ProfileDataForm";

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

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      {isOwner && (
        <div>
          <button onClick={goToEditMode}>edit</button>
        </div>
      )}
      <div>
        <b>Full name:</b> {profile.fullName}
      </div>
      <div>
        <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
      </div>
      {profile.lookingForAJob && (
        <div>
          <b>My professional skills:</b> {profile.lookingForAJobDescription}
        </div>
      )}
      <div>
        <b>About me:</b> {profile.aboutMe}
      </div>
      <div>
        <b>Contacts:</b>{" "}
        {Object.keys(profile.contacts).map((key) => (
          <Contact
            key={key}
            contactTitle={key}
            contactValue={profile.contacts[key]}
          />
        ))}
      </div>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={classes.contact}>
      <b>{contactTitle}:</b>
      {contactValue}
    </div>
  );
};

export default ProfileInfo;
