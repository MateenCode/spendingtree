import { ApproveActionTypes } from "./approve.types";

const INITIAL_STATE = {
  disqualified: false
};

const approveReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ApproveActionTypes.TOGGLE_APPROVED:
      return {
        ...state,
        disqualified: true
      };
    default:
      return state;
  }
};

export default approveReducer;
