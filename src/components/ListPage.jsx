import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import '../css/bootstrap.css';
import {detailsRequest, listRequest} from "../actions/actionCreators";
import Loading from "./Loading";
import ErrorBlock from "./ErrorBlock";
ListPage.propTypes = {

};

function ListPage(props) {
    const { list, loading, error} = useSelector(state=>state.list);
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(listRequest());
    },[]);

    const onRetry = evt => {
        dispatch(listRequest());
    };

    return (
        <>
            {!loading && !error &&
        <div className="list-group">
            {list.map(item=>
            <Link to={'/'+item.id+'/details'} className="list-group-item list-group-item-action">{item.name}</Link>
            )};
        </div>
            }
            {loading && <Loading/>}
            {error && <ErrorBlock retryHandle={onRetry} />}
            </>
    );
}

export default ListPage;