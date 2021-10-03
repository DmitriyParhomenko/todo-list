import React from 'react';

import './app-remove-item.scss';

const AppRemoveItem = () => {
    return (
        <button type="button"
                className="btn btn-danger">
            <i className="far fa-calendar-times"></i>
        </button>
    );
};

export default AppRemoveItem;