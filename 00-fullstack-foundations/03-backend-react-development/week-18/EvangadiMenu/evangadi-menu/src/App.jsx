import React, { Component } from "react";
import './App.css'
import { foodData } from "./commonResource/foodData.js";
import Food from "./commonResource/Food.jsx";

export default class App extends Component {
    render() {
    return (
    <>
    <div class="all-container">
    {/* <!-- header start --> */}
    <header class="title">
    <h1>Evangadi Menu</h1>
    <div></div>
    </header>
    {/* <!-- header end --> */}

    {/* <!-- all food items container start --> */}
    <div class="foods-container">
        {foodData.map(({img,title, price, description}, i) => {
            return (
                <Food 
                key={i}
                img={img}
                title={title}
                price={price}
                description={description}
                />
            )
        })}
    </div>
    </div>
    </>
    );
    }
}
