import {
  FETCH_MOVIES_BY_GENRES_REQUEST,
  FETCH_MOVIES_BY_GENRES_SUCCESS,
  FETCH_MOVIES_BY_GENRES_ERROR,
} from "../action/types";

const INIT_STATE = {
  isSuccess: false,
  isError: false,
  isLoading: false,
  movies: [],
};

const movieReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_MOVIES_BY_GENRES_REQUEST:
      return {
        ...state,
        isSuccess: false,
        isError: false,
        isLoading: true,
      };
      break;
    case FETCH_MOVIES_BY_GENRES_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        isError: false,
        isLoading: false,

        movies: action.payload
      };
      break;
    case FETCH_MOVIES_BY_GENRES_ERROR:
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
export default movieReducer;
