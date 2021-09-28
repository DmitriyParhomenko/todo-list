import React from 'react';
import ReactDom from 'react-dom';

import AppHeader from './components/app-header';
import AppSearch from './components/app-search';
import AppList from "./components/app-list";

const TodoList = () => {
    return (
        <div>
            <AppHeader />
            <AppSearch />
            <AppList />
        </div>
    );
};

ReactDom.render(<TodoList />, document.getElementById('root'));