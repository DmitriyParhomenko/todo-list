import React from 'react';

import './app-filter-btn.scss';

const AppFilterBtn = ({name, active = false}) => {
    return (
        <button type="button"
                className={`btn app-filter-btn ${active ? 'btn-primary' : 'btn-outline-secondary'}`}>
            {name}
        </button>
    );
};

export default AppFilterBtn;