import axios from "axios";
import { GET_GITHUB_USER_API } from "./types";
import { GithubApi, GitUser } from "../API/API";

// handling API Actions
export function getCurrentGitUserAPI(data) {
  return {
    type: GET_GITHUB_USER_API,
    payload: data
  };
}
export const fetchGitApi = () => {
  return dispatch => {
    return axios
      .get(`${GithubApi}${GitUser}/repos`)
      .then(function(response) {
        dispatch(getCurrentGitUserAPI(response.data));
      })
      .catch(function(error) {
        console.log(error);
      });
  };
};
