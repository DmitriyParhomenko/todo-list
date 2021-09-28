import React from 'react';
import ReactDom from 'react-dom';

import AppHeader from './components/app-header';
import AppSearch from './components/app-search';
import AppList from "./components/app-list";

const TodoList = () => {

    const todoData = [
        {label: 'Drink a tea', important: false, id: 1},
        {label: 'Install template for WordPress', important: true, id: 2},
        {label: 'Change blocks in template', important: false, id: 3},
        {label: 'Change style in template', important: false, id: 4},
    ];

    return (
        <div>
            <AppHeader />
            <AppSearch />
            <AppList todoData={todoData}/>
        </div>
    );
};

ReactDom.render(<TodoList />, document.getElementById('root'));