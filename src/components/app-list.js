import React from 'react';

import TodoListItem from "./todo-list-item";

const AppList = () => {
    return (
        <ul>
            <li><TodoListItem /></li>
            <li><TodoListItem /></li>
        </ul>
    );
};

export default AppList;