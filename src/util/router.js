import React, {Component} from 'react';

import {BrowserRouter, Route, Switch} from "react-router-dom";

import Layout from "../components/Layout";

import Home from "../pages/Home";
import Projects from "../pages/Projects";
import NotFound from "../pages/NotFound";
import Thanks from "../pages/Thanks";

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path={"/projects"} component={Projects}/>
                        <Route exact path={"/thanks"} component={Thanks}/>
                        <Route exact path={"/"} component={Home}/>

                        <Route component={NotFound}/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default Router;