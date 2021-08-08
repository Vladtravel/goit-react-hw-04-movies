import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "b65045320802bba8dd2152de82b219b4";

function fetchTranding(page = 1) {
  return axios
    .get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US&page=${page}`
    )
    .then((response) => {
      return response.data;
    });
}
function fetchQuery(search) {
  return axios
    .get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${search}`
    )
    .then((response) => {
      return response.data;
    });
}
function fetchMovie(id) {
  return axios
    .get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`)
    .then((response) => {
      return response.data;
    });
}
function fetchActors(id) {
  return axios
    .get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
    .then((response) => {
      return response.data;
    });
}
function fetchReview(id) {
  return axios
    .get(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`)
    .then((response) => {
      return response.data;
    });
}
export { fetchTranding, fetchQuery, fetchMovie, fetchActors, fetchReview };
