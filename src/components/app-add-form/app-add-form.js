import React from 'react';

import './app-add-form.scss';

const AppAddForm = ({btnName, onAddItem}) => {
    return (
        <div className="app-add-form">
            <button type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => onAddItem('Hello')}>
                {btnName}
            </button>
        </div>
    )
}

export default AppAddForm;