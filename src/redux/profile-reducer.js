import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";
const SAVE_PROFILE_SUCCESS = "SAVE_PROFILE_SUCCESS";

let initialState = {
  postsData: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
    { id: 3, message: "Blabla", likesCount: 11 },
    { id: 4, message: "Dada", likesCount: 11 },
  ],
  newPostText: "it-kamasutra.com",
  profile: null,
  status: "",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 2,
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
      };
    }

    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    case SET_STATUS:
      return { ...state, status: action.status };
    case DELETE_POST:
      return {
        ...state,
        postsData: state.postsData.filter((post) => post.id !== action.postId),
      };
    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
    case SAVE_PROFILE_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, ...action.profile },
      };

    default:
      return state;
  }
};

export const addPost = (newPostText) => {
  return {
    type: ADD_POST,
    newPostText,
  };
};

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};

export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status,
  };
};

export const deletePost = (postId) => {
  return {
    type: DELETE_POST,
    postId,
  };
};

export const savePhotoSuccess = (photos) => {
  return {
    type: SAVE_PHOTO_SUCCESS,
    photos,
  };
};

export const saveProfileSuccess = (profile) => {
  return {
    type: SAVE_PROFILE_SUCCESS,
    profile,
  };
};

export const getStatus = (userId) => async (dispatch) => {
  const data = await profileAPI.getStatus(userId);
  dispatch(setStatus(data));
};

export const updateStatus = (status) => async (dispatch) => {
  const data = await profileAPI.updateStatus(status);
  if (data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const savePhoto = (file) => async (dispatch) => {
  const data = await profileAPI.savePhoto(file);
  if (data.resultCode === 0) {
    dispatch(savePhotoSuccess(data.data.photos));
  }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const data = await profileAPI.saveProfile(profile);
  if (data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    const message = data.messages.length > 0 ? data.messages[0] : "Some error";
    dispatch(stopSubmit("edit-profile", { _error: message }));
  }
};

export const getUserProfile = (userId) => async (dispatch) => {
  const data = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(data));
};
