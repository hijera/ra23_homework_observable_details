import {
    DETAILS_REQUEST,
    DETAILS_REQUEST_FAILURE, DETAILS_REQUEST_SUCCESS,
    LIST_REQUEST,
    LIST_REQUEST_FAILURE,
    LIST_REQUEST_SUCCESS
} from "../actions/actionTypes";

const initialState = {
    details : null,
    loading: false,
    error: null,
};

export default function detailsReducer(state=initialState,action)
{
    switch (action.type) {
        case DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                details: null,
            };
        case DETAILS_REQUEST_FAILURE:
            const {error} = action.payload;
            return {
                ...state,
                loading: false,
                error,
            };
        case DETAILS_REQUEST_SUCCESS:
            const {details} = action.payload;
            return {
                ...state,
                details,
                loading: false,
                error: null,
            };
        default:
            return state;
    }
}