import axios from "axios";
import jwt_decode from "jwt-decode";

const token = localStorage.getItem("token");
export const loggedInUser = token ? jwt_decode(token) : null;

const backendURL = "http://localhost:3400/";
const httpService = axios.create({
  baseURL: backendURL,
  timeout: 20000,
  withCredentials: "include",
  headers: {
    "Content-Type": "application/json",
  },
});

httpService.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response && error.response.status === 401) {
      await httpService.post("auth/v1/refreshtoken", {
        id: loggedInUser.user._id,
      });
      return httpService(error.config);
    }
    if (error.response)
      return { error: error.response.data, status: error.response.status };
    return { error: "Network Error" };
  }
);
const logout = async () => {
  const res = await httpService.get("logout");
  if (res) {
    localStorage.removeItem(process.env.REACT_APP_PROJECT_USER);
    window.location.assign("/");
  }
};
export { httpService, logout };
