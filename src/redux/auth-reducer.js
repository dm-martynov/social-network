import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = "auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "auth/GET_CAPTCHA_URL_SUCCESS";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }

    case GET_CAPTCHA_URL_SUCCESS: {
      return {
        ...state,
        ...action.payload,
      };
    }

    default:
      return state;
  }
};

export const setUserData = (userId, email, login, isAuth) => {
  return {
    type: SET_USER_DATA,
    payload: { userId, email, login, isAuth },
  };
};

export const getCaptchaUrlSuccess = (captchaUrl) => {
  return {
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: { captchaUrl },
  };
};

export const setAuthUserDataThunk = () => async (dispatch) => {
  const data = await authAPI.setAuth();
  if (data.resultCode === 0) {
    const { id, email, login } = data.data;
    dispatch(setUserData(id, email, login, true));
  }
};

export const login = (email, password, rememberMe, captcha) => async (
  dispatch
) => {
  const data = await authAPI.login(email, password, rememberMe, captcha);

  if (data.resultCode === 0) {
    dispatch(setAuthUserDataThunk());
  } else {
    if (data.resultCode === 10) {
      dispatch(getCaptchaUrl());
    }
    const message = data.messages.length > 0 ? data.messages[0] : "Some error";
    dispatch(stopSubmit("login", { _error: message }));
  }
};

export const getCaptchaUrl = () => async (dispatch) => {
  const data = await securityAPI.getCaptchaUrl();
  const captchaUrl = data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export const logout = () => async (dispatch) => {
  const data = await authAPI.logout();
  if (data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false));
  }
};
