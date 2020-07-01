import {LIST_REQUEST, LIST_REQUEST_FAILURE, LIST_REQUEST_SUCCESS} from "../actions/actionTypes";

const initialState = {
    list : [],
    loading: false,
    error: null,
};

export default function listReducer(state=initialState,action)
{
    switch (action.type) {
        case LIST_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                list: []
            };
        case LIST_REQUEST_FAILURE:
            const {error} = action.payload;
            return {
                ...state,
                loading: false,
                error,
            };
        case LIST_REQUEST_SUCCESS:
            const {list} = action.payload;
            return {
                ...state,
                list:list,
                loading: false,
                error: null,
            };
        default:
            return state;
    }
}