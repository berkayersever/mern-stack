import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import FormDemo from './pages/FormDemo';
import NotFound from './pages/NotFound';
import Category from './pages/Category';
import Orders from './pages/Orders';
import Cart from './pages/Cart';
import Account from './pages/Account';
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
                        <Route path="/cart" exact component={Cart}/>
                        <Route path="/orders" exact component={Orders}/>
                        <Route path="/account" exact component={Account}/>
                        <Route path="/category/:slug" component={Category}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
