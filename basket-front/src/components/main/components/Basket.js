import React from "react";
import ReactDOM from "react-dom";
import Item from "./Item";
import "./List.css";
export default class Basket extends React.Component {
    constructor(props) {
        super(props);
        // Set initial state
        this.state = {
            list: this.props.list || ["no elements"],
        };
    }

    removeFromBasket = (name) => {
        this.props.removeFromBasket(name);
    };
    toggleChacked = (name) => {
        this.props.toggleChacked(name);
    };
    render() {
        return (
            <div className="basket">
                <div className="list">
                    <div className="title">
                        <h1>{this.props.title}</h1>
                    </div>
                    {Object.keys(this.state.list).map((name, i) => {
                        return (
                            <Item
                                quantity={this.state.list[name].quantity}
                                name={name}
                                removeFromBasket={this.removeFromBasket}
                                toggleChacked={this.toggleChacked}
                                chacked={this.state.list[name].chacked}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}
