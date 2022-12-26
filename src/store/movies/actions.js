import MOVIE from "../../constants";
export const SET_ALL_MOVIES = 'SET_ALL_MOVIES';

export const setAllMovies = (moviesJson) => (
    {
        type: MOVIE.SET_ALL_MOVIES,
        payload: moviesJson
    }
)
