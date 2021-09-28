import React from 'react';

import TodoListItem from "./todo-list-item";

const AppList = () => {
    return (
        <ul>
            <li><TodoListItem label={'Install template for WordPress'} important /></li>
            <li><TodoListItem label={'Change blocks'}/></li>
        </ul>
    );
};

export default AppList;