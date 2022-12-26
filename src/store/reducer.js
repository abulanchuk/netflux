import {combineReducers} from "redux";
import {movieReducer} from "./movies/reducers";

export default combineReducers({movies: movieReducer})