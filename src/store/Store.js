import thunkMiddleware from "redux-thunk";

import Reducer from "./reducer";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: Reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware)
});