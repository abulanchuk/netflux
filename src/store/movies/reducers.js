import MOVIE from "../../constants";

const initialState = {
    allMovies: [],
    currentMovies: []
}


export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case MOVIE.SET_ALL_MOVIES:
            return {
                ...state, allMovies: action.payload, currentMovies:action.payload
            }
        case MOVIE.ADD_MOVIE:
            let allMovies = state.allMovies.slice(); // TODO: allMovies is undefined
            allMovies.push(action.payload);

            return {
                ...state, allMovies: allMovies
            }
        case MOVIE.FILTER_MOVIES_BY_GENRE:
            return {
                ...state, currentMovies: action.payload
            }

        default:
            return state;
    }
}