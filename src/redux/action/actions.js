import axios from "axios";
import {
  INCREMENT,
  DECREMENT,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  FETCH_DETAILS_CONFIG_REQUEST,
  FETCH_DETAILS_CONFIG_SUCCESS,
  FETCH_DETAILS_CONFIG_ERROR,
  FETCH_NOW_PLAYING_REQUEST,
  FETCH_NOW_PLAYING_ERROR,
  FETCH_NOW_PLAYING_SUCCESS,
  FETCH_GENRES_SUCCESS,
  FETCH_GENRES_ERROR,
  FETCH_GENRES_REQUEST,
  FETCH_MOVIES_BY_GENRES_REQUEST,
  FETCH_MOVIES_BY_GENRES_SUCCESS,
  FETCH_MOVIES_BY_GENRES_ERROR,
  FETCH_TOP_RATE_REQUEST,
  FETCH_TOP_RATE_SUCCESS,
  FETCH_TOP_RATE_ERROR,
  FETCH_CREDIT_REQUEST,
  FETCH_CREDIT_SUCCESS,
  FETCH_CREDIT_ERROR,
  FETCH_COMPANY_REQUEST,
  FETCH_COMPANY_SUCCESS,
  FETCH_COMPANY_ERROR,
  FETCH_MOVIE_DETAILS_REQUEST,
  FETCH_MOVIE_DETAILS_ERROR,
  FETCH_MOVIE_DETAILS_SUCCESS,
  FETCH_REVIEWS_REQUEST,
  FETCH_REVIEWS_SUCCESS,
  FETCH_REVIEWS_ERROR,
  FETCH_VIDEO_REQUEST,
  FETCH_VIDEO_SUCCESS,
  FETCH_VIDEO_ERROR,
} from "./types";
import { type } from "@testing-library/user-event/dist/type";

export const increaseCounter = () => {
  return {
    type: INCREMENT,
  };
};

export const decreaseCounter = () => {
  return {
    type: DECREMENT,
  };
};

export const fetchAllUsers = () => {
  return async (dispatch, getState) => {
    dispatch(fetchUserRequest());
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      const data = res && res.data ? res.data : [];
      dispatch(fetchUserSuccess(data));
    } catch (error) {
      dispatch(fetchUserError);
    }
  };
};

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};
export const fetchUserSuccess = (data) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: data,
  };
};
export const fetchUserError = () => {
  return {
    type: FETCH_USER_ERROR,
  };
};

// fetch detaild img
export const fetchDetailsConfig = () => {
  return async (dispatch, getState) => {
    dispatch(fetchDetailsConfigRequest());
    try {
      const res = await axios.get(
        "https://api.themoviedb.org/3/configuration",
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTFkNGZhZDc3NDJkNDA1N2E5NzQxZjI5NjEyYWUwZSIsIm5iZiI6MTcyNDY2NTA5OS43ODA5NzEsInN1YiI6IjY2NTAwZjYzMTRlM2ZkNjk5Nzk1ODA0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pqTyatpwq_aCZfB9h1gea7f66VncWAOPypu6Mz4Ir-w",
          },
        }
      );
      const data = res.data;
      dispatch(fetchDetailsConfigSuccess(data));
    } catch (error) {
      dispatch(fetchDetailsCongfigError());
    }
  };
};

export const fetchDetailsConfigRequest = () => {
  return {
    type: FETCH_DETAILS_CONFIG_REQUEST,
  };
};
export const fetchDetailsConfigSuccess = (data) => {
  return {
    type: FETCH_DETAILS_CONFIG_SUCCESS,
    payload: data,
  };
};
export const fetchDetailsCongfigError = () => {
  return {
    type: FETCH_DETAILS_CONFIG_ERROR,
  };
};

// fetch now playing movie
export const fetchNowPlayIng = (pageNumber) => {
  return async (dispatch, getState) => {
    dispatch(fetchNowPlayIngRequest());
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageNumber}`,
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTFkNGZhZDc3NDJkNDA1N2E5NzQxZjI5NjEyYWUwZSIsIm5iZiI6MTcyNDY2NTA5OS43ODA5NzEsInN1YiI6IjY2NTAwZjYzMTRlM2ZkNjk5Nzk1ODA0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pqTyatpwq_aCZfB9h1gea7f66VncWAOPypu6Mz4Ir-w",
          },
        }
      );
      const data = res.data;
      dispatch(fetchNowPlayIngSuccess(data));
    } catch (error) {
      dispatch(fetchNowPlayIngError());
    }
  };
};

export const fetchNowPlayIngRequest = () => {
  return {
    type: FETCH_NOW_PLAYING_REQUEST,
  };
};
export const fetchNowPlayIngSuccess = (data) => {
  return {
    type: FETCH_NOW_PLAYING_SUCCESS,
    payload: data,
  };
};
export const fetchNowPlayIngError = () => {
  return {
    type: FETCH_NOW_PLAYING_ERROR,
  };
};

// fetch Genre
export const fetchGenres = () => {
  return async (dispatch, getState) => {
    dispatch(fetchGenresRequest());
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list`,
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTFkNGZhZDc3NDJkNDA1N2E5NzQxZjI5NjEyYWUwZSIsIm5iZiI6MTcyNDY2NTA5OS43ODA5NzEsInN1YiI6IjY2NTAwZjYzMTRlM2ZkNjk5Nzk1ODA0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pqTyatpwq_aCZfB9h1gea7f66VncWAOPypu6Mz4Ir-w",
          },
        }
      );
      const data = res.data;
      dispatch(fetchGenresSuccess(data));
    } catch (error) {
      dispatch(fetchGenresError());
    }
  };
};

