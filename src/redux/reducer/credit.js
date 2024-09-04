import {
  FETCH_CREDIT_REQUEST,
  FETCH_CREDIT_SUCCESS,
  FETCH_CREDIT_ERROR,
} from "../action/types";

const INIT_STATE = {
  isSuccess: false,
  isError: false,
  isLoading: false,
  credits: [],
};

const creditReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_CREDIT_REQUEST:
      return {
        ...state,
        isSuccess: false,
        isError: false,
        isLoading: true,
      };
      break;
    case FETCH_CREDIT_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        isError: false,
        isLoading: false,

        credits: action.payload,
      };
      break;
    case FETCH_CREDIT_ERROR:
      return {
        ...state,
        isSuccess: false,
        isError: true,
        isLoading: false,
      };
      break;

    default:
      return state;
      break;
  }
};
export default creditReducer;
