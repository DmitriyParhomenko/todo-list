import React, { Component } from 'react';

import './app-search.scss';

export default class AppSearch extends Component {
    state = {
        term: ''
    };

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onSearchChange(term);
    };

    render() {
        return (
            <input type="text"
                   placeholder="Search"
                   className="app-search"
                   value={this.state.term}
                   onChange={this.onSearchChange}
            />
        );
    }
}