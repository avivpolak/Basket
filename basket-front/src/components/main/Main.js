import React from "react";
import ReactDOM from "react-dom";
import "./Main.css";
import Search from "./components/Search";
export default class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <Search />
                <div className="groceries"> groceries</div>
                <div className="basket"> basket</div>
            </div>
        );
    }
}
