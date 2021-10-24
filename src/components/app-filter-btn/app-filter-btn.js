import React from 'react';

import './app-filter-btn.scss';

const AppFilterBtn = ({label, name, active = false, onFilterBtn}) => {
    return (
        <button type="button"
                className={`btn app-filter-btn ${active ? 'btn-primary' : 'btn-outline-secondary'}`}
                onClick={() => onFilterBtn(name)} >
            {label}
        </button>
    );
};

export default AppFilterBtn;