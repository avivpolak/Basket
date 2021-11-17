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
    updateState(name) {
        alert(name);
    }
    render() {
        return (
            <div className="groceries">
                <div className="list">
                    <div className="title">
                        <h1>{this.props.title}</h1>
                    </div>
                    {this.state.list.map((name) => {
                        // Return the element. Also pass key
                        return (
                            <Item
                                name={Object.keys(name)[0]}
                                a={this.updateState}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}
