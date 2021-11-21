import React, { Component } from 'react';

import './app-filter.scss';

export default class AppFilter extends Component {
    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'}
    ];

    render() {
        const {filter, onFilterChange} = this.props;

        const buttons = this.buttons.map(({name, label}) => {
            const isActive = filter === name;
            const clazz = isActive ? 'btn-primary' : 'btn-outline-secondary';

            return (
                <button type="button"
                        className={`btn app-filter-btn ${clazz}`}
                        key={name}
                        onClick={() => onFilterChange(name)}>
                    {label}
                </button>
            )
        });

        return (
            <div className="app-filter">
                {buttons}
            </div>
        );
    }
};
