import React from 'react';

import AppSearch from '../app-search/app-search';
import AppFilter from '../app-filter/app-filter';

import './app-main-search.scss';

const AppMainSearch = ({onSearchChange, filter, onFilterChange}) => {
    return (
        <div className="app-main-search">
            <AppSearch onSearchChange={onSearchChange} />
            <AppFilter filter={filter}
                       onFilterChange={onFilterChange} />
        </div>
    );
};

export default AppMainSearch;