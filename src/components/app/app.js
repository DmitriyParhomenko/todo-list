import React from 'react';

import AppHeader from '../app-header/app-header';
import AppMainSearch from '../app-main-search/app-main-search';
import AppList from '../app-list/app-list';

import './app.scss';

const App = () => {

    const todoData = [
        {label: 'Drink a tea', important: false, id: 1},
        {label: 'Install template for WordPress', important: false, id: 2},
        {label: 'Change blocks in template', important: true, id: 3},
        {label: 'Change style in template', important: false, id: 4},
    ];

    return (
        <div>
            <div className="main-wrapper">
                <AppHeader />
                <AppMainSearch/>
                <AppList todoData={todoData}/>
            </div>
        </div>
    );
};

export default App;