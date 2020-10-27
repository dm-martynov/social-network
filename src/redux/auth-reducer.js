import { headerAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    }

    default:
      return state;
  }
};

export const setUserData = (userId, email, login) => {
  return {
    type: SET_USER_DATA,
    data: { userId, email, login },
  };
};

export const setAuthUserDataThunk = () => {
  return (dispatch) => {
    headerAPI.setAuth().then((data) => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setUserData(id, email, login));
      }
    });
  };
};
