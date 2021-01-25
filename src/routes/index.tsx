import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from "../pages/Home/home"
import Topics from "../pages/Topics/topics"
import Writing from "../pages/Writing/Writing"

const Routes = () => (
    <Switch>
        <Route path={"/"} exact component={Home}/>
        <Route path={"/topics"} exact component={Topics}/>
        <Route path={"/writing"} exact component={Writing}/>
    </Switch>
)

export default Routes;
