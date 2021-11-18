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
            basket: {
                Strawberry: { quantity: 0, chacked: false },
                Blueberry: { quantity: 0, chacked: false },
                Orange: { quantity: 0, chacked: false },
                Banana: { quantity: 0, chacked: false },
                Apple: { quantity: 0, chacked: false },
                Carrot: { quantity: 0, chacked: false },
                Celery: { quantity: 0, chacked: false },
                Mushroom: { quantity: 0, chacked: false },
                Green: { quantity: 0, chacked: false },
                Pepper: { quantity: 0, chacked: false },
                Eggs: { quantity: 0, chacked: false },
                Cheese: { quantity: 0, chacked: false },
                Butter: { quantity: 0, chacked: false },
                Chicken: { quantity: 0, chacked: false },
                Beef: { quantity: 0, chacked: false },
                Pork: { quantity: 0, chacked: false },
                Fish: { quantity: 0, chacked: false },
                Rice: { quantity: 0, chacked: false },
                Pasta: { quantity: 0, chacked: false },
                Bread: { quantity: 0, chacked: false },
            },

            groceries: [
                "Strawberry",
                "Blueberry",
                "Orange",
                "Banana",
                "Apple",
                "Carrot",
                "Celery",
                "Mushroom",
                "Green",
                "Pepper",
                "Eggs",
                "Cheese",
                "Butter",
                "Chicken",
                "Beef",
                "Pork",
                "Fish",
                "Rice",
                "Pasta",
                "Bread",
            ],
        };
    }
    addToBasket = (name) => {
        let newList = this.state.basket;
        newList[name].quantity++;
        this.setState({
            basket: newList,
        });
    };
    removeFromBasket = (name) => {
        let newList = this.state.basket;
        newList[name].quantity--;
        this.setState({
            basket: newList,
        });
    };
    toggleChacked = (name) => {
        let newList = this.state.basket;
        if (this.state.basket[name].chacked) {
            newList[name].chacked = false;
        } else {
            newList[name].chacked = true;
        }

        this.setState({
            basket: newList,
        });
    };
    render() {
        return (
            <div className="main">
                <Search />
                <Basket
                    type="basket"
                    title="basket"
                    list={this.state.basket}
                    removeFromBasket={this.removeFromBasket}
                    toggleChacked={this.toggleChacked}
                />
                <Groceries
                    type="groceries"
                    title="groceries"
                    groceries={this.state.groceries}
                    addToBasket={this.addToBasket}
                />
            </div>
        );
    }
}
