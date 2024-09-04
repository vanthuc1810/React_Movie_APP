import {
  FETCH_DETAILS_CONFIG_ERROR,
  FETCH_DETAILS_CONFIG_SUCCESS,
  FETCH_DETAILS_CONFIG_REQUEST,
} from "../action/types";

const INIT_STATE = {
  isSuccess: false,
  isError: false,
  isLoading: false,
  secure_base_url: "",
  backdrop_sizes: "",
  logo_sizes: "",
  poster_sizes: "",
};

const detailsConfigReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_DETAILS_CONFIG_REQUEST:
      return {
        ...state,
        isSuccess: false,
        isError: false,
        isLoading: true,
      };
      break;
    case FETCH_DETAILS_CONFIG_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        isError: false,
        isLoading: false,
        
        secure_base_url: action.payload.images.secure_base_url,
        backdrop_sizes: action.payload.images.backdrop_sizes,
        logo_sizes: action.payload.images.logo_sizes,
        poster_sizes: action.payload.images.poster_sizes,
      };
      break;
    case FETCH_DETAILS_CONFIG_ERROR:
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
export default detailsConfigReducer;
