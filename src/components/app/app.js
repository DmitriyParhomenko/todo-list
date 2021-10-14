import React, { Component } from 'react';

import AppHeader from '../app-header/app-header';
import AppMainSearch from '../app-main-search/app-main-search';
import AppList from '../app-list/app-list';
import AppAddForm from '../app-add-form/app-add-form';

import './app.scss';

export default class App extends Component {

    maxId = 0;

    state = {
        todoData: [
            this.createTodoItem('Drink a tea'),
            this.createTodoItem('Install template for WordPress'),
            this.createTodoItem('Change blocks in template')
        ]
    }

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: ++this.maxId
        }
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
        this.state.todoData.map((obj) => {
            if(obj.id > this.maxId) this.maxId = obj.id;
        })

        const newItem = this.createTodoItem(text)

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
        this.setState(( { todoData } ) => {

            // Update odject
            const idx = todoData.findIndex((elem) => elem.id === id);
            const oldItem = todoData[idx];
            const newItem = {
                ...oldItem,
                done: !oldItem.done
            };

            // Construct new array
            const newArray = [
                ...todoData.slice(0, idx),
                newItem,
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newArray
            };
        })
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
