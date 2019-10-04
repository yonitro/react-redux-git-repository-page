import { GET_GITHUB_USER_PROPERTY } from "../Actions/types";

const initialState = {
  gitUser: {}
};

export default function(state = initialState, action) {
  if (action.type === GET_GITHUB_USER_PROPERTY) {
    return { gitUser: action.payload };
  }

  return state;
}
