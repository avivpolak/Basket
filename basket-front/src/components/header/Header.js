import React from "react";
import ReactDOM from "react-dom";
import "./Header.css";
import basket from "../../images/basket.png";

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="logo">
                    <img src={basket} className="App-logo" alt="logo" />
                </div>
                <div className="slogen">
                    <h1>Basket App</h1>
                </div>
            </div>
        );
    }
}
