import React from 'react';

import TodoListItem from "./todo-list-item";

const AppList = ({todoData}) => {

    const listItem = todoData.map(item => {
        return (
            <li>
                <TodoListItem {...item}/>
            </li>
        );
    });

    return (
        <ul>
            { listItem }
        </ul>
    );
};

export default AppList;