import React from "react";
import ReactDOM from "react-dom";
import "./Header.css";

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                header
                <div className="logo">logo </div>
                <div className="slogen"> slogen</div>
            </div>
        );
    }
}
