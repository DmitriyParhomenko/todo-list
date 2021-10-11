import React from 'react';

import './todo-list-item.scss';

const TodoListItem = ({important, label, onDoneItem, done}) => {
    const style = {
        color: important ? 'white' : 'black'
    };

    let itemClassNames = 'todo-list-item';

    if(done) {
        itemClassNames += ' done';
    }

    return <span style={style}
                   className={itemClassNames}
                   onClick={onDoneItem}
        >{label}</span>;
}

export default TodoListItem;
