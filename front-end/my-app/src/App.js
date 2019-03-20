import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div>Changes stuff</div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Edit Copy an you win</p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn Softagram
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
