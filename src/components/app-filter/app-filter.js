import React, { Component } from 'react';

import AppFilterBtn from '../app-filter-btn/app-filter-btn';

import './app-filter.scss';

export default class AppFilter extends Component {
    onFilterBtn = (name) => {
        console.log(name)
    };

    render() {
        return (
            <div className="app-filter">
                <AppFilterBtn label='All'
                              name='all'
                              onFilterBtn={this.onFilterBtn}
                              active />
                <AppFilterBtn label='Active'
                              name='active'
                              onFilterBtn={this.onFilterBtn} />
                <AppFilterBtn label='Done'
                              name='done'
                              onFilterBtn={this.onFilterBtn} />
            </div>
        );
    }
};