export const fetchGenresRequest = () => {
  return {
    type: FETCH_GENRES_REQUEST,
  };
};
export const fetchGenresSuccess = (data) => {
  return {
    type: FETCH_GENRES_SUCCESS,
    payload: data,
  };
};
export const fetchGenresError = () => {
  return {
    type: FETCH_GENRES_ERROR,
  };
};

// fetch Movie by Genres
export const fetchMoviesByGenres = () => {
  return async (dispatch, getState) => {
    const genres = getState().genresReducer.genres;
    dispatch(fetchMoviesByGenresRequest());
    try {
      const requests = genres.map((genre) =>
        axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&with_genres=${genre.id}`,
          {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTFkNGZhZDc3NDJkNDA1N2E5NzQxZjI5NjEyYWUwZSIsIm5iZiI6MTcyNDY2NTA5OS43ODA5NzEsInN1YiI6IjY2NTAwZjYzMTRlM2ZkNjk5Nzk1ODA0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pqTyatpwq_aCZfB9h1gea7f66VncWAOPypu6Mz4Ir-w",
            },
          }
        )
      );
      const responses = await Promise.all(requests);
      const moviesByGenre = responses.reduce((acc, res, index) => {
        acc = [...acc, ...res.data.results];
        return acc;
      }, []);
      let myMovies = [];
      let uniqueMovies = new Set();
      for (let i = 0; i < moviesByGenre.length; i++) {
        if (!uniqueMovies.has(moviesByGenre[i].id)) {
          uniqueMovies.add(moviesByGenre[i].id);
          myMovies = [...myMovies, moviesByGenre[i]];
        }
      }
      dispatch(fetchMoviesByGenresSuccess(myMovies));
    } catch (error) {
      dispatch(fetchMoviesByGenresError());
    }
  };
};

export const fetchMoviesByGenresRequest = () => {
  return {
    type: FETCH_MOVIES_BY_GENRES_REQUEST,
  };
};
export const fetchMoviesByGenresSuccess = (data) => {
  return {
    type: FETCH_MOVIES_BY_GENRES_SUCCESS,
    payload: data,
  };
};
export const fetchMoviesByGenresError = () => {
  return {
    type: FETCH_MOVIES_BY_GENRES_ERROR,
  };
};

// fetch Top
export const fetchTopRate = () => {
  return async (dispatch, getState) => {
    dispatch(fetchTopRateRequest());
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated`,
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTFkNGZhZDc3NDJkNDA1N2E5NzQxZjI5NjEyYWUwZSIsIm5iZiI6MTcyNDY2NTA5OS43ODA5NzEsInN1YiI6IjY2NTAwZjYzMTRlM2ZkNjk5Nzk1ODA0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pqTyatpwq_aCZfB9h1gea7f66VncWAOPypu6Mz4Ir-w",
          },
        }
      );
      const data = res.data;
      dispatch(fetchTopRateSuccess(data.results));
    } catch (error) {
      dispatch(fetchTopRateError());
    }
  };
};

export const fetchTopRateRequest = () => {
  return {
    type: FETCH_TOP_RATE_REQUEST,
  };
};
export const fetchTopRateSuccess = (data) => {
  return {
    type: FETCH_TOP_RATE_SUCCESS,
    payload: data,
  };
};
export const fetchTopRateError = () => {
  return {
    type: FETCH_TOP_RATE_ERROR,
  };
};

