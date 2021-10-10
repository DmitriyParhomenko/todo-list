import React, { Component } from 'react';

import './todo-list-item.scss';

export default class TodoListItem extends Component {

    state = {
        done: false
    }

    onClickItem = () => {
        this.setState(({done}) => {
            return {
                done: !done
            }
        })
    }

    render() {
        const {important, label} = this.props;
        const {done} = this.state;

        const style = {
            color: important ? 'white' : 'black'
        };

        let itemClassNames = 'todo-list-item';

        if(done) {
            itemClassNames += ' done';
        }

        return <span style={style}
                     className={itemClassNames}
                     onClick={ this.onClickItem }
                >{label}</span>;
    }
}
