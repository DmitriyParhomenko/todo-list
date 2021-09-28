import React from 'react';

import TodoListItem from "./todo-list-item";

const AppList = ({todoData}) => {

    const listItem = todoData.map(item => {

        const {id, ...itemProps} = item;

        return (
            <li key={id}>
                <TodoListItem {...itemProps}/>
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