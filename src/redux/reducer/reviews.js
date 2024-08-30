import {
  FETCH_REVIEWS_REQUEST,
  FETCH_REVIEWS_SUCCESS,
  FETCH_REVIEWS_ERROR,
} from "../action/types";

const INIT_STATE = {
  isSuccess: false,
  isError: false,
  isLoading: false,
  reviews: [],
};

const reviewsReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_REVIEWS_REQUEST:
      return {
        ...state,
        isSuccess: false,
        isError: false,
        isLoading: true,
      };
      break;
    case FETCH_REVIEWS_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        isError: false,
        isLoading: false,

        reviews: action.payload,
      };
      break;
    case FETCH_REVIEWS_ERROR:
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
export default reviewsReducer;
