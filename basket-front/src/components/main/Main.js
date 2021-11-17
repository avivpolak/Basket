import React from "react";
import ReactDOM from "react-dom";
import "./Main.css";
import Search from "./components/Search";
import Basket from "./components/Basket";
import Groceries from "./components/Groceries";
export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: {
                Strawberry: 0,
                Blueberry: 0,
                Orange: 0,
                Banana: 0,
                Apple: 0,
                Carrot: 0,
                Celery: 0,
                Mushroom: 0,
                Green: 0,
                Pepper: 0,
                Eggs: 0,
                Cheese: 0,
                Butter: 0,
                Chicken: 0,
                Beef: 0,
                Pork: 0,
                Fish: 0,
                Rice: 0,
                Pasta: 0,
                Bread: 0,
            },
        };
    }
    updateState = (name) => {
        let newList = this.state.list;
        newList[name]++;
        this.setState({
            list: newList,
        });
    };
    render() {
        return (
            <div className="main">
                <Search />
                <Basket type="basket" title="basket" list={this.state.list} />
                <Groceries
                    type="groceries"
                    title="groceries"
                    list={this.state.list}
                    a={this.updateState}
                />
            </div>
        );
    }
}
