import MOVIE from "../../constants";


export const setAllMovies = (moviesJson) => (
    {
        type: MOVIE.SET_ALL_MOVIES,
        payload: moviesJson
    }
)


export const addMovie = (movie) => (
    {
        type: MOVIE.ADD_MOVIE,
        payload: movie
    }
)

export const filterMoviesByGenre = (moviesJson) => (
    {
        type: MOVIE.FILTER_MOVIES_BY_GENRE,
        payload: moviesJson
    }
)
