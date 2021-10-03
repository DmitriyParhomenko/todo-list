import React from 'react';

import AppMainTitle from '../app-main-title/app-main-title';
import AppInfoToDo from '../app-info-to-do/app-info-to-do';

import './app-header.scss';

const AppHeader = () => {
    return (
        <div className="app-header">
            <AppMainTitle title="Todo List" />
            <AppInfoToDo countToDo='2' countDone='4' />
        </div>
    );
};

export default AppHeader;