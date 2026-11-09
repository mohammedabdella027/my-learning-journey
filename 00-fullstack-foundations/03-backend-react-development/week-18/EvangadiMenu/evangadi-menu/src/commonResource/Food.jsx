import React, { Component } from "react";

export default class food extends Component {
    render() {
        let {img, title, price, description,} = this.props;
    return (
        <>
        <div class="single-food">
        <div class="img">
            <img src={img} />
        </div>
        <div class="title-price">
            <h3>{title}</h3>
            <p>{price}</p>
        </div>
        <div class="food-desc">
        {description}
        </div>
        </div>
    </>
    );
    }
}
