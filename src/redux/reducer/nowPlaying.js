import {
  FETCH_NOW_PLAYING_ERROR,
  FETCH_NOW_PLAYING_SUCCESS,
  FETCH_NOW_PLAYING_REQUEST,
} from "../action/types";

const INIT_STATE = {
  isSuccess: false,
  isError: false,
  isLoading: false,
  nowPlaying: []
};

const nowPlayingMovie = (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_NOW_PLAYING_REQUEST:
      return {
        ...state,
        isSuccess: false,
        isError: false,
        isLoading: true,
      };
      break;
    case FETCH_NOW_PLAYING_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        isError: false,
        isLoading: false,
        nowPlaying: action.payload.results,
      };

      break;
    case FETCH_NOW_PLAYING_ERROR:
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
export default nowPlayingMovie;
