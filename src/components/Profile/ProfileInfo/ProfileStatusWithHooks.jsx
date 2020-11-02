import React, { useState } from "react";
import { useEffect } from "react";

const ProfileStatusWithHooks = (props) => {
  let [editmode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {!editmode && (
        <div>
          <span onClick={activateEditMode}>{props.status || "------"}</span>
        </div>
      )}
      {editmode && (
        <div>
          <input
            value={status}
            onChange={onStatusChange}
            onBlur={deactivateEditMode}
            autoFocus={true}
          ></input>
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
