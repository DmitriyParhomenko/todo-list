import React from 'react';

import TodoListItem from '../todo-list-item/todo-list-item';
import AppRemoveItem from '../app-remove-item/app-remove-item';
import AppImportantItem from '../app-important-item/app-important-item';

import './app-list.scss';

const AppList = ({todoData, onRemoveItem}) => {

    const listItem = todoData.map(item => {

        const {id, important, ...itemProps} = item;

        return (
            <li key={id} className={`list-group-item ${important  ? 'active' : ''}`}>
                <TodoListItem important={important} {...itemProps} />
                <div className="list-group-item-actions">
                    <AppRemoveItem onRemoveItem={() => onRemoveItem(id)} />
                    <AppImportantItem />
                </div>
            </li>
        );
    });

    return (
        <ul className="list-group app-list">
            { listItem }
        </ul>
    );
};

export default AppList;