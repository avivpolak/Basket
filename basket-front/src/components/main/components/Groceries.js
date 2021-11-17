import React from "react";
import ReactDOM from "react-dom";
import Item from "./Item";
import "./List.css";
export default class Groceries extends React.Component {
    constructor(props) {
        super(props);
        // Set initial state
        this.state = {
            list: this.props.list || ["no elements"],
        };
    }
    updateState = (name) => {
        this.props.a(name);
    };
    render() {
        return (
            <div className="groceries">
                <div className="list">
                    <div className="title">
                        <h1>{this.props.title}</h1>
                    </div>
                    {Object.keys(this.state.list).map((name) => {
                        return (
                            <Item type="g" name={name} a={this.updateState} />
                        );
                    })}
                </div>
            </div>
        );
    }
}
