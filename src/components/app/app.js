import React, { Component } from 'react';

import AppHeader from '../app-header/app-header';
import AppMainSearch from '../app-main-search/app-main-search';
import AppList from '../app-list/app-list';
import AppAddForm from '../app-add-form/app-add-form';

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

    addItem = (text) => {
        let maxId = 0;

        this.state.todoData.map((obj) => {
            if(obj.id > maxId) maxId = obj.id;
        })

        const newItem = {
            label: text,
            important: false,
            id: ++maxId
        }

        this.setState(({ todoData }) => {
            const newArr = [
                ...todoData,
                newItem
            ];

            return {
                todoData: newArr
            }
        })
    }

    doneItem = (id) => {
        console.log('Done ', id);
    }

    importantItem = (id) => {
        console.log('Important ', id);
    }

    render() {
        return (
            <div>
                <div className="main-wrapper">
                    <AppHeader />
                    <AppMainSearch />
                    <AppList
                        todoData={this.state.todoData}
                        onRemoveItem={this.removeItem}
                        onDoneItem={this.doneItem}
                        onImportantItem={this.importantItem}
                    />
                    <AppAddForm btnName={'Add To Do'} onAddItem={this.addItem}/>
                </div>
            </div>
        );
    }
};
