import axios from "axios";
import { GET_GITHUB_USER_PROPERTY } from "./types";
import { GithubApi, GitUser } from "../API/API";

// handling User Actions
export function getCurrentGitUserProperty(data) {
  return {
    type: GET_GITHUB_USER_PROPERTY,
    payload: data
  };
}
export const fetchGitUser = () => {
  return dispatch => {
    return axios
      .get(`${GithubApi}${GitUser}`)
      .then(function(response) {
        dispatch(getCurrentGitUserProperty(response.data));
      })
      .catch(function(error) {
        console.log(error);
      });
  };
};
