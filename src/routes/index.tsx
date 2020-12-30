import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from "../pages/Home/home"
import Topics from "../pages/Topics/topics"

const Routes = () => (
    <Switch>
        <Route path={"/"} exact component={Home}/>
        <Route path={"/topics"} exact component={Topics}/>
    </Switch>
)

export default Routes;