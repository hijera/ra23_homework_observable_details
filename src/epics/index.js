import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, tap, retry, filter, switchMap, catchError } from 'rxjs/operators';
import {DETAILS_REQUEST, LIST_REQUEST} from "../actions/actionTypes";
import {
    detailsRequest,
    detailsRequestFailure,
    detailsRequestSuccess,
    listRequestFailure,
    listRequestSuccess
} from '../actions/actionCreators';

export const listRequestEpic = action$ => action$.pipe(
    ofType(LIST_REQUEST),
    switchMap(o => ajax.getJSON(`${process.env.REACT_APP_LIST_URL}`).pipe(
        retry(5),
        map(o => listRequestSuccess(o)),
        catchError(e => of(listRequestFailure(e))),
    )),
);

export const detailsRequestEpic = action$ => action$.pipe(
    ofType(DETAILS_REQUEST),
    map(o => o.payload.id),
    switchMap(o => ajax.getJSON(`${process.env.REACT_APP_DETAILS_URL.replace(":id",o)}`).pipe(
        retry(5),
        map(o => detailsRequestSuccess(o)),
        catchError(e => of(detailsRequestFailure(e))),
    )),
);