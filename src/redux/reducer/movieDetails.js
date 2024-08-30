import {
    FETCH_MOVIE_DETAILS_REQUEST,
    FETCH_MOVIE_DETAILS_SUCCESS,
    FETCH_MOVIE_DETAILS_ERROR,
  } from "../action/types";
  
  const INIT_STATE = {
    isSuccess: false,
    isError: false,
    isLoading: false,
    movie: {},
  };
  
  const movieDetailDeducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case FETCH_MOVIE_DETAILS_REQUEST:
        return {
          ...state,
          isSuccess: false,
          isError: false,
          isLoading: true,
        };
        break;
      case FETCH_MOVIE_DETAILS_SUCCESS:
        return {
          ...state,
          isSuccess: true,
          isError: false,
          isLoading: false,
  
          movie: action.payload,
        };
        break;
      case FETCH_MOVIE_DETAILS_ERROR:
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
  export default movieDetailDeducer;
  