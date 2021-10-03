import React from 'react';

import './todo-list-item.scss';

const TodoListItem = ({important, label}) => {
    const style = {
        color: important ? 'white' : 'black'
    };

    return <span style={style} >{label}</span>
};

export default TodoListItem;