import React from "react";
import ReactDOM from "react-dom";
import "./Item.css";
export default class Item extends React.Component {
    constructor(props) {
        super(props);
    }
    handleClick = () => {
        this.props.a(this.props.name);
    };
    render() {
        if (this.props.type !== "g" && !this.props.quantity) return <div></div>;

        return (
            <div onClick={this.handleClick} className="item">
                {this.props.name}
            </div>
        );
    }
}
