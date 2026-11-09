import React, { Component } from 'react'
import CounterDisplayer from './CounterDisplayer';
import EvenCounterDisplayer from './EvenCounterDisplayer';

export default class MyCounter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            clickCount: 0,
        };
    };

    allClickCounter = () => {
        this.setState({
            clickCount: this.state.clickCount + 1
        });
    };


    render() {
    return (
    <>
    <button onClick={this.allClickCounter}>
        Count here
    </button>

    <CounterDisplayer count={this.state.clickCount} />

    <EvenCounterDisplayer count={this.state.clickCount} />
    </>
    )
}
}
