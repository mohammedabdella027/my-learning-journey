import React, { Component } from 'react'

export default class EvenCounterDisplayer extends Component {
    render() {

        const evenCount = this.props.count % 2 === 0 ? this.props.count : this.props.count - 1;
    return (
    <>
    <h3>Even clicks counter: {evenCount}</h3>
    </>
    )
    }
}
