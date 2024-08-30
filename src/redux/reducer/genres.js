import {
  FETCH_GENRES_ERROR,
  FETCH_GENRES_SUCCESS,
  FETCH_GENRES_REQUEST,
} from "../action/types";

const INIT_STATE = {
  isSuccess: false,
  isError: false,
  isLoading: false,
  genres: []
};

const genresReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_GENRES_REQUEST:
      return {
        ...state,
        isSuccess: false,
        isError: false,
        isLoading: true,
      };
      break;
    case FETCH_GENRES_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        isError: false,
        isLoading: false,

        genres: action.payload.genres,
      };
      break;
    case FETCH_GENRES_ERROR:
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
export default genresReducer;
