import { combineReducers } from "redux";
import GitReducer from "./GitReducer";
import GitUserReducer from "./GitUserReducer";

export default combineReducers({
  //OtherReducer:OtherReducer can be combined here
  GitReducer,
  GitUserReducer
});
