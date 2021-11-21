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
        ],
        term: '',
        filter: 'all'
    }

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: ++this.maxId
        }
    }

    changeStateToDoData(id, propName) {
        this.setState(( { todoData } ) => {
            // Update odject
            const idx = todoData.findIndex((elem) => elem.id === id);
            const oldItem = todoData[idx];

            const newItem = {
                ...oldItem,
                [propName]: !oldItem[propName]
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
        this.changeStateToDoData(id, 'done');
    }

    importantItem = (id) => {
        this.changeStateToDoData(id, 'important');
    }

    onSearchChange = (term) => {
        this.setState({ term });
    }

    onFilterChange = (filter) => {
        this.setState({ filter });
    }

    search(items, term) {
        if(term.length === 0) return items;

        return items.filter((item) => {
            return item.label
                .toLowerCase()
                .indexOf(term.toLowerCase()) > -1;
        });
    }

    filter(items, filter) {
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items;
        }
    }

    render() {
        const { todoData, term, filter } = this.state;

        const visibleItem = this.filter(
            this.search(todoData, term),
            filter
        );

        return (
            <div>
                <div className="main-wrapper">
                    <AppHeader todoData={todoData} />
                    <AppMainSearch onSearchChange={this.onSearchChange}
                                   onFilterChange={this.onFilterChange}
                                   filter={filter}
                    />
                    <AppList
                        todoData={visibleItem}
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
