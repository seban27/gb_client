import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Login from './components/login/';
import Employees from './components/employees';

import Session from './utils/Session';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        Session.getToken()
        ? <Component {...props} />
        : <Redirect to='/' />
    )} />
)

const Routes = () => {
        return (
            <Switch>
                <Route exact path= "/" render={(props) => ( Session.getToken() ? (<Redirect to="/employees" />) : (<Login {...props} />) )} />
                <PrivateRoute exact path='/employees' component={Employees} />
            </Switch>
        );
}

export default Routes;
