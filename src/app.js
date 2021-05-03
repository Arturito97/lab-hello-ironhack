import React from 'react';
import Declarative from "./components/declarative";
import Components from "./components/Components";
import SingleWay from "./components/Single-Way";
import JSX from "./components/JSX";
import ReactJS from "./components/ReactJS"
import './app.css'

function App() {
    return (
        <div>
        <div className="top-menu">
           <ReactJS /> 
        </div>
        <div className="bottom-menu">
        <Declarative />
        <Components />
        <SingleWay />
        <JSX />
        </div>
        </div>
    )
}

export default App;