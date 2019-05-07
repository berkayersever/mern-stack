import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import FormDemo from './pages/FormDemo';
import NotFound from './pages/NotFound';
import './App.css';


class App extends Component {
    render() {
        console.log(this.state);
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/forms" exact component={FormDemo}/>
                        <Route component={NotFound} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
