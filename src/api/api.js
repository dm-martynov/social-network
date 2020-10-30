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
      .delete(`follow/${userId}`)
      .then((response) => response.data);
  },
  addFollowing(userId) {
    return instance.post(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },
};

export const authAPI = {
  setAuth() {
    return instance.get("auth/me").then((response) => {
      return response.data;
    });
  },
  login(email, password, rememberMe = false) {
    return instance
      .post("auth/login", { email, password, rememberMe })
      .then((response) => {
        return response.data;
      });
  },
  logout() {
    return instance.delete("auth/login").then((response) => {
      return response.data;
    });
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => {
      return response.data;
    });
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`).then((response) => {
      return response.data;
    });
  },
  updateStatus(status) {
    return instance
      .put(`profile/status/`, { status: status })
      .then((response) => {
        return response.data;
      });
  },
};
