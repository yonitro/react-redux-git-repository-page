import { GET_GITHUB_USER_API } from "../Actions/types";

const initialState = {
  gitData: {}
};

export default function(state = initialState, action) {
  if (action.type === GET_GITHUB_USER_API) {
    return { gitData: action.payload };
  }

  return state;
}
