import React, { Component } from "react";

class CounterDisplayer extends Component {
    render() {
    return (
    <div>
    <h3>Number of Clicks: {this.props.count}</h3>
    </div>
    );
    }
}

export default CounterDisplayer;