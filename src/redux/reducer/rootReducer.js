import { combineReducers } from "redux";
import detailsConfigReducer from "./detailsConfig";
import nowPlayingMovie from "./nowPlaying";
import genresReducer from "./genres";
import movieReducer from "./movies";
import topRateReducer from "./topRate";
import creditReducer from "./credit";
import movieDetailDeducer from "./movieDetails";
import reviewsReducer from "./reviews";
import videoReducer from "./video";
const rootReducer = combineReducers({
    detailsConfig: detailsConfigReducer,
    nowPlaying: nowPlayingMovie,
    genresReducer: genresReducer,
    movieReducer: movieReducer,
    topRateReducer: topRateReducer,
    creditReducer: creditReducer,
    movieDetailDeducer: movieDetailDeducer,
    reviewsReducer: reviewsReducer,
    videoReducer: videoReducer
});

export default rootReducer;