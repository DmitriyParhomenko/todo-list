import React, { Component } from 'react';

import AppHeader from '../app-header/app-header';
import AppMainSearch from '../app-main-search/app-main-search';
import AppList from '../app-list/app-list';

import './app.scss';

export default class App extends Component {

    state = {
        todoData: [
            {label: 'Drink a tea', important: false, id: 1},
            {label: 'Install template for WordPress', important: false, id: 2},
            {label: 'Change blocks in template', important: true, id: 3},
            {label: 'Change style in template', important: false, id: 4},
        ]
    }

    removeItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((elem) => elem.id === id);

            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newArray
            }
        })
    }

    render() {
        return (
            <div>
                <div className="main-wrapper">
                    <AppHeader />
                    <AppMainSearch />
                    <AppList
                        todoData={this.state.todoData}
                        onRemoveItem={this.removeItem} />
                </div>
            </div>
        );
    }
};