// fetch Credit
export const fetchCredit = (movie_id) => {
  return async (dispatch, getState) => {
    dispatch(fetchCreditRequest());
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie_id}/credits`,
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTFkNGZhZDc3NDJkNDA1N2E5NzQxZjI5NjEyYWUwZSIsIm5iZiI6MTcyNDY2NTA5OS43ODA5NzEsInN1YiI6IjY2NTAwZjYzMTRlM2ZkNjk5Nzk1ODA0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pqTyatpwq_aCZfB9h1gea7f66VncWAOPypu6Mz4Ir-w",
          },
        }
      );
      const data = res.data;
      dispatch(fetchCreditSuccess(data.cast));
    } catch (error) {
      dispatch(fetchCreditError());
    }
  };
};

export const fetchCreditRequest = () => {
  return {
    type: FETCH_CREDIT_REQUEST,
  };
};
export const fetchCreditSuccess = (data) => {
  return {
    type: FETCH_CREDIT_SUCCESS,
    payload: data,
  };
};
export const fetchCreditError = () => {
  return {
    type: FETCH_CREDIT_ERROR,
  };
};

// fetch movie details
export const fetchMovieDetails = (movie_id) => {
  return async (dispatch, getState) => {
    dispatch(fetchMovieDetailsRequest());
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie_id}`,
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTFkNGZhZDc3NDJkNDA1N2E5NzQxZjI5NjEyYWUwZSIsIm5iZiI6MTcyNDY2NTA5OS43ODA5NzEsInN1YiI6IjY2NTAwZjYzMTRlM2ZkNjk5Nzk1ODA0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pqTyatpwq_aCZfB9h1gea7f66VncWAOPypu6Mz4Ir-w",
          },
        }
      );
      const data = res.data;
      dispatch(fetchMovieDetailsSuccess(data));
    } catch (error) {
      dispatch(fetchMovieDetailsError());
    }
  };
};

export const fetchMovieDetailsRequest = () => {
  return {
    type: FETCH_MOVIE_DETAILS_REQUEST,
  };
};
export const fetchMovieDetailsSuccess = (data) => {
  return {
    type: FETCH_MOVIE_DETAILS_SUCCESS,
    payload: data,
  };
};
export const fetchMovieDetailsError = () => {
  return {
    type: FETCH_MOVIE_DETAILS_ERROR,
  };
};

// fetch company
export const fetchCompany = (movie_id) => {
  return async (dispatch, getState) => {
    dispatch(fetchCompanyRequest());
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie_id}/credits`,
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTFkNGZhZDc3NDJkNDA1N2E5NzQxZjI5NjEyYWUwZSIsIm5iZiI6MTcyNDY2NTA5OS43ODA5NzEsInN1YiI6IjY2NTAwZjYzMTRlM2ZkNjk5Nzk1ODA0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pqTyatpwq_aCZfB9h1gea7f66VncWAOPypu6Mz4Ir-w",
          },
        }
      );
      const data = res.data;
      dispatch(fetchCompanySuccess(data.cast));
    } catch (error) {
      dispatch(fetchCompanyError());
    }
  };
};

export const fetchCompanyRequest = () => {
  return {
    type: FETCH_COMPANY_REQUEST,
  };
};
export const fetchCompanySuccess = (data) => {
  return {
    type: FETCH_COMPANY_SUCCESS,
    payload: data,
  };
};
export const fetchCompanyError = () => {
  return {
    type: FETCH_COMPANY_ERROR,
  };
};

// fetch review
export const fetchReviews = (movie_id) => {
  return async (dispatch, getState) => {
    dispatch(fetchReviewsRequest());
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie_id}/reviews`,
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTFkNGZhZDc3NDJkNDA1N2E5NzQxZjI5NjEyYWUwZSIsIm5iZiI6MTcyNDY2NTA5OS43ODA5NzEsInN1YiI6IjY2NTAwZjYzMTRlM2ZkNjk5Nzk1ODA0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pqTyatpwq_aCZfB9h1gea7f66VncWAOPypu6Mz4Ir-w",
          },
        }
      );
      const data = res.data;
      dispatch(fetchReviewsSuccess(data.results));
    } catch (error) {
      dispatch(fetchReviewsError());
    }
  };
};

export const fetchReviewsRequest = () => {
  return {
    type: FETCH_REVIEWS_REQUEST,
  };
};
export const fetchReviewsSuccess = (data) => {
  return {
    type: FETCH_REVIEWS_SUCCESS,
    payload: data,
  };
};
export const fetchReviewsError = () => {
  return {
    type: FETCH_REVIEWS_ERROR,
  };
};

// fetch Videos
export const fetchVideos = (movie_id) => {
  return async (dispatch, getState) => {
    dispatch(fetchVideosRequest());
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie_id}/videos`,
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTFkNGZhZDc3NDJkNDA1N2E5NzQxZjI5NjEyYWUwZSIsIm5iZiI6MTcyNDY2NTA5OS43ODA5NzEsInN1YiI6IjY2NTAwZjYzMTRlM2ZkNjk5Nzk1ODA0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pqTyatpwq_aCZfB9h1gea7f66VncWAOPypu6Mz4Ir-w",
          },
        }
      );
      const data = res.data;
      dispatch(fetchVideosSuccess(data.results));
    } catch (error) {
      dispatch(fetchVideosError());
    }
  };
};

export const fetchVideosRequest = () => {
  return {
    type: FETCH_VIDEO_REQUEST,
  };
};
export const fetchVideosSuccess = (data) => {
  return {
    type: FETCH_VIDEO_SUCCESS,
    payload: data,
  };
};
export const fetchVideosError = () => {
  return {
    type: FETCH_VIDEO_ERROR,
  };
};
