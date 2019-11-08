import { GET_SMURFS_LOADING, GET_SMURFS_SUCCESS, GET_SMURFS_FAILED } from '../actions';

const initialState = {
    smurfs: [],
    error: null,
    isGetting: false
};

function reducer(state = initialState, action) {
    console.log("Reducer, yo:", action);
    switch (action.type) {
        case GET_SMURFS_LOADING:
            return {
                ...state,
                isGetting: true,
                error: null
            };
        case GET_SMURFS_SUCCESS:
            return {
                ...state,
                isGetting: false,
                error: null
            }
        case GET_SMURFS_FAILED:
            return {
                ...state,
                smurfs: [],
                isGetting: false,
                error: action.payload
            };
        default:
            return state;
    };
};

export default reducer;