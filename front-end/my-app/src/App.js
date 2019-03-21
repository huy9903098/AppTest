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
                    <p>No no</p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Hack Softagram
                    </a>
                    <p>It's coding time</p>
                </header>
            </div>
        );
    }
}

export default App;
