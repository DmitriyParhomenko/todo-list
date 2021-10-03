import React from 'react';
import ReactDom from 'react-dom';

import AppHeader from './components/app-header/app-header';
import AppMainSearch from './components/app-main-search/app-main-search';
import AppList from "./components/app-list/app-list";

import './index.scss'

const TodoList = () => {

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

ReactDom.render(<TodoList />, document.getElementById('root'));