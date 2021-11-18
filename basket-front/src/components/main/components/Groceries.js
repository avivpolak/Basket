import React from "react";
import ReactDOM from "react-dom";
import Item from "./Item";
import "./List.css";
export default class Groceries extends React.Component {
    constructor(props) {
        super(props);
        // Set initial state
        this.state = {
            groceries: this.props.groceries || ["no elements"],
        };
    }
    updateState = (name) => {
        this.props.addToBasket(name);
    };
    render() {
        return (
            <div className="groceries">
                <div className="list">
                    <div className="title">
                        <h1>{this.props.title}</h1>
                    </div>
                    {this.state.groceries.map((name) => {
                        return (
                            <Item
                                type="groceries"
                                name={name}
                                a={this.updateState}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}
