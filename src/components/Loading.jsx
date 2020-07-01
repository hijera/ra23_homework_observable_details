import React from 'react';
import PropTypes from 'prop-types';
import '../css/bootstrap.css';

Loading.propTypes = {

};

function Loading(props) {
    return (
        <div className="alert alert-info" role="alert">
        <div className="spinner-border text-danger" role="status">
            <span className="sr-only">Загружается...</span>
        </div>
        </div>
    );
}

export default Loading;