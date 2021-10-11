import React from 'react';

import './app-important-item.scss';

const AppImportantItem = ({onImportantItem}) => {
    return (
        <button type="button"
                className="btn btn-success"
                onClick={onImportantItem}>
            <i className="far fa-star"></i>
        </button>
    );
};

export default AppImportantItem;