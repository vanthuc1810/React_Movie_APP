import {
    FETCH_TOP_RATE_ERROR,
    FETCH_TOP_RATE_SUCCESS,
    FETCH_TOP_RATE_REQUEST
  } from "../action/types";
  
  const INIT_STATE = {
    isSuccess: false,
    isError: false,
    isLoading: false,
    topRates: [],
  };
  
  const topRateReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case FETCH_TOP_RATE_REQUEST:
        return {
          ...state,
          isSuccess: false,
          isError: false,
          isLoading: true,
        };
        break;
      case FETCH_TOP_RATE_SUCCESS:
        return {
          ...state,
          isSuccess: true,
          isError: false,
          isLoading: false,
  
          topRates: action.payload
        };
        break;
      case FETCH_TOP_RATE_ERROR:
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
  export default topRateReducer;
  