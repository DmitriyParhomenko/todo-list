import React from 'react';

import AppMainTitle from '../app-main-title/app-main-title';
import AppInfoToDo from '../app-info-to-do/app-info-to-do';

import './app-header.scss';

const AppHeader = ({todoData}) => {
    const doneCount = todoData.filter(el => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
        <div className="app-header">
            <AppMainTitle title="Todo List" />
            <AppInfoToDo countToDo={todoCount} countDone={doneCount} />
        </div>
    );
};

export default AppHeader;