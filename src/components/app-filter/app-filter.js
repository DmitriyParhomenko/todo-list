import React from 'react';

import AppFilterBtn from '../app-filter-btn/app-filter-btn';

import './app-filter.scss';

const AppFilter = () => {
    return (
        <div className="app-filter">
            <AppFilterBtn name='All' />
            <AppFilterBtn name='Active' />
            <AppFilterBtn name='Done' active />
        </div>
    );
};

export default AppFilter;