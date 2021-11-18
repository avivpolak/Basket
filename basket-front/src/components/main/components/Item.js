import React from "react";
import ReactDOM from "react-dom";
import "./Item.css";
export default class Item extends React.Component {
    constructor(props) {
        super(props);
    }
    handleClick = () => {
        if (this.props.type !== "groceries") {
            this.props.toggleChacked(this.props.name);
        } else {
            this.props.a(this.props.name);
        }
    };
    render() {
        if (this.props.type !== "groceries") {
            if (!this.props.quantity) {
                return <div></div>; // i would like to return nothing but i corrently cant
            } else if (!this.props.chacked) {
                return (
                    <div onClick={this.handleClick} className="item">
                        <b>
                            {this.props.quantity}
                            {this.props.name}
                        </b>
                    </div>
                );
            } else {
                return (
                    <div onClick={this.handleClick} className="item">
                        {this.props.quantity}
                        {this.props.name}
                    </div>
                );
            }
        }

        return (
            <div onClick={this.handleClick} className="item">
                {this.props.name}
            </div>
        );
    }
}
