import React, { Component } from 'react';

import './app-add-form.scss';

export default class AppAddForm extends Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();

        this.props.onAddItem(this.state.label);
        this.setState({
            label: ''
        });
    };

    render() {
        const {btnName} = this.props;

        return (
            <form className="app-add-form"
                  onSubmit={this.onSubmit} >
                <input type="text"
                       value={this.state.label}
                       className="form-control"
                       onChange={this.onLabelChange}
                       placeholder="Your task" />
                <button className="btn btn-outline-secondary" >
                    {btnName}
                </button>
            </form>
        );
    }
}
