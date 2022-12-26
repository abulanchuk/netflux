import {SET_ALL_MOVIES} from ".//actions";

const initialState = {
    allMovies: []
}


export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALL_MOVIES:
            console.log("Setting ", action.payload);
            return {
                ...state, allMovies: action.payload
            }

        default:
            return state;
    }
}