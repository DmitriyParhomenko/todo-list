import React from 'react';

import AppSearch from '../app-search/app-search';
import AppFilter from '../app-filter/app-filter';

import './app-main-search.scss';

const AppMainSearch = ({todoData, onSearchChange}) => {
    return (
        <div className="app-main-search">
            <AppSearch onSearchChange={onSearchChange}/>
            <AppFilter todoData={todoData} />
        </div>
    );
};

export default AppMainSearch;