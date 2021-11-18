import React from "react";
import ReactDOM from "react-dom";
import "./Search.css";
export default class Search extends React.Component {
    search = () => {
        alert("change");
    };
    render() {
        return (
            <div className="search">
                <input
                    className="search-bar"
                    type={Text}
                    placeholder={
                        'write here to filter your results (e.g "eggs")'
                    }
                    onChange={this.search}
                />
            </div>
        );
    }
}
