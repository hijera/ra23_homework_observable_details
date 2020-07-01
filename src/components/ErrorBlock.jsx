import React from 'react';
import PropTypes from 'prop-types';

ErrorBlock.propTypes = {
    
};

function ErrorBlock(props) {
    const { retryHandle }  = props;
    const retryAction = (evt) => {
        evt.preventDefault();
        retryHandle(evt);
    }
    return (
        <div className="alert alert-danger" role="alert">
            <span className="error-span" >Произошла ошибка!</span>
            <button type="button" className="btn btn-dark" onClick={retryAction}>Повторить запрос</button>
        </div>
    );
}

export default ErrorBlock;