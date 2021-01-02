import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from "../pages/Home/home"
import Topics from "../pages/Topics/topics"
import Login from '../pages/Login/Login'

const Routes = () => (
    <Switch>
        <Route path={"/"} exact component={Home}/>
        <Route path={"/topics"} exact component={Topics}/>
        <Route path={"/login"} exact component={Login}/>
    </Switch>
)

export default Routes;