import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import App from "./components/App";
import ShoppingCart from "./components/ShoppingCart";
import history from './history'


export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/sepetim" component={ShoppingCart} />
                </Switch>
            </Router>
        )
    }
}