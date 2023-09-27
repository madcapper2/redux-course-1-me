import { combineReducers } from "redux";
import todos from './todos';
import goals from './goals';
import { loading } from './loading';  // use brackets cuz only a named export and not default export

export default combineReducers({todos, goals, loading});