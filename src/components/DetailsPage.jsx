import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";
import {detailsRequest} from "../actions/actionCreators";
import Loading from "./Loading";
import ErrorBlock from "./ErrorBlock";

DetailsPage.propTypes = {
    
};

function DetailsPage(props) {
    const { match } = props;
    const { details, loading, error} = useSelector(state=>state.details);
    const dispatch = useDispatch();
    useEffect(()=>{

        dispatch(detailsRequest(match.params.id));
    },[]);

    const onRetry = evt => {
        dispatch(detailsRequest(match.params.id));
    };
    return (
        <>
        {details && <div className={"card"} >
            <div className={"card-body"}>
                <h5 className={"card-title"}>{details.name}</h5>
                {details.price && <p>Цена: {details.price} руб.</p>}
            </div>
        </div>}
        {loading && <Loading/>}
        {error && <ErrorBlock retryHandle={onRetry} />}
        </>
    );
}

export default DetailsPage;