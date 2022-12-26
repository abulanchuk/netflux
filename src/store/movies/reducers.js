import MOVIE from "../../constants";

const initialState = {
    allMovies: []
}


export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case MOVIE.SET_ALL_MOVIES:
            console.log("Setting ", action.payload);
            return {
                ...state, allMovies: action.payload
            }
        case MOVIE.ADD_MOVIE:
            let allMovies = state.allMovies.slice(); // TODO: allMovies is undefined
            allMovies.push(action.payload);

            return {
                ...state, allMovies: allMovies
            }

        default:
            return state;
    }
}