import React from 'react';
import DynamicCounter from './components/DynamicCounter';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <DynamicCounter label="Apples"  max={5}  min={0}   />
                <DynamicCounter label="Oranges" max={10} min={-10} />
                <DynamicCounter label="Lemons"  max={1}  min={-1}  />
                <img src={logo} className="App-logo" alt="logo"/>
                <h1>Hello World!</h1>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
