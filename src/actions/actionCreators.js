import {DETAILS_REQUEST,
    DETAILS_REQUEST_FAILURE,
    DETAILS_REQUEST_SUCCESS,
    LIST_REQUEST,
    LIST_REQUEST_SUCCESS,
    LIST_REQUEST_FAILURE
} from "./actionTypes";

export const listRequest = () => ({
    type: LIST_REQUEST, payload: {}
});
export const listRequestFailure = error => ({
    type: LIST_REQUEST_FAILURE, payload: {error},
});
export const listRequestSuccess = list => ({
    type: LIST_REQUEST_SUCCESS, payload: {list},
});


export const detailsRequest = id => ({
    type: DETAILS_REQUEST, payload: {id}
});
export const detailsRequestFailure = error => ({
    type: DETAILS_REQUEST_FAILURE, payload: {error},
});
export const detailsRequestSuccess = details => ({
    type: DETAILS_REQUEST_SUCCESS, payload: {details},
});