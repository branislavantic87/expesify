import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import Header from '../components/Header'
import ExpensePage from '../components/ExpensePage'
import CreateExpense from '../components/CreateExpense';
import EditExpense from '../components/EditExpense';
import Help from '../components/Help';
import NotFound from '../components/NotFound';



const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={ExpensePage} exact={true} />
                <Route path="/create" component={CreateExpense} />
                <Route path="/edit/:id" component={EditExpense} />
                <Route path="/help" component={Help} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);



export default AppRouter;