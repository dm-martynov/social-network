import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "a4a5d785-632f-415f-9622-2cc8a89c1cbb",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  deleteFollowing(userId) {
    return instance
      .delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
      .then((response) => response.data);
  },
  addFollowing(userId) {
    return instance
      .post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
      .then((response) => {
        debugger;
        return response.data;
      });
  },
};

export const headerAPI = {
  setAuth() {
    return instance
      .get("https://social-network.samuraijs.com/api/1.0/auth/me")
      .then((response) => {
        return response.data;
      });
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then((response) => {
        return response.data;
      });
  },
};
