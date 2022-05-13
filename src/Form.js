import React, { useState } from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '', quality: 0, entertainment: 0 };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ 
            value: event.target.value,
            quality: event.target.quality,
            entertainment: event.target.entertainment
        });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div class="auto">
                    <label>
                        Movie Title:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                </div>
                <div class="col-50">
                    <label>
                            Date Viewed:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                </div>
                <div class="col-75">
                    <label>
                            Entertainment Rating:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                </div>
                <div class="col-25">
                    <label>
                            Quality Rating:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                </div>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Form;
