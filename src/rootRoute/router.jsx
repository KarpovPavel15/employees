import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { RootPageContainer } from '../modules';
import { EmployeesContainer } from '../modules/employees';

export const RootRoute = () => {
    return (
        <div>
            <header><RootPageContainer/></header>
            <main>
                <Switch>
                    <Route exact path='/employees' component={EmployeesContainer}/>
                </Switch>
            </main>
            <footer>Footer</footer>
        </div>)
};
