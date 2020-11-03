import classes from "../ProfileInfo.module.css";
import React from "react";
import { reduxForm } from "redux-form";
import {
  createField,
  Input,
  Textarea,
} from "../../../common/FormsControls/FormsControls";

import styles from "../../../../components/common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>save</button>
      </div>
      {error && <div className={styles.formSummaryError}>{error}</div>}

      <div>
        <b>Full name:</b>{" "}
        {createField(null, "Full Name", "fullName", Input, null, null)}
      </div>
      <div>
        <b>Looking for a job:</b>
        {createField(
          null,
          null,
          "lookingForAJob",
          Input,
          { type: "checkbox" },
          null
        )}
      </div>

      <div>
        <b>My professional skills:</b>
        {createField(
          null,
          "My professional skills",
          "lookingForAJobDescription",
          Textarea,
          null,
          null
        )}
      </div>

      <div>
        <b>About me:</b>
        {createField(null, "About Me", "aboutMe", Textarea, null, null)}
      </div>
      <div>
        <b>Contacts:</b>{" "}
        {Object.keys(profile.contacts).map((key) => (
          <div key={key} className={classes.contact}>
            <b>
              {key}:{" "}
              {createField(null, key, "contacts." + key, Input, null, null)}
            </b>
          </div>

          // <Contact
          //   key={key}
          //   contactTitle={key}
          //   contactValue={profile.contacts[key]}
          // />
        ))}
      </div>
    </form>
  );
};

const ProfileDataReduxForm = reduxForm({
  form: "edit-profile",
})(ProfileDataForm);

export default ProfileDataReduxForm;
