import React from 'react';

import './app-remove-item.scss';

const AppRemoveItem = ({onRemoveItem}) => {
    return (
        <button type="button"
                className="btn btn-danger"
                onClick={onRemoveItem}>
            <i className="far fa-calendar-times"></i>
        </button>
    );
};

export default AppRemoveItem;