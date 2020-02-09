import { combineReducers } from "redux";

import approveReducer from "../redux/approve/approve.reducer";

const rootReducer = combineReducers({ approveReducer });

export default rootReducer;
