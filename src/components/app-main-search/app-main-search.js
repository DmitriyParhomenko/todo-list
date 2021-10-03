import React from 'react';

import AppSearch from '../app-search/app-search';
import AppFilter from '../app-filter/app-filter';

import './app-main-search.scss';

const AppMainSearch = () => {
    return (
        <div className="app-main-search">
            <AppSearch />
            <AppFilter />
        </div>
    );
};

export default AppMainSearch;