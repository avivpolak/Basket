import React from "react";
import ReactDOM from "react-dom";
import "./Header.css";
import basket from "../../images/basket.png";

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                header
                <div className="logo">
                    <img src={basket} className="App-logo" alt="logo" />
                </div>
                <div className="slogen">
                    <h1>your very best ui </h1>
                </div>
            </div>
        );
    }
}
